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
		margin-bottom: 10px;
		margin-top: 10px;
	}
	
	.film_now {
		height: 100%;
		width: 100%;
		padding-top: 15px;
		background-color: #e1e1e1;
	}
	
	.film_item {
		height: 100%;
		background-color: yellow;
		/*box-sizing:border-box;*/
		margin: 0 17px 17px 17px;
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
		height: 50px;
		width: 100%;
		background-color: ghostwhite;
		font-size: 12px;
	}
	
	.left {
		float: left;
		padding: 5px 15px;
	}
	
	.left .film_name {
		margin-top: 5px;
	}
	
	.left .film_numb {
		color: #9a9a9a;
		;
	}
	
	.right {
		float: right;
		width: 50px;
		height: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		color: orangered
	}
	
	.hot_btn {
		width: 150px;
		height: 30px;
		border-radius: 10px;
		/*background-color:pink;*/
		border: 1px solid #aaa;
		line-height: 30px;
		text-align: center;
		margin: 10px auto;
	}
	
	.com_line {
		margin-top: 30px;
		border-bottom: 3px solid #ccc;
		position: relative;
	}
	
	.com_text {
		width: 100px;
		height: 30px;
		line-height: 30px;
		border-radius: 10px;
		background-color: #ccc;
		border: 1px solid #ccc;
		margin: 0 auto;
		margin-bottom: -19px;
		font-size: 14px;
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
		margin-top: 40px;
		background-color: #e1e1e1;
	}
	
	.com_item {
		width: 341px;
		height: 241px;
		background-color: #e1e1e1;
		padding: 0 17px 17px 17px;
		cursor: pointer;
	}
	
	.com_imgbox {
		width: 341px;
		height: 191px;
		background-color: blue;
		overflow: hidden;
	}
	
	.com_item img {
		vertical-align: middle;
		width: 100%;
		height: 191px;
		background-color: blue;
	}
	
	.com_item .com_content {
		width: 341px;
		height: 50px;
		background-color: ghostwhite;
	}
	
	.com_left {
		float: left;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		text-indent: 2em;
	}
	
	.com_right {
		float: right;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		margin-right: 10px;
		color: orangered;
	}
</style>