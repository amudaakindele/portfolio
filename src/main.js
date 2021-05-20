import Vue from 'vue'
import './assets/css/style.css'
import './assets/css/tiny-slider.css'
import "aos/dist/aos.css"

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from "aos"

import './components/Mailer'

app.AOS = new AOS.init({
  ease: 'slide',
  once: true
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
