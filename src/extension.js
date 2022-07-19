import vscode from "vscode";

import { COLLECTION, COMMAND, MESSAGE } from "./constants";
import ExtentionStateManager from "./ExtensionStateManger";
import MainWebViewPanel from "./MainWebViewPanel";
import SidebarWebViewPanel from "./SideBarWebViewPanel";

export async function activate(context) {
  const StateManager = new ExtentionStateManager(context);
  const SidebarWebViewProvider = new SidebarWebViewPanel(
    context.extensionUri,
    StateManager,
  );
  const MainWebViewProvider = new MainWebViewPanel(
    context.extensionUri,
    StateManager,
    SidebarWebViewProvider,
  );
  let currentPanel = null;

  if (!StateManager.getExtensionContext(COLLECTION.HISTORY_COLLECTION)) {
    await StateManager.addExtensionContext(COLLECTION.HISTORY_COLLECTION, {
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
      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.One);
      } else {
        currentPanel = MainWebViewProvider.initializeWebView();

        SidebarWebViewProvider.mainWebViewPanel = MainWebViewProvider.mainPanel;

        MainWebViewProvider.mainPanel.onDidDispose(() => {
          SidebarWebViewProvider.mainWebViewPanel = null;
          currentPanel = null;
        }, null);
      }
    }),
  );
}
