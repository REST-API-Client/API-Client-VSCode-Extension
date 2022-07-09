import vscode from "vscode";

import { WARNING_MESSAGE, WELCOME_MESSAGE } from "./constants/message";
import { MAIN_PANEL_NAME } from "./constants/name";
import {
  generateResponseObject,
  getBody,
  getHeaders,
  getNonce,
  getUrl,
} from "./utils";

class WebViewPanel {
  #extensionUri;
  #mainPanel;
  #url;
  #method;
  #headers;
  #body;

  constructor(extensionUri) {
    this.#extensionUri = extensionUri;
  }

  initializeWebView() {
    vscode.window.showInformationMessage(WELCOME_MESSAGE);

    this.#mainPanel = vscode.window.createWebviewPanel(
      "RestApiTester",
      MAIN_PANEL_NAME,
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

    this.#mainPanel.webview.html = this.#getHtmlForWebView(this.#mainPanel);
    this.#receiveWebviewMessage();
  }

  #receiveWebviewMessage() {
    this.#mainPanel.webview.onDidReceiveMessage(
      ({
        requestMethod,
        requestUrl,
        authOption,
        authData,
        bodyOption,
        bodyRawData,
        keyValueData,
        purpose,
      }) => {
        if (purpose === "Alert Copy") {
          vscode.window.showInformationMessage("Copied to Clipboard ✅");

          return;
        }

        if (requestUrl.length === 0) {
          vscode.window.showWarningMessage(WARNING_MESSAGE);

          return;
        }

        this.#url = getUrl(requestUrl);
        this.#method = requestMethod;
        this.#headers = getHeaders(keyValueData, authOption, authData);
        this.#body = getBody(keyValueData, bodyOption, bodyRawData);

        this.#postWebviewMessage();

        return;
      },
    );
  }

  async #postWebviewMessage() {
    const axiosConfiguration = {
      url: this.#url,
      method: this.#method,
      headers: this.#headers,
      data: this.#body,
    };

    const responseObject = await generateResponseObject(axiosConfiguration);

    this.#mainPanel.webview.postMessage(responseObject);

    return;
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
      "icons/extensionIcon.png",
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
          <script nonce="${nonce}"></script>
          <script src="${scriptSrc}"></script>
        </body>
      </html>`;
  }
}

export default WebViewPanel;
