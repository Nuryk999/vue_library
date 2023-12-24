<!-- src/components/DatePicker.vue -->
<template>
    <div class="date-picker">
      <label for="datepicker">Select a date:</label>
      <input type="date" id="datepicker" v-model="selectedDate" @change="onDateChange" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: '',
      };
    },
    methods: {
      onDateChange() {
        this.$emit('date-change', this.selectedDate);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  