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

    return;
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
      const arr = [];
      const userFavoritesCollection = this.#context.globalState
        .get(state)
        .filter((history) => history.isUserFavorite);

      const prevUserFavoriteCollection =
        this.#context.globalState
          .get("userFavorites")
          ?.filter((history) => history.id !== id) || [];

      const totalUserFavoriteCollection = [
        ...prevUserFavoriteCollection,
        ...userFavoritesCollection,
      ];

      const duplicateFilteredUserFavoriteCollection =
        totalUserFavoriteCollection.filter((history) => {
          if (!arr.includes(history.id)) {
            arr.push(history.id);
            return history;
          }
        });

      await this.#context.globalState.update("userFavorites", [
        ...duplicateFilteredUserFavoriteCollection,
      ]);
    }

    return;
  }

  async deleteExtensionContext(targetExtensionContext, id) {
    const filteredExtenionContext = this.#context.globalState
      .get(targetExtensionContext)
      .filter((history) => history.id !== id);

    await this.#context.globalState.update(targetExtensionContext, [
      ...filteredExtenionContext,
    ]);
  }
}

export default ExtentionStateManager;
