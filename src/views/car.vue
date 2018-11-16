<template>
	<div id="car">
		<div class="header">
			<h3 class="title">购物车</h3>
		</div>
		<div class="list0" v-if="this.goods.length==0">您的购物车空空如也</div>
		<div class="body">
			<table>
				<thead>
					<tr>
						<th><input type="checkbox" @click="checkAll" :checked="selectall.length>=goods.length && goods.length!==0" /></th>
						<th>商品名称</th>
						<th>商品单价</th>
						<th>购买数量</th>
						<th>小计</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in goods">
						<td><input type="checkbox" @click="jisuan(item.id)" v-model="selectall" :value="item.id" /></td>
						<td>{{item.name}}</td>
						<td>{{item.price}}元</td>
						<td class="ab">
							<button @click="reduce(index)">-</button>
							<input type="text" v-model="item.num" class="numin" />
							<button @click="plus(index)">+</button>
						</td>
						<td>{{item.price*item.num}}元</td>
						<td>
							<button @click="remove(index)">删除</button>

						</td>

					</tr>
				</tbody>
				<tfoot>

				</tfoot>

			</table>
			<tr class="priceallnum">共计<span>{{total}}</span>元</tr>
			<button @click="removeall" class="priceall">全部删除</button>
			<button type="button" class="mui-btn mui-btn-royal jiesuan">前往结算</button>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				total: 0,
				goods: [{
						id: 1,
						name: "卧虎藏龙",
						num: 1,
						price: 122
					},
					{
						id: 2,
						name: "天下太平",
						num: 1,
						price: 122
					},
					{
						id: 3,
						name: "变形金刚",
						num: 1,
						price: 122
					}
				],
				//				空空如也
				isshow: false,
				//				控制全选
				//			选中商品数据
				selectall: []
			}
		},
		mounted() {
			//			刚进入页面全部选中
			this.count()
		},

		methods: {
			//	刚进入页面就把所有商品选中————————————————————————————————————————————————————————————————————————
			count() {
				this.goods.forEach(item => {
					this.selectall.push(item.id);
				})
				this.jisuan();
			},

			//	计算选中商品的总价功能的实现——————————————————————————————————————————————————————————————————————
			jisuan(id) {
				//				
				if(id) {
					//					判断这个id是否已经存在，已经存在
					if(this.selectall.indexOf(id) >= 0) {
						//						获取选中商品在的索引值
						var idx = this.selectall.indexOf(id)
						//						删除该索引值所在的商品
						this.selectall.splice(idx, 1)
					} else {
						this.selectall.push(id);
					}
				} else {
					//					如果没有选中
					this.selectall = this.selectall
				}

				//              初始总价为0
				this.total = 0;

				//				遍历已选商品ID
				this.selectall.forEach(idx => {

					//              遍历全部商品
					this.goods.forEach(item => {

						//				根据ID找到选中的商品信息
						if(item.id == idx) {

							//				计算总价
							this.total += item.num * item.price
						}

					})

				})
			},

			//修改商品数量的按钮功能实现——————————————————————————————————————————————————————————————————————————

			//			按钮加法
			plus(index) {
				this.goods[index].num += 1
				//				更新总价
				this.jisuan()
			},

			//			按钮减法
			reduce(index) {
				this.goods[index].num -= 1
				if(this.goods[index].num == 0) {
					if(confirm("您确定要删除该商品吗？")) {
						this.goods.splice(index, 1)
					} else {
						this.goods[index].num = 1
						return
					}
					//			更新总价
					this.jisuan()
				}
},
				//全选和反选的功能实现——————————————————————————————————————————————————————————————————————————
				checkAll() {

						//全选功能
						//				如果勾上全选
						if(event.target.checked) {
							//					遍历一遍所有商品
							this.goods.forEach((item, index) => {
								//						把所有商品都存入已选数组中
								this.selectall.push(item.id)

								//						避免反复勾选，已选数组的去重
								this.selectall = Array.from(new Set(this.selectall))
							})

							//反选功能
						} else {
							this.selectall = [];
						}
						//更新总价
						this.jisuan()

					},

					//全部商品和单个商品删除功能的实现——————————————————————————————————————————————————————————————————————————
					removeall() {
						//所有商品清空
						this.goods = []
						//更新总价
						this.jisuan()
					},
					//单个商品删除
					remove(index) {
						this.goods.splice(index, 1)
						this.jisuan()
					},

			}
		}
</script>

<style scoped>
	table {
		text-align: center;
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
		width: 100%;
		margin: 0 auto;
		font-size: 12px;
	}
	
	.numin {
		width: 35px;
		text-align: center;
		padding: 0;
		margin: 0;
	}
	
	.list0 {
		color: red;
		font-size: 20px;
		border: 1px solid #ccc;
		text-align: center;
		height: 50px;
		line-height: 50px;
		background-color: deepskyblue;
	}
	
	.priceall {
		width: 50%;
		background-color: hotpink;
	}
	
	.jiesuan {
		width: 50%;
	}
	
	.ab {
		padding-top: 15px;
	}
	
	.ab .numin {
		height: 33px;
	}
	
	td {
		padding: 5px;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	
	th {
		padding: 0 5px;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	
	.title {
		width: 100%;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #17b0db;
		/*margin-top:0;*/
	}
	
	tr {
		height: 40px;
		width: 100%;
	}
	
	.priceallnum {
		padding-top: 20px;
	}
</style>