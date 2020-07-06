<!--
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-05-31 22:00:16
--> 
<template>
  <div id="app">
    <a-button>按钮</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
