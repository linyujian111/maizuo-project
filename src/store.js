import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		title:"卖座电影"
  },
  mutations: {
		title(state,newtitle){
			state.title=newtitle;
		}
  },
  actions: {

  }
})
