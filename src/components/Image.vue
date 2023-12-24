<!-- src/components/Image.vue -->
<template>
    <img :src="source" :alt="altText" class="custom-image" />
  </template>
  
  <script>
  export default {
    props: {
      source: {
        type: String,
        default: '',
      },
      altText: {
        type: String,
        default: 'Image',
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  