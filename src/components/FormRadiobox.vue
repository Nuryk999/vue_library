<!-- src/components/FormRadiobox.vue -->
<template>
    <div>
      <label v-for="option in options" :key="option.value">
        <input type="radio" :id="option.id" :value="option.value" v-model="selectedValue" @change="emitChange" />
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        default: () => [],
      },
      selectedValue: String,
    },
    methods: {
      emitChange() {
        this.$emit('change', this.selectedValue);
      },
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  