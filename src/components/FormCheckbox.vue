<!-- src/components/FormCheckbox.vue -->
<template>
    <div>
      <label :for="id">
        <input type="checkbox" :id="id" v-model="isChecked" @change="emitChange" />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      isChecked: Boolean,
    },
    methods: {
      emitChange() {
        this.$emit('change', this.isChecked);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  