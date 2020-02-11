<template>
  <div class="container pt-5">
    <div class="card">
      <div class="card-header h3">Login</div>
      <div class="card-body">
        <form action role="form">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-user"></span>
              </span>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-lock"></span>
              </span>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
          </div>

          <div class="form-group text-center">
            <button type="submit" class="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios.post("/api/register", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    },
    login() {
      axios.post("/api/login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss">
.card {
  width: 40%;
  margin-right: auto;
  margin-left: auto;
  background-color: rgba($color: white, $alpha: 0.5);
}

.form-control {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  box-shadow: none !important;
  &:focus {
    background-color: transparent;
    box-shadow: none !important;
    // border: none;
    transition: all 0.5s linear;
    border-image-source:linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%);
    border-width: 1pt;
    border-image-slice: 1;
    // border-bottom: 1px solid linear-gradient(135deg, #fab2ff 10%, #1904e5 100%);
  }
}
</style>