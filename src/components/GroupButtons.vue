<!-- src/components/GroupButtons.vue -->
<template>
    <div>
      <div v-for="button in buttons" :key="button.id">
        <Buttons :label="button.label" :type="button.type" @click="handleButtonClick(button.id)" />
      </div>
    </div>
  </template>
  
  <script>
  import Buttons from './Buttons.vue';
  
  export default {
    components: { Buttons },
    props: {
      buttons: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      handleButtonClick(buttonId) {
        this.$emit('button-click', buttonId);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  