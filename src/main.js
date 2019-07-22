import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter( { routes } );

new Vue({
  el: '#app',
  render: h => h(App)
})
