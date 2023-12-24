import Typography from '../components/Typography.vue';

export default {
  title: 'Typography',
  component: Typography,
};

export const Default = () => ({
  components: { Typography },
  data() {
    return {
      heading1Text: 'Custom Heading 1',
      heading2Text: 'Custom Heading 2',
      heading3Text: 'Custom Heading 3',
      paragraphText: 'Custom paragraph text.',
    };
  },
  template: '<Typography :heading1-text="heading1Text" :heading2-text="heading2Text" :heading3-text="heading3Text" :paragraph-text="paragraphText" />',
});
