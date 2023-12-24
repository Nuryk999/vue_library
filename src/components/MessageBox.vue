<!-- src/components/MessageBox.vue -->
<template>
    <div class="message-box" :class="messageType">
      <div class="message-header">
        {{ messageTitle }}
      </div>
      <div class="message-body">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messageType: {
        type: String,
        default: 'info',
        validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
      },
      messageTitle: String,
    },
  };
  </script>
  
  <style scoped>
  </style>
  