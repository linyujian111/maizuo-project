import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dianying from './views/DianYing.vue'
import comingfilm from '@/views/comingfilm'
import nowpfilm from '@/views/nowpfilm'
import film from '@/views/xiangqing'
import cinema from '@/views/cinema'
import zhuce from '@/views/zhuce'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: "/",
			redirect: {
				name: "home"
			}
		},
		{
			//			定义电影路由
			path: '/dianying',
			name: 'dianying',
			component: Dianying,

			//    定义子路由（正在热映，即将上映）
			children: [{
				//这里不需要用/
				path: "nowpfilm",

				name: "nowpfilm",
				component: nowpfilm
			}, {
				path: "comingfilm",
				name: "comingfilm",
				component: comingfilm
			}]
		},

		{
			path: "/film/:id",
			name: "film",
			component: film,
		},
		{
			path: "/film/:id/cinema",
			name: "cinema",
			component: cinema
		}, {
			path: "/zhuce",
			name: "zhuce",
			component: zhuce
		}, {
			path: "/login",
			name: "login",
			component: login
		}
	]
})