import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSplide from '@splidejs/vue-splide';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'animate.css';
import './assets/css/reset.css';
// import router from './router';
import router from './router/admin.js';
import store from './store';

Vue.use(VueSplide);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
