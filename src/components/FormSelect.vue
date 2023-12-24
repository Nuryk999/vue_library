<!-- eslint-disable vue/no-mutating-props -->
<!-- src/components/FormSelect.vue -->
<template>
    <div>
      <label :for="id">{{ label }}</label>
      <select :id="id" v-model="selectedValue" @change="emitChange">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      options: {
        type: Array,
        default: () => [],
      },
      selectedValue: String,
    },
    methods: {
      emitChange(event) {
        this.$emit('change', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  