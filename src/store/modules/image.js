import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    file: '',
    base64: '',
    imgUrl: '',
  },
  actions: {
    async dataTransfer({ commit }, { file }) {
      const render = new FileReader();
      return new Promise((resolve) => {
        render.addEventListener('load', (e) => {
          commit('DATATRANSFER', e.target.result);
          commit('DATASAVE', file);
          resolve();
        });
        render.readAsDataURL(file);
      });
    },
    async uploadImage({ dispatch, commit }, { file }) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/admin/upload`;
      const formData = new FormData();
      formData.append('image', file);
      const root = { root: true };
      try {
        const { data } = await axios.post(url, formData);
        if (!data.success) {
          dispatch('notification/updateMessage', { message: data.message, status: 'danger' }, root);
          return;
        }
        commit('URLSAVE', data.imgUrl);
      } catch (error) {
        dispatch('notification/updateMessage', { message: error.message, status: 'danger' }, root);
      }
    },
  },
  mutations: {
    DATATRANSFER(state, base64) {
      state.base64 = base64;
    },
    DATASAVE(state, file) {
      state.file = file;
    },
    DATACLEAR(state) {
      state.file = '';
      state.base64 = '';
      state.imgUrl = '';
    },
    URLSAVE(state, imgUrl) {
      state.imgUrl = imgUrl;
    },
  },
};
