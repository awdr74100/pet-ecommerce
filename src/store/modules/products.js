import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    product: {},
    products: [],
  },
  actions: {
    async addProduct({ dispatch }, { productData }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/products`;
      const payload = { ...productData };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getProducts');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async getProducts({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/products`;
      const root = { root: true };
      try {
        const { data } = await axios.get(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('GETPRODUCTS', data.products);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async editProduct({ dispatch }, { productId, productData }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/products/${productId}`;
      const payload = { ...productData };
      const root = { root: true };
      try {
        const { data } = await axios.patch(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getProducts');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async deleteProduct({ dispatch }, { productId }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/products/${productId}`;
      const root = { root: true };
      try {
        const { data } = await axios.delete(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getProducts');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async changeProductStatus({ dispatch }, { productId, status }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/products/${productId}/is_enabled`;
      const payload = { status };
      const root = { root: true };
      try {
        const { data } = await axios.patch(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('getProducts');
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    GETPRODUCTS(state, products) {
      state.products = products;
    },
    GETPRODUCT(state, product) {
      state.product = product;
    },
  },
};
