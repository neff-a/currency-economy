import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: {
      title: '',
      isVisible: false
    }
  },
  mutations: {

    showLoader(state, payload) {
      state.loader.title = payload.title;
      state.loader.isVisible = true;
    },

    hideLoader(state) {
      state.loader.isVisible = false;
    }

  },
  actions: {

  }
})
