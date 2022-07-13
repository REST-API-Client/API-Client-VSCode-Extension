import vscode from "vscode";

import { getNonce } from "./utils";

class SidebarWebViewPanel {
  #extensionUri;
  #view;

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
      messageType: "History",
      history: this.stateManager.getExtensionContext("userRequestHistory"),
    });

    this.#receiveSidebarWebViewMessage();

    return;
  }

  postMainWebViewPanelMessage(userHistoryData) {
    this.#view.webview.postMessage({
      messageType: "History",
      history: userHistoryData,
    });

    return;
  }

  #receiveSidebarWebViewMessage() {
    this.#view.webview.onDidReceiveMessage(({ command }) => {
      if (command === "Start App") {
        vscode.commands.executeCommand("rest-api-tester.newRequest");

        return;
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
