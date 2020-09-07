import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import notification from './modules/notification';
import admin from './modules/admin';
import user from './modules/user';
import image from './modules/image';
import products from './modules/products';
import coupons from './modules/coupons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openSidebar: !(window.innerWidth < 768),
    skeletonLoading: false,
  },
  mutations: {
    SIDEBARTOGGLE(state, status) {
      state.openSidebar = status;
    },
    SKELETONTOGGLE(state, status) {
      state.skeletonLoading = status;
    },
  },
  modules: {
    modal,
    notification,
    admin,
    user,
    image,
    products,
    coupons,
  },
});
