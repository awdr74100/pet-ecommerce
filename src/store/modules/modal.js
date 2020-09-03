import Vue from 'vue';

const vm = Vue.prototype;

export default {
  strict: true,
  namespaced: true,
  state: {
    product: {},
    coupon: {},
  },
  mutations: {
    OPENMODAL(state, { modal, product = {}, coupon = {} }) {
      state.product = product;
      state.coupon = coupon;
      vm.$modal.show(modal);
    },
    CLOSEMODAL(state, { modal }) {
      state.product = {};
      state.coupon = {};
      if (modal) vm.$modal.hide(modal);
    },
  },
};
