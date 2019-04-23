import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    console.log('background.9f2c5bb5-----');
    return createElement(AppComponent);
  }
});
