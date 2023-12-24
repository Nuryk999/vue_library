<!-- src/components/InputGroups.vue -->
<template>
    <div>
      <div v-for="inputGroup in inputGroups" :key="inputGroup.id">
        <label>{{ inputGroup.label }}</label>
        <div class="input-group">
          <input :type="inputGroup.type" v-model="inputGroup.value" />
          <Buttons :label="inputGroup.buttonLabel" type="primary" @click="handleButtonClick(inputGroup.id)" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Buttons from './Buttons.vue';
  
  export default {
    components: { Buttons },
    props: {
      inputGroups: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      handleButtonClick(inputGroupId) {
        alert(`Button in Input Group ${inputGroupId} clicked!`);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  