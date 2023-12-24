import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => ({
  components: { Breadcrumb },
  data() {
    return {
      items: ['Home', 'Category', 'Subcategory', 'Current Page'],
    };
  },
  template: '<Breadcrumb :items="items" />',
});
