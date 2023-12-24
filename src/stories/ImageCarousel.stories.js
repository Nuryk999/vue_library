import ImageCarousel from '../components/ImageCarousel.vue';

export default {
  title: 'ImageCarousel',
  component: ImageCarousel,
};

export const Default = () => ({
  components: { ImageCarousel },
  data() {
    return {
      images: [
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400',
      ],
    };
  },
  template: '<ImageCarousel :images="images" />',
});
