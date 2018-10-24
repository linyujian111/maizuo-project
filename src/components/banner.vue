<template>
	<mt-swipe :auto="4000" class="banner">
		<mt-swipe-item v-for="item in imgurl">
			<img :src="item.imageUrl" alt="" />
		</mt-swipe-item>
	</mt-swipe>
	
</template>

<script>
	import { Indicator } from 'mint-ui';
	import axios from "axios"
	export default {
		data() {
			return {
				imgurl: []
			}
		},
		mounted() {
			Indicator.open({
				text: '我在努力加载中...',
				spinnerType: 'fading-circle'
			}),
			this.$axios.get("v4/api/billboard/home?__t=1540389649096").then(res => {
			
				this.imgurl = res.data.data.billboards;
				Indicator.close();

			})
		}
	}
</script>

<style scoped>
	.banner {
		height:200px;
		/*width: 100%;*/
	}
	
	.banner img {
	
		width: 100%;
		height:100%;
	}
</style>