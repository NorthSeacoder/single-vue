


import Vue from 'vue';
import App from './app';
import BaseUI from 'base-ui';
Vue.use(BaseUI);

const app = new Vue(App);
app.$mount('#app');
