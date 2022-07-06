import vscode from "vscode";

import { WELCOME_MESSAGE } from "./constants/message";
import { MAIN_PANEL_NAME } from "./constants/name";
import getNonce from "./utils/getNonce";

class WebViewPanel {
  constructor(extensionUri) {
    this.extensionUri = extensionUri;
    this.mainPanel = null;
  }

  initializeWebView() {
    vscode.window.showInformationMessage(WELCOME_MESSAGE);

    this.mainPanel = vscode.window.createWebviewPanel(
      "RestApiTester",
      MAIN_PANEL_NAME,
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vscode.Uri.joinPath(this.extensionUri, "media"),
          vscode.Uri.joinPath(this.extensionUri, "dist"),
        ],
      },
    );

    this.mainPanel.webview.html = this.#getHtmlForWebView(this.mainPanel);

    return this.mainPanel;
  }

  #getHtmlForWebView(panel) {
    const scriptPath = vscode.Uri.joinPath(
      this.extensionUri,
      "dist",
      "bundle.js",
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

    const resetCssSrc = panel.webview.asWebviewUri(resetCssPath);
    const mainStylesCssSrc = panel.webview.asWebviewUri(vscodeStylesCssPath);
    const scriptSrc = panel.webview.asWebviewUri(scriptPath);
    const nonce = getNonce();

    panel.iconPath = vscode.Uri.joinPath(
      this.extensionUri,
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
          <script nonce="${nonce}" src="${scriptSrc}"></script>
        </body>
      </html>`;
  }
}

export default WebViewPanel;
