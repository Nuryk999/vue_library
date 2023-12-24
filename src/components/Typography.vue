<!-- src/components/Typography.vue -->
<template>
    <div>
      <h1 class="heading1">{{ heading1Text }}</h1>
      <h2 class="heading2">{{ heading2Text }}</h2>
      <h3 class="heading3">{{ heading3Text }}</h3>
      <p class="paragraph">{{ paragraphText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading1Text: {
        type: String,
        default: 'Heading 1',
      },
      heading2Text: {
        type: String,
        default: 'Heading 2',
      },
      heading3Text: {
        type: String,
        default: 'Heading 3',
      },
      paragraphText: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    },
  };
  </script>
  
  <style scoped>
  
  .heading1 {
    margin-top: 20px;
    font-size: 2em;
    font-weight: bold;
  }
  
  .heading2 {
    margin-top: 15px;
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .heading3 {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .paragraph {
    margin-top: 15px;
    font-size: 1em;
  }
  </style>
  