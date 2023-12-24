<!-- src/components/ListGroup.vue -->
<template>
    <ul class="list-group">
      <li v-for="(item, index) in items" :key="index" class="list-group-item" @click="selectItem(item)">
        {{ item }}
      </li>
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
    methods: {
      selectItem(item) {
        this.$emit('select-item', item);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  