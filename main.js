


import Vue from 'vue';
import App from './app';
import BaseUI from 'base-ui';
import 'base-ui/dist/base-ui.css';
Vue.use(BaseUI);

const app = new Vue(App);
app.$mount('#app');
