import Charts from '../components/Charts.vue';

export default {
  title: 'Charts',
  component: Charts,
};

export const Default = () => ({
  components: { Charts },
  template: '<Charts />',
});
