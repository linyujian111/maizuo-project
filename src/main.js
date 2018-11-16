import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

Vue.prototype.$axios = axios;

import MintUI from "mint-ui"
import rem from '@/lib/rem/rem.js'
rem()
Vue.use(MintUI)

Vue.config.productionTip = false




new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')