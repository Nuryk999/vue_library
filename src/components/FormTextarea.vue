<!-- src/components/FormTextarea.vue -->
<template>
    <div>
      <label :for="id">{{ label }}</label>
      <textarea :id="id" v-model="textareaValue" @input="emitInput"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      textareaValue: String,
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
  