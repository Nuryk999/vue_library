import FormTextarea from '../components/FormTextarea.vue';

export default {
  title: 'FormTextarea',
  component: FormTextarea,
};

export const Default = () => ({
  components: { FormTextarea },
  data() {
    return {
      textareaValue: 'Default text in the textarea',
    };
  },
  template: '<FormTextarea id="textarea1" label="Enter text" v-model="textareaValue" />',
});
