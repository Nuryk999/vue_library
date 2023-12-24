import FormCheckbox from '../components/FormCheckbox.vue';

export default {
  title: 'FormCheckbox',
  component: FormCheckbox,
};

export const Default = () => ({
  components: { FormCheckbox },
  data() {
    return {
      isChecked: false,
    };
  },
  template: '<FormCheckbox id="checkbox1" label="Check me" v-model="isChecked" />',
});
