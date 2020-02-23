import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VUeAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VUeAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
