<!--
 * @Date: 2020-07-04 20:34:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-05 23:59:53
-->
<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'" />
        </div>
      </template>
      <h2>整体风格定制</h2>
      <a-radio-group
        :value="$route.query.navTheme || 'dark'"
        @change="e => handleSettingChange('navTheme', e.target.value)"
      >
        <a-radio value="dark">黑色</a-radio>
        <a-radio value="light">白色</a-radio>
      </a-radio-group>
      <h2>导航模式</h2>
      <a-radio-group
        :value="$route.query.navLayout || 'left'"
        @change="e => handleSettingChange('navLayout', e.target.value)"
      >
        <a-radio value="left">左侧</a-radio>
        <a-radio value="top">顶部</a-radio>
      </a-radio-group>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>
<style lang="less" scoped>
.handle {
  height: 48px;
  width: 48px;
  position: absolute;
  top: 240px;
  right: 300px;
  background-color: #1890ff;
  color: #fff;
  border-radius: 3px 0 0 3px;
  font-size: 20px;
  line-height: 48px;
  text-align: center;
}
</style>
