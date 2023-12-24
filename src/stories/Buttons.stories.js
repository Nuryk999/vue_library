import Buttons from '../components/Buttons.vue';

export default {
  title: 'Buttons',
  component: Buttons,
};

export const Default = () => ({
  components: { Buttons },
  data() {
    return {
      label: 'Default Button',
    };
  },
  template: '<Buttons :label="label" />',
});

export const Primary = () => ({
  components: { Buttons },
  data() {
    return {
      label: 'Primary Button',
      type: 'primary',
    };
  },
  template: '<Buttons :label="label" :type="type" />',
});

export const Disabled = () => ({
  components: { Buttons },
  data() {
    return {
      label: 'Disabled Button',
      isDisabled: true,
    };
  },
  template: '<Buttons :label="label" :isDisabled="isDisabled" />',
});
