import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)
export default new vuex.Store({
  state: {
    id: 0
  },
  mutations: {
    increment (state,payload) {
      state.id = payload
    }
  }
})
