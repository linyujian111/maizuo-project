<template>
	<div id="xiangqing">
		<div class="imgbox">
			<img :src="detail.poster.origin" alt="" />
		</div>
		<div class="title">影片介绍</div>
		<div class="detail">
			<p>导&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演：<span>{{detail.director}}</span></p>
			<p>主&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演：
				<span v-for="fl in detail.actors">{{fl.name}}&nbsp|&nbsp</span>
			</p>
			<p>地区语言：<span>{{detail.nation}}({{detail.language}})</span></p>
			<p>类&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp型：<span v-text="detail.category"></span></p>
			<p>上映日期：<span v-text="detail.premiereAt"></span>上映</p>
			<p>内容介绍：<span v-text="detail.synopsis"></span></p>
		</div>
		<div class="car1" @click="goto">加入购物车</div>
		<div class="buy" v-if="detail.isNowPlaying" @click="goto">立即购票</div>
		<ul class="car">
			<li>
				<div class="car_imgbox">
					<img src="" alt="" />
				</div>
				<div class="car_text">
					<p>购</p>
					<p class="car_numb">{{num-1}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
//	import 'mint-ui/lib/style.css'
	export default {
		data() {
			return {
				da: "",
//				 商品信息
				detail: "",
//				选购的商品数量
				num:"1",
				list: [],
//				car_numb:""
			}
		},
		methods: {
			goto() {
//				把商品信息存入storage
				this.detail.qty = this.num
				localStorage.setItem("list", JSON.stringify(this.detail))
				this.num++

								 	this.$router.push({name:"car"})
					}
			},
			mounted() {
				//			拿到路由传过来的ID
				this.da = this.$route.params.id;

				//			发送请求传到指定ID的详情页接口
				this.$axios.get(`/v4/api/film/${this.$route.params.id}?__t=${(new Date()).getTime()}`).then(res => {
					this.detail = res.data.data.film;
					var newdate = new Date(this.detail.premiereAt)
					this.detail.premiereAt = `${newdate.getMonth()+1}月${newdate.getDate()}日`
					//				console.log(this.detail)
					this.detail.synopsis = this.detail.synopsis.trim()

					this.$store.commit("title", res.data.data.film.name)
				})

			}
		}
</script>

<style scoped>
	ul{
		list-style:none;
	}
	.title {
		margin-top: 0.2rem;
		border-left: 0.3rem solid orangered
	}
	
	.detail p {
		margin: 0.15rem;
		font-size: 0.14rem;
	}
	
	.imgbox {
		width: 3.75rem;
		height: 2.1rem;
		overflow: hidden;
		margin: 0 auto;
	}
	
	.imgbox img {
		width: 3.75rem;
		height: 2.1rem;
		vertical-align: middle;
	}
	
	.buy {
		margin: 0 auto;
		width: 50%;
		height: 0.3rem;
		background-color:yellow;
		border-radius: 0.2rem;
		text-align: center;
		line-height: 0.3rem;
			position:fixed;
	right:0px;
	bottom:0px;
	text-align:center;

	}
.car_text{
	width:0.5rem;
	height:0.5rem;
	background-color:pink;
	border-radius:50%;
	position:fixed;
	right:0;
	top:100px;
	text-align:center;
}
.car1{
margin: 0 auto;
		width: 50%;
		height: 0.3rem;
		background-color: orangered;
		border-radius: 0.2rem;
		text-align: center;
		line-height: 0.3rem;
			position:fixed;
	left:0px;
	bottom:0px;
	text-align:center;
		
}
</style>