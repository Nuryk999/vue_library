<!-- src/components/ModalWindow.vue -->
<template>
    <div v-show="isModalVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-header">
          {{ modalTitle }}
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalVisible: false,
      };
    },
    props: {
      modalTitle: String,
    },
    methods: {
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  