import Vue from 'vue';

const vm = Vue.prototype;

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
      vm.$modal.show(modal);
    },
    CLOSEMODAL(state, { modal }) {
      state.cache = {};
      state.caches = [];
      vm.$modal.hide(modal);
    },
  },
};
