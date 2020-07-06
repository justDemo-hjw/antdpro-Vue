/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-06-01 00:08:44
 */ 
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }] // `style: true` 会加载 less 文件
  ]
};
