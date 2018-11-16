<template>
	<ul class="city">
		<li class="list" v-for="(item,index) in cinema">
			<div class="cinema" @click="toshow(index)">{{item.name}}</div>
			<ul class="listbox" v-if="item.isshow"  @click="gotozhuce">
				<li class="cinema_t" v-for="(a,index) in item.cinemalist" @click="changeshow1(index)">
					<div>
						<span>{{a.name}}</span>
					<span class="price">￥{{a.minimumPrice}}</span>
					</div>
					<div class="sm">{{a.address}}</div>
					<div class="sm">距离未知 | </div>
					<ul class="content" v-show="true">
						<li class="listsm">
						<span class="sx">今天</span>
						<span class="sx">明天</span>
						<span class="sx">后天</span>
						<div class="paiqi">今日无排期</div>
			
						</li>
					</ul>
				</li>
			</ul>
		</li>

	</ul>
</template>

<script>
	export default {
		data() {
			return {
				
				cinema: [{
						name: "海珠区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
//						content:[]
					},
					{
						name: "天河区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "越秀区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "番禺区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "从化区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "白云区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "荔湾区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					},
					{
						name: "黄埔区",
						cinemalist: [],
						isshow: false,
						isshow1:false,
					}
				],
				isshow: false
			}
		},
		mounted() {
			this.da = this.$route.params.id;
				var timer = new Date().getTime()
			this.$axios.get(`/v4/api/film/${this.$route.params.id}/cinema?__t=${timer}`).then(res => {				
				res.data.data.cinemas.map(item => {
					switch(item.district.name) {
						case "海珠区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "天河区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "越秀区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "黄埔区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "白云区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "荔湾区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
						case "从化区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									console.log(list.cinemalist)
								}
							})
							break;
						case "增城区":
							this.cinema.map(list => {
								if(item.district.name == list.name) {
									list.cinemalist.push(item)
									//console.log(list.cinemalist)
								}
							})
							break;
					}
				})
			})
		},

		methods: {
			toshow(index) {
				//				var xx = document.querySelectorAll(".listbox")[0]
				//				console.log(index)
				this.cinema[index].isshow = !this.cinema[index].isshow;
			},
			changeshow1(index){
//				console.log(!this.cinema[index].isshow1)
				console.log(!this.cinema)
			},
			gotozhuce(){
				this.$router.push("/zhuce")
			}
		}
	}
</script>

<style scoped>
	ul {
		list-style: none;
	}
	
	.list {
		height: 100%;
		/*width: 500px;*/
		margin-bottom: 0.1rem;
	}
	
	.city_t {
		height: 0.4rem;
		width: 100%;
		/*padding: 10px 12px;*/
		background-color: skyblue;
		margin: 0.05rem;
		border-radius: 0.05rem;
		line-height: 0.4rem;
		text-indent: 2em;
		/*position:absolute;*/
	}
	
	.cinema {
		height: 0.4rem;
		width: 100%;
		/*background-color: deepskyblue;*/
		line-height: 0.4rem;
		text-indent: 0.1rem;
	}
	
	.cinema_t {
		height: 100%;
		/*width: 100%;*/
		background-color: white;
		/*margin-top: 5px;*/
		border-radius: 0.05rem;
		padding-top: 0.03rem;
		border:1px solid #ccc;
		box-sizing:border-box;
		padding:0.1rem;
		margin:0.1rem;
		
	}
	
	.cinema_t div {
		margin-top: 0.1rem;
		font-size: 0.16rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/*width: 350px;*/
		margin-left: .1rem;
		box-sizing:border-box;
	}
	
	.cinema_t div.sm {
		font-size: 0.12rem;
		color: #ccc;
	}
	
	.listbox {
		height: 100%;
		width: 100%;
	}
	
	.sm {
		width: 100%;
	}
	.content{
		width:100%;
		/*height:200px;*/
		/*background-color:pink;*/
		margin-top:0.2rem;
	}
	.listsm{
	
	}
	.sx{
		display:inline-block;
	margin:0.05rem;;
		width:30%;
		height:0.4rem;
		line-height:0.4rem;
		text-align:center;
		background-color:skyblue;
		border-radius:0.1rem;
	}
	.paiqi{
		height:0.4rem;
		border-bottom:1px dashed #ccc;
	}
	.price{
		font-size:0.2rem;
		color:orangered;
		float:right;
		margin-right:0.5rem;
		box-sizing:border-box;
	}
</style>