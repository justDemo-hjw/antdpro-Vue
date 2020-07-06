/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-06-01 00:08:54
 */ 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
