<script setup>
import CommonLayout from './Layouts/CommonLayout.vue';
</script>
<template>
  <common-layout>
    <router-view></router-view>
  </common-layout>
</template>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;    
  background-color: #156082;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  margin:0;
  padding:0;
  height:100%;
  background-color: #156082;
}
</style>
