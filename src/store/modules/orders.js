import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    orders: {},
  },
  actions: {
    async createOrder({ dispatch }, { user, message }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/orders`;
      const payload = { user, message };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getOrders', { role: 'guest' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async cancelOrder({ dispatch }, { orderId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/orders/${orderId}/cancel`;
      const root = { root: true };
      try {
        const { data } = await axios.patch(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getOrders', { role: 'guest' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async completeOrder({ dispatch }, { orderId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/orders/${orderId}/complete`;
      const root = { root: true };
      try {
        const { data } = await axios.patch(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getOrders', { role: 'guest' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async getOrders({ dispatch, commit }, { role }) {
      let url = `${process.env.VUE_APP_BASE_URL}/api/user/orders`;
      if (role === 'admin') {
        url = `${process.env.VUE_APP_BASE_URL}/api/admin/orders`;
      }
      const root = { root: true };
      commit('SKELETONACTIVE', 'orders', root);
      try {
        const { data } = await axios.get(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('GETORDERS', data.orders);
        commit('SKELETONACTIVE', '', root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    GETORDERS(state, ordersData) {
      state.orders = ordersData;
    },
  },
};
