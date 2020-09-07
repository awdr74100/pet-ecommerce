// import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    coupons: [],
  },
  actions: {
    // addCoupon({dispatch},{couponData}){

    // }
  },
  mutations: {
    GETCOUPONS(state, coupons) {
      state.coupons = coupons;
    },
  },
};
