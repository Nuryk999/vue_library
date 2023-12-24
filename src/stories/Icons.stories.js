import Icons from '../components/Icons.vue';

export default {
  title: 'Icons',
  component: Icons,
};

export const Default = () => ({
  components: { Icons },
  data() {
    return {
      icons: ['fas fa-heart', 'fas fa-star', 'fas fa-check', 'fas fa-times'],
    };
  },
  template: '<Icons :icons="icons" />',
});
