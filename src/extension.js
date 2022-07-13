import vscode from "vscode";

import ExtentionStateManager from "./ExtensionStateManger";
import MainWebViewPanel from "./MainWebViewPanel";
import SidebarWebViewPanel from "./SideBarWebViewPanel";

export async function activate(context) {
  const stateManager = new ExtentionStateManager(context);

  if (!stateManager.getExtensionContext("userRequestHistory")) {
    await stateManager.updateExtensionContext("userRequestHistory", {
      history: null,
    });
  }

  console.log(stateManager.getExtensionContext("userRequestHistory"));

  const SidebarWebViewProvider = new SidebarWebViewPanel(
    context.extensionUri,
    stateManager,
  );

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "rest-api-tester.historyMenu",
      SidebarWebViewProvider,
      { webviewOptions: { retainContextWhenHidden: true } },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("rest-api-tester.newRequest", () => {
      const MainWebViewProvider = new MainWebViewPanel(
        context.extensionUri,
        stateManager,
        SidebarWebViewProvider,
      );

      MainWebViewProvider.initializeWebView();
    }),
  );
}

export function deactivate() {}
