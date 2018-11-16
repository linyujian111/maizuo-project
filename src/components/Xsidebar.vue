<template>
		<div id="sidebar" v-show="value" @click="hide">
			<ul>
				<router-link to="/" @click.native="goto()">
					<li>首页
						<i class="iconfont icon-enter"></i>
					</li>
				</router-link>

				<router-link to="/dianying/nowpfilm">
					<li>电影
						<i class="iconfont icon-enter"></i>
					</li>
				</router-link>
				<router-link to="/film/4436/cinema">
					<li>影院
						<i class="iconfont icon-enter"></i>
					</li>
				</router-link>
				<router-link to="/zhuce">
					<li>注册
						<i class="iconfont icon-enter"></i>
					</li>
				</router-link>
				<router-link to="/login">
					<li>登录
						<i class="iconfont icon-enter"></i>
					</li>
				</router-link>
			</ul>
		</div>
</template>

<script>
	export default {
		props: ["value"],
		deta() {
			return {
				isshow: false,
			}
		},
		methods: {
			hide() {
				this.$emit("input", false);

			},
			goto() {

				this.$store.commit("title", "卖座电影")
			}
		}
	}
</script>

<style scoped>
	#sidebar {
		height: 3rem;
		width: 1.7rem;
		background-color: black;
		box-sizing: border-box;
		padding: 0.1rem 0;
		position: absolute;
		left: 0;
		top: 0.5rem;
		z-index: 10;
	}
	
	#sidebar ul {}
	
	#sidebar ul li {
		box-sizing: border-box;
		height: 0.25rem;
		width: 100%;
		color: white;
		list-style: none;
		padding: 0 0.2rem;
		margin: 0.1rem 0;
	}
	
	#sidebar ul li i {
		height: 0.2rem;
		line-height: 0.2rem;
		float: right;
	}

</style>