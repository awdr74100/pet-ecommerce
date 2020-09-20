import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import notification from './modules/notification';
import admin from './modules/admin';
import user from './modules/user';
import image from './modules/image';
import products from './modules/products';
import coupons from './modules/coupons';
import cart from './modules/cart';
import orders from './modules/orders';
import payment from './modules/payment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openSidebar: !(window.innerWidth < 768),
    skeletonTarget: '',
  },
  mutations: {
    SIDEBARTOGGLE(state, status) {
      state.openSidebar = status;
    },
    SKELETONACTIVE(state, target) {
      state.skeletonTarget = target;
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
    cart,
    orders,
    payment,
  },
});
