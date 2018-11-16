<template>
	<nav id="header">
		<div class="left">
			<i class="iconfont icon-liebiao" @click='toggleSideBar'></i>
			<span>{{title}}</span>
		</div>
		<div class="right">
			<span>大连</span>
			<i class="iconfont icon-mine"></i>
		</div>
	</nav>
</template>

<script>
	export default{
		deta(){
			return{
				
			}
		},
		computed:{
			title(){
				return this.$store.state.title
			}
		},
		props:["value"],
		methods:{
			toggleSideBar(){
				this.$emit("input",!this.value)
			}
		}
	}
</script>

<style scoped>
#header{
  	width:100%;
  	height:0.5rem;
  	background-color:black;
  	color:white;
  	font-size:0.16rem;
  	line-height:0.5rem;
  }
#header .icon-liebiao{
	margin:0 0.1rem;
}

#header .left{
	float:left;
	
}

#header .right{
	height:0.5rem;
	line-height:0.5rem;
	font-size:0.16rem;
	float:right;
	vertical-align: middle;
}

#header .icon-mine{
	margin:0 0.1rem;
}
</style>