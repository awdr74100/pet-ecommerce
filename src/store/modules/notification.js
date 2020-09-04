export default {
  strict: true,
  namespaced: true,
  state: {
    messages: [],
  },
  actions: {
    updateMessage({ commit, dispatch }, { message, status }) {
      const primaryKey = Date.now();
      commit('UPDATEMESSAGE', { message, status, primaryKey });
      dispatch('removeMessageWithTiming', primaryKey);
    },
    removeMessageWithTiming({ commit }, primaryKey) {
      setTimeout(() => {
        commit('REMOVEMESSAGEWITHTIMING', primaryKey);
      }, 3000);
    },
  },
  mutations: {
    UPDATEMESSAGE(state, { message, status, primaryKey }) {
      state.messages.push({ message, status, primaryKey });
    },
    REMOVEMESSAGEWITHTIMING(state, primaryKey) {
      const index = state.messages.findIndex((item) => item.primaryKey === primaryKey);
      state.messages.splice(index, 1);
    },
    REMOVEMESSAGE(state, index) {
      state.messages.splice(index, 1);
    },
  },
};
