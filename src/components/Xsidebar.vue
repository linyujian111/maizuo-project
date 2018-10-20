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
				this.$emit("input",false);

			},
			goto(){
				
				this.$store.commit("title","卖座电影")
			}
		}
	}
</script>

<style scoped>
	#sidebar {
		height: 300px;
		width: 170px;
		background-color: black;
		box-sizing: border-box;
		padding: 10px 0;
		position:absolute;
		left:0;
		top:50px;
		z-index:10;
	}
	
	#sidebar ul {}
	
	#sidebar ul li {
		box-sizing: border-box;
		height: 25px;
		width: 100%;
		color: white;
		list-style: none;
		padding: 0 20px;
		margin: 10px 0;
	}
	
	#sidebar ul li i {
		height: 20px;
		line-height: 20px;
		float: right;
	}
</style>