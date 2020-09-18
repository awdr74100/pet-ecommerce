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
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/signin`;
      const payload = { usernameOrEmail, password };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        localStorage.setItem('user', JSON.stringify(data.user));
        commit('ISSIGNIN', true);
        router.push({ path: '/' });
        dispatch('notification/updateMessage', { message: '登入成功', status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async signout({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/signout`;
      const root = { root: true };
      try {
        const { data } = await axios.post(url);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        localStorage.removeItem('user');
        commit('ISSIGNIN', false);
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async signup({ dispatch }, { username, password, email }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/signup`;
      const payload = { username, password, email };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async resetPassword({ dispatch }, { email }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/password`;
      const payload = { email };
      const root = { root: true };
      try {
        const { data } = await axios.post(url, payload);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        dispatch('notification/updateMessage', { message: data.message, status: 'success' }, root);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
    async check({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/user/check`;
      const root = { root: true };
      try {
        const { data } = await axios.post(url);
        if (!data.success) {
          localStorage.removeItem('user');
          commit('ISSIGNIN', false);
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
