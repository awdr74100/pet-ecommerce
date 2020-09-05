import Vue from 'vue';

const vm = Vue.prototype;

export default {
  strict: true,
  namespaced: true,
  state: {
    action: '',
    cache: {},
    caches: [],
  },
  mutations: {
    OPENMODAL(state, payload) {
      state.action = payload.action;
      state.cache = payload.cache || {};
      state.caches = payload.caches || [];
      vm.$modal.show(payload.modal);
    },
    CLOSEMODAL(state, { modal }) {
      state.action = '';
      state.cache = {};
      state.caches = [];
      vm.$modal.hide(modal);
    },
  },
};
