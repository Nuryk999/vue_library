<!-- src/components/ImageCarousel.vue -->
<template>
    <div class="image-carousel">
      <div class="carousel-container">
        <button @click="prevSlide" class="prev">&#10094;</button>
        <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <img :src="image" alt="Slide" />
          </div>
        </div>
        <button @click="nextSlide" class="next">&#10095;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
      };
    },
    props: {
      images: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  