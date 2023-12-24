import Tooltips from '../components/Tooltips.vue';

export default {
  title: 'Tooltips',
  component: Tooltips,
};

export const Default = () => ({
  components: { Tooltips },
  data() {
    return {
      tooltipText: 'Hover me!',
    };
  },
  template: '<Tooltips :tooltipText="tooltipText">Hover me!</Tooltips>',
});
