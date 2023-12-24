<!-- src/components/Sliders.vue -->
<template>
    <div>
      <input type="range" :id="id" :min="min" :max="max" :value="sliderValue" @input="emitInput" />
      <span>{{ sliderValue }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
      sliderValue: Number,
    },
    methods: {
      emitInput(event) {
        this.$emit('input', parseInt(event.target.value, 10));
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  