import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import TagMenu from './modules/TagMenu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    TagMenu
  },
  getters
})

export default store
