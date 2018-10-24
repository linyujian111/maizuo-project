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
		
		<div class="buy" v-if="detail.isNowPlaying" @click="goto">立即购票</div>
		
	</div>
</template>

<script>

	export default {
		data(){
			return{
				da:"",
				detail:""
			}
		},
		methods:{
		 goto(){
		 	this.$router.push({name:"cinema"})
		 }
		},
		mounted(){
//			拿到路由传过来的ID
			this.da=this.$route.params.id;
			
//			发送请求传到指定ID的详情页接口
			this.$axios.get(`/v4/api/film/${this.$route.params.id}?__t=${(new Date()).getTime()}`).then(res=>{
				this.detail=res.data.data.film;
				var newdate = new Date(this.detail.premiereAt)
				this.detail.premiereAt=`${newdate.getMonth()+1}月${newdate.getDate()}日`
//				console.log(this.detail)
				this.detail.synopsis=this.detail.synopsis.trim()
				
				this.$store.commit("title",res.data.data.film.name)
			})
			
			
		}
	}
</script>

<style scoped>
	.title{
		margin-top:20px;
		border-left:30px solid orangered
	}
	.detail p{
		margin:15px;
		font-size:14px;
	}
	
	.imgbox{
		width:375px;
		height:210px;
		overflow: hidden;
	}
	.imgbox img{
		width:375px;
		height:210px;
		vertical-align:middle;
	}
	.buy{
		margin:0 auto;
		width:200px;
		height:30px;
		background-color:orangered;
		border-radius:20px;
		text-align:center;
		line-height:30px;
	}
</style>