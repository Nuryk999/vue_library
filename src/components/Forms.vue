<!-- src/components/Forms.vue -->
<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="input in inputs" :key="input.id">
        <label :for="input.id">{{ input.label }}</label>
        <input :type="input.type" :id="input.id" v-model="input.value" />
      </div>
      <Buttons :label="submitButtonLabel" type="primary" />
    </form>
  </template>
  
  <script>
  import Buttons from './Buttons.vue';
  
  export default {
    components: { Buttons },
    props: {
      inputs: {
        type: Array,
        default: () => [],
      },
      submitButtonLabel: String,
    },
    methods: {
      handleSubmit() {
        const formData = {};
        this.inputs.forEach((input) => {
          formData[input.id] = input.value;
        });
        alert(`Form submitted with data: ${JSON.stringify(formData)}`);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  