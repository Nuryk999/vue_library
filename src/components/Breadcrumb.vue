<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/components/BreadcrumbComponent.vue -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="index !== items.length - 1">{{ item }} > </span>
        <span v-else>{{ item }}</span>
      </li>
    </ul>
  </nav>
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
