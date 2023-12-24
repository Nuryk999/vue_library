import ListGroup from '../components/ListGroup.vue';

export default {
  title: 'ListGroup',
  component: ListGroup,
};

export const Default = () => ({
  components: { ListGroup },
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    };
  },
  template: '<ListGroup :items="items" @select-item="selectItem" />',
  methods: {
    selectItem(item) {
      alert(`Selected item: ${item}`);
    },
  },
});
