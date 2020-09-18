import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    coupons: [],
  },
  actions: {
    async addCoupon({ dispatch }, { couponData }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/coupons`;
      const payload = { ...couponData };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCoupons');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async getCoupons({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/coupons`;
      const root = { root: true };
      commit('SKELETONACTIVE', 'coupons', root);
      try {
        const { data } = await axios.get(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('GETCOUPONS', data.coupons);
        commit('SKELETONACTIVE', '', root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async editCoupon({ dispatch }, { couponId, couponData }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/coupons/${couponId}`;
      const payload = { ...couponData };
      const root = { root: true };
      try {
        const { data } = await axios.patch(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCoupons');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async deleteCoupon({ dispatch }, { couponId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/coupons/${couponId}`;
      const root = { root: true };
      try {
        const { data } = await axios.delete(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCoupons');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async changeCouponStatus({ dispatch }, { couponId, status }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/coupons/${couponId}/is_enabled`;
      const payload = { status };
      const root = { root: true };
      try {
        const { data } = await axios.patch(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCoupons');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async applyCoupon({ dispatch }, { code }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/coupon`;
      const payload = { code };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('cart/getCart', undefined, root);
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    GETCOUPONS(state, coupons) {
      state.coupons = coupons;
    },
  },
};
