<template>
	<div class="login">
		<label for="">账号：
			<input type="text" class="username" placeholder="请输入手机号码" v-model="username" />
		</label>

		<br />
		<label for="">密码：
			<input type="password" class="psw" v-model="password" placeholder="请输入密码"/><br />
		</label>
		<div v-show="isshow2" class="isshow2">您输入的手机号码有误，请重新输入</div>
		<div v-show="isshow1" class="isshow2">手机号码不能为空</div>
		<div v-show="isshow3" class="isshow2">恭喜你注册成功！！</div>

		<button @click="zhuce">注册</button>

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
				isshow3: false

			}
		},
		updated() {
			//			console.log(this.value)
			//			console.log(this.password)
		},

		methods: {
			zhuce() {


				var Reg = /^1[3-9]\d{9}$/;
				console.log(this.username)
				if(!this.username) {
					this.isshow1 =true
					this.isshow2 = false
				} else if(!Reg.test(this.username)) {
					this.isshow1 = false
					this.isshow2 = true
			
				} else {
					var regp = /^[a-zA-Z\d_]{6,10}$/
					if(!this.password){
						
					alert("密码不能为空")
				}else if(!regp.test(this.password)){
					alert("密码至少要6-10位")
					
				}else{
					this.$axios.post('/api/zhuce', {
						username: this.username,
						password: this.password
					}).then(res => {
						console.log(res)
							this.isshow1 = false
							this.isshow2 = false
						this.isshow3=true;
//						this.$router.push(name:"login")
					})
				}
					

				}

				
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
		width: 300px;
		height: 30px;
		border-radius: 10px;
		margin: 10px;
	}
	
	.psw {
		box-sizing: border-box;
		width: 300px;
		height: 30px;
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
	}
</style>