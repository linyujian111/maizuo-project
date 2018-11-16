<template>
	<div class="dianying">
		<div class="tab">
			<router-link to="/dianying/nowpfilm" tag="li" class="rb" activeClass="active">
				正在热播
			</router-link>
			<router-link to="/dianying/comingfilm" tag="li" class="jy" activeClass="active">
				即将上映
			</router-link>

		</div>

		<router-view></router-view>

	</div>
</template>
<script>
	//	export default {
	//		data() {
	//			return {
	//		
	//				showrb: false,
	//				showjy: false
	//			}
	//		},
	//		methods: {
	//			jy() {
	//				this.showrb = false;
	//				this.showjy = true;
	//			},
	//			rb() {
	//				this.showrb = true;
	//				this.showjy = false;
	//			}
	//		},
	//	
	//	}
</script>

<style scoped>
	.dianying {
		background-color: #f9f9f9;
		/*background-color:white;*/
	}
	
	.tab {
		width: 3.8rem;
		height: 0.5rem;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.rb {
		width: 1.7rem;
		height: 0.45rem;
		background-color: yellow;
		margin-left: 0.15rem;
		border-bottom: 0.01rem solid #fe6e00;
		display: inline-block;
		text-align: center;
		line-height: 0.45rem;
		background-color: #f9f9f9;
		box-sizing: border-box;
		float: left;
	}
	
	.jy {
		width: 1.7rem;
		height: 0.45rem;
		background-color: yellow;
		margin-right: 0.15rem;
		border-bottom: 0.01rem solid #fe6e00;
		display: inline-block;
		text-align: center;
		line-height: 0.45rem;
		background-color: #f9f9f9;
		box-sizing: border-box;
		float: left;
	}
	
	.active {
		border-bottom: 0.03rem solid #fe6e00;
	}
</style>