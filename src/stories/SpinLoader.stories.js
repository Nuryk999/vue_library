import SpinLoader from '../components/SpinLoader.vue';

export default {
  title: 'SpinLoader',
  component: SpinLoader,
};

export const Small = () => ({
  components: { SpinLoader },
  template: '<SpinLoader size="small" />',
});

export const Medium = () => ({
  components: { SpinLoader },
  template: '<SpinLoader size="medium" />',
});

export const Large = () => ({
  components: { SpinLoader },
  template: '<SpinLoader size="large" />',
});
