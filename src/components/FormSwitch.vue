<!-- src/components/FormSwitch.vue -->
<template>
    <div>
      <label :for="id">
        <input type="checkbox" :id="id" v-model="isChecked" @change="emitChange" />
        <span class="switch"></span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      isChecked: Boolean,
    },
    methods: {
      emitChange() {
        this.$emit('change', this.isChecked);
      },
    },
  };
  </script>
  
  <style>

  </style>
  