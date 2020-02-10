<template>
  <div class="box-form">
    <div class="left">
      <div class="overlay">
        <h1>Hello World.</h1>
      </div>
    </div>

    <div class="right">
      <h5>Login</h5>
      <br />
      <div class="inputs">
        <input type="text" v-model="name" placeholder="name" />
	  <br>
        <input type="email" v-model="email" placeholder="email" />
        <br />
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <br />
      <br />

      <div class="remember-me--forget-password">
        <label>
          <input type="checkbox" name="item" checked />
          <span class="text-checkbox">Remember me</span>
        </label>
        <p>forget password?</p>
      </div>
      <br />
      <button @click="login"> Login</button>
      <button @click="register"> Register</button>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			email:"",
			name:"",
			password:""
		}
	},
	methods: {
		register(){
			axios.post("/api/register" , {
				name:this.name,
				email:this.email,
				password:this.password
			})
		},
		login(){
			axios.post("/api/login" , {
				email:this.email,
				password:this.password
			})
		}
	},
};
</script>