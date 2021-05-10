import Vue from 'vue'
import './assets/css/style.css'
import './assets/css/aos.css'
import './assets/css/animate.css'
import './assets/css/tiny-slider.css'

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from './assets/js/aos'
import './assets/js/main'

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  mounted(){
    AOS.init({
      ease: 'slide',
      once: true
    });
  },
  render: h => h(App)
}).$mount('#app')
