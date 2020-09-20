import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  actions: {
    async payment({ dispatch }, { orderId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/pay/${orderId}`;
      const root = { root: true };
      try {
        const { data } = await axios.post(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
};
