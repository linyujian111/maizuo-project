<template>
	<div class="home">
		<!--轮播图-->
		<banner></banner>
		<div class="com_line rebo">
			<div class="com_text">正在热播电影</div>
		</div>
		<!--热播电影-->
		<ul class="film_now">
			<li class="film_item" v-for="film in nowplaying" @click="goto(film.id,film.name)">
				<div class="imgbox">
					<img :src="film.cover.origin" alt="" />
				</div>
				<div class="text">
					<div class="left">
						<div class="film_name" v-text="film.name"></div>
						<div class="film_numb">
							<span class="fnum" v-text="film.cinemaCount"></span>
							<span>家影院上映，现有</span>
							<span class="pnum" v-text="film.watchCount"></span>
							<span>人</span>
						</div>
					</div>
					<div class="right" v-text="film.grade">
					</div>
				</div>
			</li>
		</ul>

		<!--热播button-->
		<router-link to="/dianying/nowpfilm">
			<div class="hot_btn">更多热映电影</div>
		</router-link>

		<!--分割线-->
		<div class="com_line">
			<div class="com_text">即将上映电影</div>
		</div>

		<!--即将上映列表-->
		<ul class="film_com">
			<li class="com_item" v-for="comitem in complaying" @click="goto(comitem.id)">
				<div class="com_imgbox">
					<img class="com_img" :src="comitem.poster.origin" />
				</div>

				<div class="com_content">
					<div class="com_left" v-text="comitem.name"></div>
					<div class="com_right">{{comitem.a}}上映</div>
				</div>
			</li>
		</ul>
		<!--更多即将上映电影button-->
		<router-link to="/dianying/comingfilm">
			<div class="hot_btn">即将上映电影</div>
		</router-link>
	</div>
</template>

<script>
	import banner from "@/components/banner.vue"
	import axios from "axios"
	export default {
		components: {
			banner,
		},
		data() {
			return {
				nowplaying: [],
				complaying: [],

			}
		},
		mounted() {
			this.$axios.get("v4/api/film/now-playing?__t=1539781671428&page=1&count=5").then(res => {
				this.nowplaying = res.data.data.films;
				//				console.log(res.data.data.films)
			});
			this.$axios.get("v4/api/film/coming-soon?__t=1539912023988&page=1&count=3").then(res => {
				
				
				this.complaying = res.data.data.films.map(function(film) {
					var date = new Date(film.premiereAt);
					film.a = `${date.getMonth()+1}月${date.getDate()}日`;
					console.log(film)
					return film
				});
			}),
			window.sessionStorage.setItem("title","卖座电影")
		},
		methods:{
			goto(filmid,newtitle){
				this.$router.push({name:"film",params:{id:filmid}})
				this.$store.commit("title",newtitle)
			}
		}

	}
</script>

<style scoped>
	.rebo.com_line {
		margin-bottom: 0.1rem;
		margin-top: 0.1rem;
	}
	
	.film_now {
		height: 100%;
		width: 100%;
		padding-top: 0.15rem;
		background-color: #e1e1e1;
	}
	
	.film_item {
		height: 100%;
		background-color: yellow;
		/*box-sizing:border-box;*/
		margin: 0 0.17rem 0.17rem 0.17rem;
		/*max-width:340px;*/
		/*margin:0 auto;*/
	}
	
	ul {
		list-style: none;
	}
	
	.imgbox {
		/*height: 191px;*/
		width: 100%;
		background-color: blue;
		/*max-width: 340px;*/
	}
	
	.imgbox img {
		width: 100%;
		height: 100%;
		/*max-width:340px;*/
		vertical-align: middle;
	}
	
	.text {
		height: 0.5rem;
		width: 100%;
		background-color: ghostwhite;
		font-size: 0.12rem;
	}
	
	.left {
		float: left;
		padding: 0.05rem 0.15rem;
	}
	
	.left .film_name {
		margin-top: 0.05rem;
	}
	
	.left .film_numb {
		color: #9a9a9a;
		;
	}
	
	.right {
		float: right;
		width: 0.5rem;
		height: 100%;
		line-height: 0.5rem;
		text-align: center;
		font-size: 0.2rem;
		color: orangered
	}
	
	.hot_btn {
		width: 1.5rem;
		height: 0.3rem;
		border-radius: 0.1rem;
		/*background-color:pink;*/
		border: 0.01rem solid #aaa;
		line-height: 0.3rem;
		text-align: center;
		margin: 0.3rem auto;
	}
	
	.com_line {
		margin-top: 0.3rem;
		border-bottom: 3px solid #ccc;
		position: relative;
	}
	
	.com_text {
		width: 1rem;
		height: 0.3rem;
		line-height: 0.3rem;
		border-radius: 0.1rem;
		background-color: #ccc;
		border: 1px solid #ccc;
		margin: 0 auto;
		margin-bottom: -0.19rem;
		font-size: 0.14rem;
		font-weight: bolder;
		text-align: center;
		background-color: #a7a7a7;
	}
	/*<ul class="film_com">
			<li class="com_item">
				<img class="com_img"/>
				<div class="com_content">
					<div class="com_left"></div>
					<div class="com_top"></div>
				</div>
			</li>
		</ul>*/
	
	.film_com {
		margin-top: 0.4rem;
		background-color: #e1e1e1;
	}
	
	.com_item {
		/*width: 341px;*/
		/*width:100%;*/
		height: 241px;
		background-color: #e1e1e1;
		padding: 0 17px 17px 17px;
		cursor: pointer;
	}
	
	.com_imgbox {
		width:100%;
		height: 1.91rem;
		background-color: blue;
		overflow: hidden;
	}
	
	.com_item img {
		vertical-align: middle;
		width: 100%;
		height: 1.91rem;
		background-color: blue;
	}
	
	.com_item .com_content {
		width: 100%;;
		height: 0.5rem;
		background-color: ghostwhite;
		/*margin-right:20px;*/
	}
	
	.com_left {
		float: left;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.15rem;
		/*text-indent: 2em;*/
		margin-left:0.1rem;
	}
	
	.com_right {
		float: right;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.14rem;
		margin-right: 0.1rem;
		color: orangered;
	}
</style>