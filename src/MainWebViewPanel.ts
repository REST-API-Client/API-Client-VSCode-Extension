import { v4 as uuidv4 } from "uuid";
import vscode from "vscode";

import { COLLECTION, COMMAND, MESSAGE, NAME, TYPE } from "./constants";
import {
  generateResponseObject,
  getBody,
  getHeaders,
  getNonce,
  getUrl,
} from "./utils";

class MainWebViewPanel {
  #url;
  #body;
  #method;
  #headers;
  #extensionUri;
  mainPanel;

  constructor(extensionUri, stateManager, sidebarWebViewPanel) {
    this.#extensionUri = extensionUri;
    this.stateManager = stateManager;
    this.sidebarWebViewPanel = sidebarWebViewPanel;
  }

  initializeWebView() {
    this.mainPanel = vscode.window.createWebviewPanel(
      TYPE.WEB_VIEW_TYPE,
      NAME.MAIN_PANEL_NAME,
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vscode.Uri.joinPath(this.#extensionUri, "media"),
          vscode.Uri.joinPath(this.#extensionUri, "dist"),
        ],
      },
    );

    this.mainPanel.webview.html = this.#getHtmlForWebView(this.mainPanel);

    this.#receiveWebviewMessage();

    return this.mainPanel;
  }

  #receiveWebviewMessage() {
    this.mainPanel.webview.onDidReceiveMessage(
      ({
        requestMethod,
        requestUrl,
        authOption,
        authData,
        bodyOption,
        bodyRawOption,
        bodyRawData,
        keyValueTableData,
        command,
      }) => {
        if (command === COMMAND.ALERT_COPY) {
          vscode.window.showInformationMessage(MESSAGE.COPY_SUCCESFUL_MESSAGE);

          return;
        }

        if (requestUrl.length === 0) {
          vscode.window.showWarningMessage(MESSAGE.WARNING_MESSAGE);

          return;
        }
        const requestObject = {
          requestMethod,
          requestUrl,
          authOption,
          authData,
          bodyOption,
          bodyRawOption,
          bodyRawData,
          keyValueTableData,
          command,
        };
        this.#url = getUrl(requestUrl);
        this.#method = requestMethod;
        this.#headers = getHeaders(keyValueTableData, authOption, authData);
        this.#body = getBody(
          keyValueTableData,
          bodyOption,
          bodyRawOption,
          bodyRawData,
        );

        this.#postWebviewMessage(requestObject);
      },
    );
  }

  async #postWebviewMessage(requestObject) {
    const { userRequestHistory } = this.stateManager.getExtensionContext(
      COLLECTION.HISTORY_COLLECTION,
    );

    const axiosConfiguration = {
      url: this.#url,
      method: this.#method,
      headers: this.#headers,
      data: this.#body,
      responseType: "text",
    };

    const responseObject = await generateResponseObject(axiosConfiguration);
    const requestedTime = new Date().getTime();

    if (responseObject.type !== MESSAGE.ERROR) {
      if (!userRequestHistory) {
        await this.stateManager.addExtensionContext(
          COLLECTION.HISTORY_COLLECTION,
          {
            history: [
              {
                ...axiosConfiguration,
                requestedTime,
                favoritedTime: null,
                isUserFavorite: false,
                id: uuidv4(),
                requestObject,
              },
            ],
          },
        );
      } else {
        await this.stateManager.addExtensionContext(
          COLLECTION.HISTORY_COLLECTION,
          {
            history: [
              {
                ...axiosConfiguration,
                requestedTime,
                favoritedTime: null,
                isUserFavorite: false,
                id: uuidv4(),
                requestObject,
              },
              ...userRequestHistory,
            ],
          },
        );
      }
    }

    console.log(
      this.stateManager.getExtensionContext(COLLECTION.HISTORY_COLLECTION),
    );
    this.mainPanel.webview.postMessage(responseObject);
    this.sidebarWebViewPanel.postMainWebViewPanelMessage(
      this.stateManager.getExtensionContext(COLLECTION.HISTORY_COLLECTION),
      this.stateManager.getExtensionContext(COLLECTION.FAVORITES_COLLECTION),
    );
  }

  #getHtmlForWebView(panel) {
    const scriptPath = vscode.Uri.joinPath(
      this.#extensionUri,
      "dist",
      "bundle.js",
    );
    const resetCssPath = vscode.Uri.joinPath(
      this.#extensionUri,
      "media",
      "reset.css",
    );
    const vscodeStylesCssPath = vscode.Uri.joinPath(
      this.#extensionUri,
      "media",
      "vscode.css",
    );

    const resetCssSrc = panel.webview.asWebviewUri(resetCssPath);
    const mainStylesCssSrc = panel.webview.asWebviewUri(vscodeStylesCssPath);
    const scriptSrc = panel.webview.asWebviewUri(scriptPath);
    const nonce = getNonce();

    panel.iconPath = vscode.Uri.joinPath(
      this.#extensionUri,
      "icons/images/icon.png",
    );

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>REST API Tester</title>
          <link href="${resetCssSrc}" rel="stylesheet">
          <link href="${mainStylesCssSrc}" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script nonce="${nonce}">
          let vscode;

          if (typeof acquireVsCodeApi !== "undefined") {
            vscode = acquireVsCodeApi();
          }
          </script>
          <script src="${scriptSrc}" nonce="${nonce}"></script>
        </body>
      </html>`;
  }
}

export default MainWebViewPanel;
