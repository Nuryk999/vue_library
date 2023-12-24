import Tags from '../components/Tags.vue';

export default {
  title: 'Tags',
  component: Tags,
};

export const Default = () => ({
  components: { Tags },
  data() {
    return {
      tags: ['Technology', 'Design', 'Development', 'UI/UX', 'Testing'],
    };
  },
  template: '<Tags :tags="tags" @select-tag="selectTag" />',
  methods: {
    selectTag(tag) {
      alert(`Selected tag: ${tag}`);
    },
  },
});
