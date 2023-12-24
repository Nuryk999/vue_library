import SearchBars from '../components/SearchBars.vue';

export default {
  title: 'SearchBars',
  component: SearchBars,
};

export const Default = () => ({
  components: { SearchBars },
  methods: {
    search(query) {
      alert(`Searching for: ${query}`);
    },
  },
  template: '<SearchBars @search="search" />',
});
