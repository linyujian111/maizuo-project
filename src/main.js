import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
//import qs from "qs"
//Vue.prototype.$qs = qs
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
	//	axios,
	router,
	store,
	render: h => h(App)
}).$mount('#app')