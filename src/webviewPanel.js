const vscode = require("vscode");

const getNounce = require("./utils/getNounce");

class WebViewPanel {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  getHtmlForWebView(panel) {
    const scriptPath = vscode.Uri.joinPath(
      this._extensionUri,
      "dist",
      "bundle.js",
    );
    const resetCssPath = vscode.Uri.joinPath(
      this._extensionUri,
      "media",
      "reset.css",
    );
    const vscodeStylesCssPath = vscode.Uri.joinPath(
      this._extensionUri,
      "media",
      "vscode.css",
    );

    const resetCssSrc = panel.webview.asWebviewUri(resetCssPath);
    const mainStylesCssSrc = panel.webview.asWebviewUri(vscodeStylesCssPath);
    const scriptSrc = panel.webview.asWebviewUri(scriptPath);
    const nonce = getNounce();

    panel.iconPath = vscode.Uri.joinPath(
      this._extensionUri,
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
        <script src="${scriptSrc}"></script>
      </body>
      </html>`;
  }
}

module.exports = WebViewPanel;
