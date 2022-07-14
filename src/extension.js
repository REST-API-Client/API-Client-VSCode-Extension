import vscode from "vscode";

import { COLLECTION, COMMAND, MESSAGE } from "./constants";
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

  if (!stateManager.getExtensionContext(COLLECTION.HISTORY_COLLECTION)) {
    await stateManager.addExtensionContext(COLLECTION.HISTORY_COLLECTION, {
      history: [],
    });
  }

  vscode.window.showInformationMessage(MESSAGE.WELCOME_MESSAGE);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      COMMAND.SIDEBAR_WEB_VIEW_PANEL,
      SidebarWebViewProvider,
      { webviewOptions: { retainContextWhenHidden: true } },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND.MAIN_WEB_VIEW_PANEL, () => {
      MainWebViewProvider.initializeWebView();
    }),
  );
}

export function deactivate() {}
