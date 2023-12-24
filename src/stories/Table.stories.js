import Table from '../components/Table.vue';

export default {
  title: 'Table',
  component: Table,
};

export const Default = () => ({
  components: { Table },
  data() {
    return {
      headers: ['Name', 'Age', 'Country'],
      rows: [
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada'],
        ['Bob Johnson', 40, 'UK'],
      ],
    };
  },
  template: '<Table :headers="headers" :rows="rows" />',
});
