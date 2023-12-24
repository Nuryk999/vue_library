import FormSwitch from '../components/FormSwitch.vue';

export default {
  title: 'FormSwitch',
  component: FormSwitch,
};

export const Default = () => ({
  components: { FormSwitch },
  data() {
    return {
      isChecked: false,
    };
  },
  template: '<FormSwitch id="switch1" v-model="isChecked" />',
});
