export default {
  strict: true,
  namespaced: true,
  state: {
    cache: {},
    caches: [],
  },
  mutations: {
    OPENMODAL(state, { modal, cache, caches }) {
      state.cache = cache;
      state.caches = caches;
      this._vm.$modal.show(modal);
    },
    CLOSEMODAL(state, { modal }) {
      state.cache = {};
      state.caches = [];
      this._vm.$modal.hide(modal);
    },
  },
};
