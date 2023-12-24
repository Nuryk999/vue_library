<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
      <ul>
        <li v-for="(link, index) in links" :key="index" @click="selectLink(link)">
          {{ link }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      links: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      selectLink(link) {
        this.$emit('select-link', link);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  