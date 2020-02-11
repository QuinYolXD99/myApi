require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router'
import App from './App.vue';
import router from './router';

Vue.use(VueRouter)


Vue.component("login" , require("./components/Login.vue"));

new Vue({
    render: h => h(App),
    router,
}).$mount("#app");
