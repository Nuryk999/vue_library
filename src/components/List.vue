<!-- src/components/List.vue -->
<template>
    <ul class="custom-list">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  