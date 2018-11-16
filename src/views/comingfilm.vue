<template>
	<div id="nowpfilm">

		<ul class="film" v-infinite-scroll="loadMore" infinite-scroll-disabled="stop" infinite-scroll-distance="100">
			<li class="filmitem" v-for="film in list" @click="gotoxq(film.id,film.name)">
				<div class="nowp_l">
					<img :src="film.poster.origin" alt="" />
				</div>
				<div class="nowp_c">
					<p class="ftop"><span class="fname" v-text="film.name"></span> <span class="fenshuall"><i class="iconfont icon-enter jiantou"></i></span>
					</p>
					<!--<p class="ftext" v-text="film.intro"></p>-->
					<p class="numall"><span class="numc" v-text="film.a"></span>家影院上映<span class="nump" v-text="film.b"></span></p>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	import axios from "axios";
	import Vue from 'vue';
	import { InfiniteScroll } from 'mint-ui';

	Vue.use(InfiniteScroll);
	export default {
		data() {
			return {
				list: [],
				current: 1,
				stop: false,
				total: 0,

			}
		},
		methods: {
			//			滚动到底部执行下面的函数
			loadMore() {
				console.log(11111111)
				if(this.total && this.page > this.total) {
					this.stop = true;
					return;
				}
				this.$axios.get(`/v4/api/film/coming-soon?page=${this.current}&count=7`).then(res => {

					this.current++;
					this.list = [...this.list, ...res.data.data.films];
					//					this.list.push(res.data.data.films)
					this.total = res.data.data.page.total;

					this.list.map(film => {

						var date = new Date(film.premiereAt);
						film.a = `${date.getMonth()+1}月${date.getDate()}日`;

						var xingqi = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", ]
						film.b = xingqi[date.getDay()];

						return film
					});
					//
				})
			},
			gotoxq(filmid, newtitle) {

				this.$router.push({
					name: "film",
					params: {
						id: filmid
					}
				})
				window.sessionStorage.setItem("title", newtitle)
				this.$store.commit("title", newtitle)
			}

		},
	}
</script>

<style scoped>
	ul {
		list-style: none;
	}
	
	#nowpfilm {
		height: 100%;
		width: 100%;
		padding: 0 0.15rem;
	}
	
	.filmitem {
		width: 100%;
		height: 0.9rem;
		padding: 0.2rem 0;
		border-bottom: 1px dashed #ccc;
		position: relative;
	}
	
	.nowp_l {
		width: 0.6rem;
		height: 0.82rem;
		float: left;
	}
	
	.nowp_l img {
		width: 0.6rem;
		height: 0.82rem;
	}
	
	.nowp_c {
		height: 0.82rem;
		padding-left: 0.15rem;
		float: left;
	}
	
	.fname {
		font-size: 0.16rem;
		line-height: 0.3rem;
		height: 0.3rem;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.ftext {
		font-size: 0.14rem;
		line-height: 0.3rem;
		color: #8e8e8e;
		;
		height: 0.3rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.numall {
		font-size: 0.14rem;
		line-height: 0.2rem;
		color: #8e8e8e;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 0.3rem;
		color: orangered
	}
	
	.numall .nump {
		margin-left: 0.2rem;
	}
	
	.ftop {}
	
	.fenshuall {
		position: absolute;
		right: 0.3rem;
		top: 0.2rem;
	}
	
	.fenshu {
		color: #fc7103;
	}
</style>