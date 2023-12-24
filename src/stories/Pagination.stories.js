import Pagination from '../components/Pagination.vue';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const Default = () => ({
  components: { Pagination },
  data() {
    return {
      currentPage: 3,
      totalPages: 5,
    };
  },
  template: '<Pagination :current-page="currentPage" :total-pages="totalPages" @change-page="changePage" />',
  methods: {
    changePage(newPage) {
      alert(`Changing to page ${newPage}`);
    },
  },
});
