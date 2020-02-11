import VueRouter from 'vue-router'

const router = new VueRouter({
      mode: 'history',
      routes: [
            {
                  path:"/",
                  name:"index",
                  component:require('./components/Home.vue'),
                  meta:{
                        title:"home"
                  }
            },
            {
                  path:"/login",
                  name:"login",
                  component:require('./components/Login.vue'),
                  meta:{
                        title:"login"
                  }
            },
            {
                  path:"/register",
                  name:"register",
                  component:require('./components/Register.vue'),
                  meta:{
                        title:"register"
                  }
            }
      ],
  });
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  router.beforeEach((to, from, next) => {
      document.title = to.meta.title.capitalize();
      next();
  })

  export default router;