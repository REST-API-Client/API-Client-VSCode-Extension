import * as vscode from "vscode";

import { COLLECTION, COMMAND, MESSAGE } from "./constants";
import ExtentionStateManager from "./ExtensionStateManger";
import MainWebViewPanel from "./MainWebViewPanel";
import SidebarWebViewPanel from "./SidebarWebViewPanel";

export async function activate(context: vscode.ExtensionContext) {
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
  let currentPanel: vscode.WebviewPanel | null = null;

  if (!StateManager.getExtensionContext(COLLECTION.HISTORY_COLLECTION)) {
    await StateManager.addExtensionContext(COLLECTION.HISTORY_COLLECTION, {
      history: [],
    });
  }

  if (!StateManager.getExtensionContext(COLLECTION.FAVORITES_COLLECTION)) {
    await StateManager.addExtensionContext(COLLECTION.FAVORITES_COLLECTION, {
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

        if (MainWebViewProvider.mainPanel) {
          MainWebViewProvider.mainPanel.onDidDispose(() => {
            SidebarWebViewProvider.mainWebViewPanel = null;
            currentPanel = null;
          }, null);
        }
      }
    }),
  );
}
