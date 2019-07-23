import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import { routes } from './routes';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter( {
  routes,
  mode: 'history'
} );

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
