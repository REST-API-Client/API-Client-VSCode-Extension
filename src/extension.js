import vscode from "vscode";

import WebViewPanel from "./WebViewPanel";

export function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("rest-api-tester.newRequest", () => {
      const WebView = new WebViewPanel(context.extensionUri);

      WebView.initializeWebView();
    }),
  );
}

export function deactivate() {}
