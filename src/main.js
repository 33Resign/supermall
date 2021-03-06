// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),
axios({
  url:'http://123.207.32.32:8000/home/data?type=pop&page1'
})
])
.then(results =>{
  console.log(results)
})