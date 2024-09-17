<script setup>
import { ref } from 'vue';
const message = ref('Hello Vue 3 in Docker!');


</script>
<template>
  <div class="hello">
    <button @click="message = 'Hello Vue 3 in Docker!'">Click me</button>
  </div>
</template>
