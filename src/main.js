import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/bootstrap.min.css';
// import Vue from 'vue'
// Vue.config.devtools = true;
// require('@/assets/bootstrap.min.css');
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
