<!-- src/components/SearchBars.vue -->
<template>
    <div class="search-bars">
      <input type="text" v-model="searchInput" placeholder="Search..." />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchInput: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchInput);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  