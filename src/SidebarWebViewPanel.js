import vscode from "vscode";

import { CATEGORY, COLLECTION, COMMAND, MESSAGE } from "./constants";
import { filterObjectKey, generateResponseObject, getNonce } from "./utils";

class SidebarWebViewPanel {
  #extensionUri;
  #view;
  mainWebViewPanel;

  constructor(extensionUri, stateManager) {
    this.#extensionUri = extensionUri;
    this.stateManager = stateManager;
  }

  resolveWebviewView(webviewView) {
    this.#view = webviewView;

    this.#view.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this.#extensionUri, "media"),
        vscode.Uri.joinPath(this.#extensionUri, "dist"),
      ],
    };

    this.#view.webview.html = this.#getHtmlForSidebarWebView(
      webviewView.webview,
    );

    this.#view.webview.postMessage({
      messageCategory: CATEGORY.COLLECTION_DATA,
      history: this.stateManager.getExtensionContext(
        COLLECTION.HISTORY_COLLECTION,
      ),
      favorites: this.stateManager.getExtensionContext(
        COLLECTION.FAVORITES_COLLECTION,
      ),
    });

    this.#receiveSidebarWebViewMessage();
  }

  postMainWebViewPanelMessage(userHistoryData, userFavoritesData) {
    this.#view.webview.postMessage({
      messageCategory: CATEGORY.COLLECTION_DATA,
      history: userHistoryData,
      favorites: userFavoritesData,
    });
  }

  #receiveSidebarWebViewMessage() {
    this.#view.webview.onDidReceiveMessage(async ({ command, id, target }) => {
      if (command === COMMAND.START_APP) {
        const columnToShowIn = vscode.window.activeTextEditor
          ? vscode.window.activeTextEditor.viewColumn
          : undefined;

        return this.mainWebViewPanel
          ? this.mainWebViewPanel.reveal(columnToShowIn)
          : vscode.commands.executeCommand(COMMAND.MAIN_WEB_VIEW_PANEL);
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
          await this.stateManager.deleteExtensionContext(target);

          this.#view.webview.postMessage({
            messageCategory: CATEGORY.DELETION_COMPLETE,
            target,
          });
        }
      } else {
        if (!this.mainWebViewPanel) {
          vscode.commands.executeCommand(COMMAND.MAIN_WEB_VIEW_PANEL);
        }

        setTimeout(async () => {
          this.mainWebViewPanel.webview.postMessage({
            type: COLLECTION.COLLECTION_REQUEST,
          });

          const selectedCollection = filterObjectKey(
            this.stateManager.getExtensionContext(target),
            id,
            COLLECTION.FILTERABLE_OBJECT_KEY,
          );

          const responseObject = await generateResponseObject(
            selectedCollection,
          );

          this.mainWebViewPanel.webview.postMessage(responseObject);
        }, 1000);
      }
    });
  }

  #getHtmlForSidebarWebView(webview) {
    const scriptPath = vscode.Uri.joinPath(
      this.#extensionUri,
      "dist",
      "sidebar.js",
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
          <script nonce="${nonce}" src="${scriptSrc}"></script>
        </body>
      </html>`;
  }
}

export default SidebarWebViewPanel;
