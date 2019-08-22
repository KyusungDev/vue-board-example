import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'constantine-bux/dist/bux.css';
import 'vue-good-table/dist/vue-good-table.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

console.log(store);
