import Vue from 'vue'
import App from './App.vue'

import VueEcharts from './lib/index'
Vue.use( VueEcharts );

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
