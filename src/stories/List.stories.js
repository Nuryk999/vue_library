import List from '../components/List.vue';

export default {
  title: 'List',
  component: List,
};

export const Default = () => ({
  components: { List },
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
  },
  template: '<List :items="items" />',
});
