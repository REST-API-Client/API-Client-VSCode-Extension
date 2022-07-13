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

  async updateExtensionContext(state, data) {
    await this.#context.globalState.update(state, data.history);

    return;
  }
}

export default ExtentionStateManager;
