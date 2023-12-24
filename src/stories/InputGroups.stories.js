import InputGroups from '../components/InputGroups.vue';

export default {
  title: 'InputGroups',
  component: InputGroups,
};

export const Default = () => ({
  components: { InputGroups },
  data() {
    return {
      inputGroups: [
        { id: 'group1', label: 'Input Group 1', type: 'text', value: '', buttonLabel: 'Submit' },
        { id: 'group2', label: 'Input Group 2', type: 'password', value: '', buttonLabel: 'Submit' },
      ],
    };
  },
  template: '<InputGroups :inputGroups="inputGroups" />',
});
