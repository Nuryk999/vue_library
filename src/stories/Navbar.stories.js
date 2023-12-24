import Navbar from '../components/Navbar.vue';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Default = () => ({
  components: { Navbar },
  data() {
    return {
      links: ['Home', 'About', 'Services', 'Contact'],
    };
  },
  template: '<Navbar :links="links" @select-link="selectLink" />',
  methods: {
    selectLink(link) {
      alert(`Selected link: ${link}`);
    },
  },
});
