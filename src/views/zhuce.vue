<template>
	<div class="login">
		<label for="user">&nbsp账号
			<input type="text" class="username" placeholder="请输入手机号码" v-model="username" id="user"/>
		</label>

		<br />
		<label for="psw">&nbsp密码
			<input type="password" class="psw" v-model="password" placeholder="请输入密码" id="psw"/><br />
		</label>
		<div v-show="isshow2" class="isshow2">您输入的手机号码有误，请重新输入</div>
		<div v-show="isshow1" class="isshow2">手机号码不能为空</div>
		<div v-show="isshow3" class="isshow2">恭喜你注册成功！！</div>
		<div v-show="isshow4" class="isshow2">该手机号码已存在，请重新输入</div>
		<div v-show="isshow5" class="isshow2">密码必须为6-8位数</div>
		<!--<button v-if="!isshow5" class="isshow5">现在点击直接登录</button>-->
		<button @click="zhuce" class="btnzhuce">请点击注册</button>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				isshow1: false,
				isshow2: false,
				isshow3: false,
				isshow4: false,
				isshow5: false

				//				zhuce:"点击注册"
			};
		},
		updated() {
			//			console.log(this.value)
			//			console.log(this.password)
		},

		methods: {
			zhuce() {
				var Reg = /^1[3-9]\d{9}$/;
				//				console.log(this.username)
				if(!this.username) {
					this.isshow1 = true;
					this.isshow2 = false;
				} else if(!Reg.test(this.username)) {
					this.isshow1 = false;
					this.isshow2 = true;
				} else {
					var regp = /^[a-zA-Z\d_]{6,10}$/;
					if(!this.password) {
						this.isshow1 = false;
						this.isshow2 = false;
						this.isshow3 = false;
						this.isshow4 = false;
						this.isshow5 = true;
						//					alert("密码不能为空")
					} else if(!regp.test(this.password)) {
						alert("密码至少要6-10位");
					} else {
						this.$axios
							.post("/api/zhuce", {
								username: this.username,
								password: this.password
							})
							.then(res => {
								console.log(res.data);
								if(res.data == "yes") {
									this.isshow1 = false;
									this.isshow2 = false;
									this.isshow4 = false;
									this.isshow5 = false;
									this.isshow3 = true;
									this.$router.push({
										name: "login"
									});
								} else if(res.data == "no") {
									this.isshow1 = false;
									this.isshow2 = false;
									this.isshow3 = false;
									this.isshow5 = false;
									this.isshow4 = true;
								}
							});
					}
				}
			}
		}
	};
</script>

<style scoped>
	.login {
		width: 100%;
		height: 3rem;
	}
	
	.username {
		box-sizing: border-box;
		width: 2.7rem;
		height: 0.35rem;
		border-radius: 0.1rem;
		margin: 0.1rem;
	}
	
	.psw {
		box-sizing: border-box;
		width: 2.7rem;
		height: 0.35rem;
		border-radius: 0.1rem;
		margin: 0.1rem;
	}
	
	button {
		width: 2rem;
		height: 0.4rem;
		border-radius: 0.1rem;
		margin-left: 0.6rem;
	}
	
	.isshow2 {
		color: red;
		text-indent: 0.02rem;
		margin-bottom: 0.1rem;
	}
	
	.btnzhuce {
		position: absolute;
		left: 0.36rem;
		top: 2.1rem;
		font-size: 0.16rem;
	}
	
	.isshow5 {
		height: 0.4rem;
		width: 2rem;
		/*background-color:pink;*/
		position: absolute;
		left: 0.36rem;
		top: 1.82rem;
	}
</style>