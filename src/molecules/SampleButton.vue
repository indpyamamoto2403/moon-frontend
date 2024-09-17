<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  message: String
});

const show_alert = () => {
  alert('Hello Vue 3 in Docker!');
};
</script>
<template>
  <button class="sample-btn" @click="show_alert">{{ props.message }}</button>
</template>
<style scoped>
.sample-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.sample-btn:hover {
    background-color: #45a049;
}
</style>