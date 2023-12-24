import FormInput from '../components/FormInput.vue';

export default {
  title: 'FormInput',
  component: FormInput,
};

export const Default = () => ({
  components: { FormInput },
  template: '<FormInput id="input1" label="Username" type="text" />',
});
