<!--
 * @Date: 2020-06-24 09:16:44
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-07 20:44:26
-->
<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
        width="256px"
      >
        <div class="logo">
          <a-icon class="icon" type="poweroff" />
          <h1 v-if="!collapsed">Just Demo</h1>
        </div>
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header></Header>
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
.logo {
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  line-height: 32px;
  cursor: pointer;
  transition: padding 0.2s;
  justify-content: center;
}
.logo h1 {
  display: inline-block;
  height: 32px;
  margin: 0 0 0 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  vertical-align: middle;
  animation: fade-in;
  animation-duration: 1s;
  color: #fff;
}
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background-color: #eee;
}
.icon {
  font-size: 32px;
  color: #fff;
}
</style>
