import * as vscode from "vscode";

import { COLLECTION } from "./constants";
import { filterDuplicatesFromObject } from "./utils";
import { IUserRequestSidebarState } from "./utils/type";

class ExtentionStateManager {
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  getExtensionContext(state: string) {
    const userRequestHistory: IUserRequestSidebarState[] | undefined =
      this.context.globalState.get(state);

    return {
      userRequestHistory: userRequestHistory,
    };
  }

  async addExtensionContext(
    state: string,
    { history }: { history: IUserRequestSidebarState[] },
  ) {
    await this.context.globalState.update(state, history);
  }

  async updateExtensionContext(state: string, id: string, status?: string) {
    const currentTime = new Date().getTime();
    const globalHistoryState: IUserRequestSidebarState[] | undefined =
      this.context.globalState.get(state);
    const globalFavoritesState: IUserRequestSidebarState[] | undefined =
      this.context.globalState.get(COLLECTION.FAVORITES_COLLECTION);

    if (!globalHistoryState || !globalFavoritesState) return;

    globalHistoryState.map(
      (history) =>
        history.id === id &&
        ((history.isUserFavorite = !history.isUserFavorite),
        (history.favoritedTime = currentTime)),
    );

    await this.context.globalState.update(state, [...globalHistoryState]);

    if (status) {
      const duplicateFilteredUserFavoriteCollection =
        filterDuplicatesFromObject(
          globalHistoryState,
          globalFavoritesState,
          id,
        );

      await this.context.globalState.update(COLLECTION.FAVORITES_COLLECTION, [
        ...duplicateFilteredUserFavoriteCollection,
      ]);
    }
  }

  async deleteExtensionContext(targetExtensionContext: string, id?: string) {
    const targetGlobalState: IUserRequestSidebarState[] | undefined =
      this.context.globalState.get(targetExtensionContext);

    if (!targetGlobalState) return;

    if (!id) {
      await this.context.globalState.update(targetExtensionContext, []);
    } else {
      const filteredExtenionContext = targetGlobalState.filter(
        (history) => history.id !== id,
      );

      await this.context.globalState.update(targetExtensionContext, [
        ...filteredExtenionContext,
      ]);
    }
  }
}

export default ExtentionStateManager;
