/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-05 23:42:17
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Layout, Icon, Drawer, Radio } from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
