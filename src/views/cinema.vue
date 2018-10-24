<template>
	<ul class="city">
		<li class="list">
			<div class="cinema" @click="toshow">11111</div>
			<ul v-show="isshow">
				<div class="cinema_t">1</div>
				<div class="cinema_t">1</div>
				<div class="cinema_t">1</div>
				<div class="cinema_t">1</div>
				<div class="cinema_t">1</div>
			</ul>
		</li>

	</ul>
</template>

<script>
	export default {
		data() {
			return {

				
				isshow: false
			}
		},
		mounted() {

			this.$axios.get('/v4/api/film/4421/cinema?__t=1540189883371').then(res => {
				res.data.data.cinemas.map(item => {

					//					switch(item.district.name) {
					//						case "海珠区":
					//							this.num.haizhu.push(item);
					//							console.log(this.num.haizhu);
					//							break;
					//						case "天河区":
					//							this.num.tianhe.push(item);
					//							console.log(this.num.tianhe);
					//							break;
					//						case "越秀区":
					//							this.num.yuexiu.push(item);
					//							console.log(this.num.yuexiu);
					//							break;
					//						case "荔湾区":
					//							this.num.liwan.push(item);
					//							console.log(this.num.liwan);
					//							break;
					//						case "白云区":
					//							this.num.baiyun.push(item);
					//							console.log(this.num.baiyun);
					//							break;
					//						case "从化区":
					//							this.num.conghua.push(item);
					//							console.log(this.num.conghua);
					//							break;
					//						case "番禺区":
					//							this.num.panyu.push(item);
					//							console.log(this.num.panyu);
					//							break;
					//						case "增城区":
					//							this.num.zengcheng.push(item);
					//							console.log(this.num.zengcheng);
					//							break;
					//					}
					//					if(item.district.name=="海珠区") {
					//						this.num.haizhu.push(item)
					//						console.log(this.num.haizhu)
					//					}
				})
			})
		},

		methods: {
			toshow() {
				this.isshow = !this.isshow;
			}
		}
	}
</script>

<style scoped>
	ui {
		list-style: none;
	}
	.list{
		height:500px;
		width:500px;
	}
	.city_t {
		height: 40px;
		width: 100%;
		/*padding: 10px 12px;*/
		background-color: skyblue;
		margin: 5px;
		border-radius: 5px;
		line-height: 40px;
		text-indent: 2em;
		/*position:absolute;*/
	}
	
	.cinema {
		height: 50px;
		width: 100%;
		background-color: blue;
		/*margin-top: 100px;*/
		/*position:absolute;*/
	}
	
	.cinema_t {
		height: 50px;
		width: 100%;
		background-color: yellow;
		margin-top: 5px;
		border-radius: 5px;
	}
</style>

//				num: [{
				//						name: "海珠区",
				//						haizhu: []
				//					},
				//					{
				//						name: "增城区",
				//						zengcheng: []
				//					},
				//					{
				//						name: "天河区",
				//						tianhe: []
				//					},
				//					{
				//						name: "白云区",
				//						baiyun: []
				//					},
				//					{
				//						name: "越秀区",
				//						yuexiu: []
				//					},
				//					{
				//						name: "荔湾区",
				//						liwan: []
				//					},
				//					{
				//						name: "从化区",
				//						conghua: []
				//					},
				//					{
				//						name: "番禺区",
				//						panyu: []
				//					}
				//				]