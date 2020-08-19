import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openSidebar: true,
  },
  mutations: {
    SIDEBARTOGGLE(state, status) {
      state.openSidebar = status;
    },
  },
  modules: {},
});
