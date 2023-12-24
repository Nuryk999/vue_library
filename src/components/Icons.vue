<!-- src/components/Icons.vue -->
<template>
    <div class="icons">
      <i v-for="icon in icons" :key="icon" :class="icon"></i>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icons: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  