import Sliders from '../components/Sliders.vue';

export default {
  title: 'Sliders',
  component: Sliders,
};

export const Default = () => ({
  components: { Sliders },
  data() {
    return {
      sliderValue: 50,
    };
  },
  template: '<Sliders id="slider1" :sliderValue="sliderValue" @input="handleSliderInput" />',
  methods: {
    handleSliderInput(value) {
      this.sliderValue = value;
    },
  },
});
