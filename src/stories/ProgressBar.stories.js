import ProgressBar from '../components/ProgressBar.vue';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

export const Default = () => ({
  components: { ProgressBar },
  data() {
    return {
      progress: 50,
    };
  },
  template: '<ProgressBar :progress="progress" />',
});
