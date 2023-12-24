import Image from '../components/Image.vue';

export default {
  title: 'Image',
  component: Image,
};

export const Default = () => ({
  components: { Image },
  data() {
    return {
      source: 'https://via.placeholder.com/300',
      altText: 'Placeholder Image',
    };
  },
  template: '<Image :source="source" :alt-text="altText" />',
});
