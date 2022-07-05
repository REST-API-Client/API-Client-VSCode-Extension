const vscode = require("vscode");
const WebViewPanel = require("./WebViewPanel");
const { WELCOME_MESSAGE, MAIN_PANEL_NAME } = require("./constants/constants");

function activate(context) {
  const WebView = new WebViewPanel(context.extensionUri);

  context.subscriptions.push(
    vscode.commands.registerCommand("rest-api-tester.newRequest", () => {
      const mainPanel = vscode.window.createWebviewPanel(
        "RestApiTester",
        MAIN_PANEL_NAME,
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.joinPath(context.extensionUri, "media"),
            vscode.Uri.joinPath(context.extensionUri, "dist"),
          ],
        },
      );

      vscode.window.showInformationMessage(WELCOME_MESSAGE);
      mainPanel.webview.html = WebView.getHtmlForWebView(mainPanel);
    }),
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
