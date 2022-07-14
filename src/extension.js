import vscode from "vscode";

import ExtentionStateManager from "./ExtensionStateManger";
import MainWebViewPanel from "./MainWebViewPanel";
import SidebarWebViewPanel from "./SideBarWebViewPanel";

export async function activate(context) {
  const stateManager = new ExtentionStateManager(context);
  const SidebarWebViewProvider = new SidebarWebViewPanel(
    context.extensionUri,
    stateManager,
  );
  const MainWebViewProvider = new MainWebViewPanel(
    context.extensionUri,
    stateManager,
    SidebarWebViewProvider,
  );

  if (!stateManager.getExtensionContext("userRequestHistory")) {
    await stateManager.addExtensionContext("userRequestHistory", {
      history: [],
    });
  }

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "rest-api-tester.historyMenu",
      SidebarWebViewProvider,
      { webviewOptions: { retainContextWhenHidden: true } },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("rest-api-tester.newRequest", () => {
      MainWebViewProvider.initializeWebView();
    }),
  );
}

export function deactivate() {}
