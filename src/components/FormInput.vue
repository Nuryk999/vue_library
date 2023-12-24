<!-- eslint-disable vue/no-mutating-props -->
<!-- src/components/FormInput.vue -->
<template>
    <div>
      <label :for="id">{{ label }}</label>
      <input :type="type" :id="id" v-model="value" @input="emitInput" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      type: {
        type: String,
        default: 'text',
      },
      value: String,
    },
    methods: {
      emitInput(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  