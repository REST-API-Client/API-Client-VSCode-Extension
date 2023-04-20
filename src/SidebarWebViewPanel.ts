import * as vscode from "vscode";

import { CATEGORY, COLLECTION, COMMAND, MESSAGE, TYPE } from "./constants";
import { filterObjectKey, generateResponseObject, getNonce } from "./utils";
import ExtentionStateManager from "./ExtensionStateManger";
import { IUserRequestSidebarState } from "./utils/type";

class SidebarWebViewPanel {
  private sidebarWebview: vscode.WebviewView | null = null;
  private extensionUri;
  public mainWebViewPanel: vscode.WebviewPanel | null = null;
  public stateManager;

  constructor(extensionUri: vscode.Uri, stateManager: ExtentionStateManager) {
    this.extensionUri = extensionUri;
    this.stateManager = stateManager;
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void | Thenable<void> {
    this.sidebarWebview = webviewView;

    this.sidebarWebview.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this.extensionUri, "media"),
        vscode.Uri.joinPath(this.extensionUri, "dist"),
      ],
    };

    this.sidebarWebview.webview.html = this.getHtmlForSidebarWebView(
      webviewView.webview,
    );

    this.sidebarWebview.webview.postMessage({
      messageCategory: CATEGORY.COLLECTION_DATA,
      history: this.stateManager.getExtensionContext(
        COLLECTION.HISTORY_COLLECTION,
      ),
      favorites: this.stateManager.getExtensionContext(
        COLLECTION.FAVORITES_COLLECTION,
      ),
    });

    this.receiveSidebarWebViewMessage();
  }

  postMainWebViewPanelMessage(
    userHistoryData: {
      userRequestHistory: IUserRequestSidebarState[] | undefined;
    },
    userFavoritesData: {
      userRequestHistory: IUserRequestSidebarState[] | undefined;
    },
  ) {
    if (!this.sidebarWebview) return;

    this.sidebarWebview.webview.postMessage({
      messageCategory: CATEGORY.COLLECTION_DATA,
      history: userHistoryData,
      favorites: userFavoritesData,
    });
  }

  private receiveSidebarWebViewMessage() {
    if (!this.sidebarWebview) return;

    this.sidebarWebview.webview.onDidReceiveMessage(
      async ({
        command,
        id,
        target,
      }: {
        command: string;
        id: string;
        target: string;
      }) => {
        if (command === COMMAND.START_APP) {
          vscode.commands.executeCommand(COMMAND.MAIN_WEB_VIEW_PANEL);
        } else if (command === COMMAND.ADD_TO_FAVORITES) {
          await this.stateManager.updateExtensionContext(
            COLLECTION.HISTORY_COLLECTION,
            id,
            COMMAND.ADD,
          );
        } else if (command === COMMAND.REMOVE_FROM_FAVORITES) {
          await this.stateManager.updateExtensionContext(
            COLLECTION.HISTORY_COLLECTION,
            id,
          );

          await this.stateManager.deleteExtensionContext(
            COLLECTION.FAVORITES_COLLECTION,
            id,
          );
        } else if (command === COMMAND.DELETE) {
          if (target === COLLECTION.FAVORITES_COLLECTION) {
            await this.stateManager.updateExtensionContext(
              COLLECTION.HISTORY_COLLECTION,
              id,
            );
          }

          await this.stateManager.deleteExtensionContext(target, id);
        } else if (command === COMMAND.DELETE_ALL_COLLECTION) {
          const answer = await vscode.window.showWarningMessage(
            MESSAGE.DELETE_REMINDER,
            MESSAGE.YES,
            MESSAGE.NO,
          );

          if (answer === MESSAGE.YES) {
            if (!this.sidebarWebview) return;

            await this.stateManager.deleteExtensionContext(target);

            this.sidebarWebview.webview.postMessage({
              messageCategory: CATEGORY.DELETION_COMPLETE,
              target,
            });
          }
        } else {
          if (!this.mainWebViewPanel) {
            vscode.commands.executeCommand(COMMAND.MAIN_WEB_VIEW_PANEL);
          }

          setTimeout(async () => {
            if (!this.mainWebViewPanel) return;

            this.mainWebViewPanel.webview.postMessage({
              type: COLLECTION.COLLECTION_REQUEST,
            });

            const targetHistory = this.stateManager.getExtensionContext(target);

            const selectedCollection = filterObjectKey(
              targetHistory,
              id,
              COLLECTION.FILTERABLE_OBJECT_KEY,
            );

            const responseObject = await generateResponseObject(
              selectedCollection,
            );

            if (selectedCollection) {
              this.mainWebViewPanel.webview.postMessage(responseObject);
              this.mainWebViewPanel.webview.postMessage({
                type: TYPE.SIDE_BAR_DATA,
                ...selectedCollection.requestObject,
              });
            }
          }, 1000);
        }
      },
    );
  }

  private getHtmlForSidebarWebView(webview: vscode.Webview) {
    const scriptPath = vscode.Uri.joinPath(
      this.extensionUri,
      "dist",
      "sidebar.js",
    );
    const resetCssPath = vscode.Uri.joinPath(
      this.extensionUri,
      "media",
      "reset.css",
    );
    const vscodeStylesCssPath = vscode.Uri.joinPath(
      this.extensionUri,
      "media",
      "vscode.css",
    );

    const resetCssSrc = webview.asWebviewUri(resetCssPath);
    const mainStylesCssSrc = webview.asWebviewUri(vscodeStylesCssPath);
    const scriptSrc = webview.asWebviewUri(scriptPath);
    const nonce = getNonce();

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>REST API Tester Sidebar</title>
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
          <script nonce="${nonce}" src="${scriptSrc}"></script>
        </body>
      </html>`;
  }
}

export default SidebarWebViewPanel;
