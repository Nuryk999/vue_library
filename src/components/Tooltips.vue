<!-- src/components/Tooltips.vue -->
<template>
    <div class="tooltip-container" @mouseover="showTooltip" @mouseout="hideTooltip">
      <span class="tooltip-text" v-show="isTooltipVisible">{{ tooltipText }}</span>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isTooltipVisible: false,
      };
    },
    props: {
      tooltipText: String,
    },
    methods: {
      showTooltip() {
        this.isTooltipVisible = true;
      },
      hideTooltip() {
        this.isTooltipVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .tooltip-container {
    position: relative;
    display: inline-block;
  }
  
  .tooltip-text {
    visibility: hidden;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip-text:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  </style>
  