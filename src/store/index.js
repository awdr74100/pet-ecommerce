import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openSidebar: !(window.innerWidth < 768),
  },
  mutations: {
    SIDEBARTOGGLE(state, status) {
      state.openSidebar = status;
    },
  },
  modules: {
    modal,
    notification,
  },
});
