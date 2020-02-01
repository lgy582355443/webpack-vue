import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0
  },
  mutations: {
    ADD_NUM(state){
      state.num++
    }
  },
  actions: {
    addNum(context){
      return context.commit('ADD_NUM')
    }
  },
  getters: {
    num(state){
      return state.num
    }
  },
  modules: {

  }
})