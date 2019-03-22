import Vue from 'vue'
import App from './App.vue'
import vueCalendar from 'vue-super-calendar'
Vue.config.productionTip = false
Vue.use(vueCalendar)
new Vue({
  render: h => h(App),
}).$mount('#app')
