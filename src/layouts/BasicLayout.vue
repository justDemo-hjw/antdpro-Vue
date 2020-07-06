<!--
 * @Date: 2020-06-24 09:16:44
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-06 00:09:10
-->
<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
      >
        <div class="logo">
          Ant Design For Vue
        </div>
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header> </Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <SettingDrawer />
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Footer from './Footer';
import Header from './Header';
import SiderMenu from './SiderMenu';
import SettingDrawer from '../components/SettingDrawer/index';
export default {
  components: {
    Footer,
    Header,
    SiderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || 'dark';
    },
    navLayout() {
      return this.$route.query.navLayout || 'left';
    }
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang="less" scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background-color: #eee;
}
</style>
