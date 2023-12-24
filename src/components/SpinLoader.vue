<!-- src/components/SpinLoader.vue -->
<template>
    <div class="spin-loader">
      <div class="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      size: {
        type: String,
        default: 'medium', // Options: small, medium, large
      },
    },
  };
  </script>
  
  <style scoped>
  .spin-loader {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  
  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  