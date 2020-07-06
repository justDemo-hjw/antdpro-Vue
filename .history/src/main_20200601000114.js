/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-06-01 00:01:14
 */ 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "ant-design-vue";
import 'ant-design-vue/lib/button/style';

Vue.config.productionTip = false;

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
