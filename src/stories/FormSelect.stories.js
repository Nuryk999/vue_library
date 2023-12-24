import FormSelect from '../components/FormSelect.vue';

export default {
  title: 'FormSelect',
  component: FormSelect,
};

export const Default = () => ({
  components: { FormSelect },
  data() {
    return {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      selectedValue: 'option1',
    };
  },
  template: '<FormSelect id="select1" label="Select an option" :options="options" v-model="selectedValue" />',
});
