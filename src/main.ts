import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
