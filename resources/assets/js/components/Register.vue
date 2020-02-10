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
        <input type="text" placeholder="user name" />
        <br />
        <input type="email" placeholder="user name" />
        <br />
        <input type="password" placeholder="password" />
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
      <button @click="register">register</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>