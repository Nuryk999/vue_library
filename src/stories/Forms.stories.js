import Forms from '../components/Forms.vue';

export default {
  title: 'Forms',
  component: Forms,
};

export const Default = () => ({
  components: { Forms },
  data() {
    return {
      inputs: [
        { id: 'username', label: 'Username', type: 'text', value: '' },
        { id: 'password', label: 'Password', type: 'password', value: '' },
      ],
      submitButtonLabel: 'Submit',
    };
  },
  template: '<Forms :inputs="inputs" :submitButtonLabel="submitButtonLabel" />',
});
