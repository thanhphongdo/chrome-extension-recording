import Vue from 'vue';
import AppComponent from './App/App.vue';

declare let chrome: any;
Vue.component('app-component', AppComponent);

new Vue({
  el: '#app',
  render: createElement => createElement(AppComponent),
});

chrome.tabs.create({ url: chrome.extension.getURL('background.html') });
