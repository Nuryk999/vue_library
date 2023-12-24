<!-- src/components/Pagination.vue -->
<template>
    <nav class="pagination">
      <ul>
        <li v-if="currentPage > 1" @click="changePage(currentPage - 1)">Previous</li>
        <li v-for="page in pages" :key="page" @click="changePage(page)" :class="{ active: page === currentPage }">{{ page }}</li>
        <li v-if="currentPage < totalPages" @click="changePage(currentPage + 1)">Next</li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      totalPages: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      pages() {
        return Array.from({ length: this.totalPages }, (_, index) => index + 1);
      },
    },
    methods: {
      changePage(newPage) {
        if (newPage >= 1 && newPage <= this.totalPages) {
          this.$emit('change-page', newPage);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  