import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/store.js'
import VueCookies from 'vue-cookies'
import common from './assets/js/common';
import request from './assets/js/request';
Vue.use(common);
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.$axios = request

router.beforeEach((to,from,next) => {
  debugger;
  let isCookie = Vue.prototype.isCookie()
  if(to.path === '/login' && !isCookie){
    next();
    return;
  }else if(to.path === '/login' && isCookie){
    next({
      path: '/loginhome'
    })
  }
  if(isCookie){
    next()
  }else{
    console.log(isCookie)
    next({
      path: '/login'
    })
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
