import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    order: {},
    orders: [],
    orderId: '',
  },
  actions: {
    async createOrder({ dispatch, commit }, orderData) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/orders`;
      const payload = {
        user: orderData.user,
        message: orderData.message,
        shipping_method: orderData.shipping_method,
        payment_method: orderData.payment_method,
      };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('GETORDERID', data.orderId);
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
        dispatch('getOrders', { role: 'user' });
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
        dispatch('getOrders', { role: 'user' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async shipOrder({ dispatch }, { uid, orderId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/orders/${uid}/${orderId}/ship`;
      const root = { root: true };
      try {
        const { data } = await axios.patch(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getOrders', { role: 'admin' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async getOrders({ dispatch, commit }, { role }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/${role}/orders`;
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
    async getOrder({ dispatch, commit }, { orderId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/orders/${orderId}`;
      const root = { root: true };
      try {
        const { data } = await axios.get(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('GETORDER', data.order);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    GETORDER(state, order) {
      state.order = order;
    },
    GETORDERS(state, orders) {
      state.orders = orders;
    },
    GETORDERID(state, orderId) {
      state.orderId = orderId;
    },
    CLEARORDER(state) {
      state.order = {};
      state.orderId = '';
    },
  },
};
