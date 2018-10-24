<template>
  <div id="app">
		<xheader v-model='isshow'></xheader>
		
		<xsidebar v-model='isshow' :z-index=1></xsidebar>
		<router-view></router-view>
  </div>
</template>

<script>
	import xheader from "@/components/Xheader.vue";
	import xsidebar from "@/components/Xsidebar.vue";

	export default {
		data(){
			return{
				isshow:false,
			}
		},
		components:{
			xheader,
			xsidebar
		}
	}
</script>
<style src="@/assets/icon/iconfont.css"></style>
<style>
*{
	margin:0;
	padding:0;
}
html,body{
	width:100%;
	height:100%;
	background-color:#e1e1e1;
}


</style>
