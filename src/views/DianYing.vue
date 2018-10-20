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

<style>
	.dianying {
		background-color: #f9f9f9;
		/*background-color:white;*/
	}
	
	.tab {
		width: 380px;
		height: 50px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.rb {
		width: 170px;
		height: 45px;
		background-color: yellow;
		margin-left: 15px;
		border-bottom: 1px solid #fe6e00;
		display: inline-block;
		text-align: center;
		line-height: 45px;
		background-color: #f9f9f9;
		box-sizing: border-box;
		float: left;
	}
	
	.jy {
		width: 170px;
		height: 45px;
		background-color: yellow;
		margin-right: 15px;
		border-bottom: 1px solid #fe6e00;
		display: inline-block;
		text-align: center;
		line-height: 45px;
		background-color: #f9f9f9;
		box-sizing: border-box;
		float: left;
	}
	
	.active {
		border-bottom: 3px solid #fe6e00;
	}
</style>