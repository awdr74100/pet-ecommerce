import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    cart: [],
    total: 0,
    final_total: 0,
  },
  actions: {
    async addToCart({ dispatch }, { productId, qty }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/cart`;
      const payload = { productId, qty };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return false;
        }
        dispatch('getCart');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
        return true;
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
        return false;
      }
    },
    async getCart({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/cart`;
      const root = { root: true };
      commit('SKELETONACTIVE', 'cart', root);
      try {
        const { data } = await axios.get(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        // 產品遭下架或移除
        if (data.message) {
          const { message } = data;
          dispatch('notification/updateMessage', { message, status: 'warning' }, root);
        }
        commit('SKELETONACTIVE', '', root);
        commit('GETCART', { cart: data.cart, total: data.total, finalTotal: data.final_total });
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async updateCartItemQty({ dispatch }, { cartProductId, qty }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/cart/${cartProductId}`;
      const payload = { qty };
      const root = { root: true };
      try {
        const { data } = await axios.patch(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCart');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async removeFromCart({ dispatch }, { cartProductId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/cart/${cartProductId}`;
      const root = { root: true };
      try {
        const { data } = await axios.delete(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCart');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async clearCart({ dispatch }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/cart`;
      const root = { root: true };
      try {
        const { data } = await axios.delete(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getCart');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    GETCART(state, { cart, total, finalTotal }) {
      state.cart = cart;
      state.total = total;
      state.final_total = finalTotal;
    },
    CLEARCART(state) {
      state.cart = [];
      state.total = 0;
      state.final_total = 0;
    },
  },
};
