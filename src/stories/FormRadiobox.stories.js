import FormRadiobox from '../components/FormRadiobox.vue';

export default {
  title: 'FormRadiobox',
  component: FormRadiobox,
};

export const Default = () => ({
  components: { FormRadiobox },
  data() {
    return {
      options: [
        { id: 'radio1', label: 'Option 1', value: 'option1' },
        { id: 'radio2', label: 'Option 2', value: 'option2' },
        { id: 'radio3', label: 'Option 3', value: 'option3' },
      ],
      selectedValue: 'option1',
    };
  },
  template: '<FormRadiobox :options="options" v-model="selectedValue" />',
});
