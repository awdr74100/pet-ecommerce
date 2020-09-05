import router from '@/router';
import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    isSignin: false,
  },
  actions: {
    async signin({ dispatch, commit }, { usernameOrEmail, password }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/signin`;
      const payload = { usernameOrEmail, password };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        localStorage.setItem('admin', JSON.stringify(data.admin));
        commit('ISSIGNIN', true);
        router.push({ path: '/admin/products/all' });
        dispatch('notification/updateMessage', { message: '登入成功', status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async signout({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/signout`;
      const root = { root: true };
      try {
        const { data } = await axios.post(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        localStorage.removeItem('admin');
        commit('ISSIGNIN', false);
        router.push({ path: '/' });
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async check({ dispatch, commit }, { from }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/check`;
      const root = { root: true };
      try {
        const { data } = await axios.post(url);
        if (!data.success) {
          localStorage.removeItem('admin');
          commit('ISSIGNIN', false);
          const message = from.meta.role === 'admin' ? '請重新登入' : '僅限管理員進入';
          dispatch('notification/updateMessage', { message, status: 'danger' }, root);
          return;
        }
        commit('ISSIGNIN', true);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    ISSIGNIN(state, status) {
      state.isSignin = status;
    },
  },
};
