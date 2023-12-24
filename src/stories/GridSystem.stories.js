import GridSystem from '../components/GridSystem.vue';

export default {
  title: 'GridSystem',
  component: GridSystem,
};

export const Default = () => ({
  components: { GridSystem },
  template: '<GridSystem />',
});
