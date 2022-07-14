import { COLLECTION } from "./constants";
import { filterDuplicatesFromObject } from "./utils";

class ExtentionStateManager {
  #context;

  constructor(context) {
    this.#context = context;
  }

  getExtensionContext(state) {
    return {
      userRequestHistory: this.#context.globalState.get(state),
    };
  }

  async addExtensionContext(state, { history }) {
    await this.#context.globalState.update(state, history);
  }

  async updateExtensionContext(state, id, status) {
    this.#context.globalState
      .get(state)
      .map(
        (history) =>
          history.id === id &&
          (history.isUserFavorite = !history.isUserFavorite),
      );

    await this.#context.globalState.update(state, [
      ...this.#context.globalState.get(state),
    ]);

    if (status) {
      const duplicateFilteredUserFavoriteCollection =
        filterDuplicatesFromObject(
          this.#context.globalState.get(state),
          this.#context.globalState.get(COLLECTION.FAVORITES_COLLECTION),
          id,
        );

      await this.#context.globalState.update(COLLECTION.FAVORITES_COLLECTION, [
        ...duplicateFilteredUserFavoriteCollection,
      ]);
    }
  }

  async deleteExtensionContext(targetExtensionContext, id) {
    if (!id) {
      await this.#context.globalState.update(targetExtensionContext, []);
    } else {
      const filteredExtenionContext = this.#context.globalState
        .get(targetExtensionContext)
        .filter((history) => history.id !== id);

      await this.#context.globalState.update(targetExtensionContext, [
        ...filteredExtenionContext,
      ]);
    }
  }
}

export default ExtentionStateManager;
