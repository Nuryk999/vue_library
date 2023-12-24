<!-- src/components/Tags.vue -->
<template>
    <div class="tags">
      <span v-for="(tag, index) in tags" :key="index" class="tag" @click="selectTag(tag)">
        {{ tag }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tags: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      selectTag(tag) {
        this.$emit('select-tag', tag);
      },
    },
  };
  </script>
  
  <style scoped>

  .tags {
    margin-top: 20px;
  }
  
  .tag {
    cursor: pointer;
    display: inline-block;
    padding: 5px 10px;
    margin-right: 5px;
    background-color: #3498db;
    color: #fff;
    border-radius: 3px;
  }
  
  .tag:hover {
    background-color: #2980b9;
  }
  </style>
  