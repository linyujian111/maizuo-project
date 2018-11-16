<template>
	<div class="login">
		<label for="">账号：
			<input type="text" class="username" placeholder="请输入手机号码" v-model="username" />
		</label>

		<br />
		<label for="">密码：
			<input type="password" class="psw" v-model="password" placeholder="请输入密码"/><br />
		</label>
		
		<div v-show="isshow1" class="isshow2">您输入的信息有误，请重新输入</div>
		<!--<div v-show="isshow2" class="isshow2">登录成功正在跳转..</div>-->
	
		<button v-if="isshow5" class="isshow5" @click="login">请点击登录</button>

		<!--<button @click="zhuce" v-show="isshow5" class="btnzhuce">点击注册</button>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				
				isshow1: false,
				isshow2: false,
		
				isshow5: true,
				//				zhuce:"点击注册"

			}
		},
		updated() {
			//			console.log(this.value)
			//			console.log(this.password)
		},

		methods: {
			login() {

				this.$axios.post('/api/login', {
					username: this.username,
					password: this.password
				}).then(res => {
					if(res.data=="yes"){
						
						this.$router.push({name:"home"})
					}else if(res.data=="no"){
//						alert("输入信息有误，请重新输入")
this.isshow1="true";
					}
				})
			}

		}

	

	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 300px;
	}
	
	.username {
		box-sizing: border-box;
		width: 270px;
		height: 35px;
		border-radius: 10px;
		margin: 10px;
	}
	
	.psw {
		box-sizing: border-box;
		width: 270px;
		height:35px;
		border-radius: 10px;
		margin: 10px;
	}
	
	button {
		width: 200px;
		height: 40px;
		border-radius: 10px;
		margin-left: 60px;
	}
	
	.isshow2 {
		color: red;
		text-indent: 2em;
		margin-bottom: 10px;
	}
	
	.btnzhuce {
		position: absolute;
		left: 36px;
		top: 210px;
	}
	
	.isshow5 {
		height: 50px;
		width: 200px;
		background-color: pink;
		position: absolute;
		left: 36px;
		top: 210px;
	}
</style>