<!-- src/components/ProgressBar.vue -->
<template>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        default: 0,
        validator: (value) => value >= 0 && value <= 100,
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  