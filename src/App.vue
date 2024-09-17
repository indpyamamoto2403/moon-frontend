<script setup>
import CommonLayout from './Layouts/CommonLayout.vue';
</script>
<template>
  <common-layout>
    <div class="tab-container">
      <router-link to="/Home">HomePage</router-link>
      <router-link to="/About">AboutPage</router-link>
    </div>
    <router-view></router-view>
  </common-layout>
</template>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;    
  background-color: #2c3e50;
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
}

.tab-container {
  display: flex;
  gap: 30px;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin: 120px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
