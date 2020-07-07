<!--
 * @Date: 2020-06-24 09:18:16
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-07 23:41:20
-->
<template>
  <div style="width: 256px">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from './SubMenu';
export default {
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  components: {
    'sub-menu': SubMenu
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    // 将路由映射为菜单，通过递归的方式
    getMenuData(route) {
      console.log(route);
      let result = [];
      route.map(item => {
        if (item.name && !item.hideInMenu) {
          const menuItem = { ...item };
          delete menuItem.children;
          if (item.children && !item.hideChildInMenu) {
            menuItem.children = this.getMenuData(item.children);
          }
          result.push(menuItem);
        } else if (!item.hideChildInMenu && !item.hideInMenu && item.children) {
          result.push(...this.getMenuData(item.children));
        }
      });
      console.log('re', result);
      return result;
    }
  }
};
</script>
