import Alert from '../components/Alert.vue';

export default {
  title: 'Alert',
  component: Alert,
};

export const Info = () => ({
  components: { Alert },
  data() {
    return {
      alertType: 'info',
      alertMessage: 'This is an information alert.',
    };
  },
  template: '<Alert :alertType="alertType" :alertMessage="alertMessage" @close="closeAlert" />',
  methods: {
    closeAlert() {
      alert('Info alert closed!');
    },
  },
});

export const Success = () => ({
  components: { Alert },
  data() {
    return {
      alertType: 'success',
      alertMessage: 'This is a success alert.',
    };
  },
  template: '<Alert :alertType="alertType" :alertMessage="alertMessage" @close="closeAlert" />',
  methods: {
    closeAlert() {
      alert('Success alert closed!');
    },
  },
});

export const Warning = () => ({
  components: { Alert },
  data() {
    return {
      alertType: 'warning',
      alertMessage: 'This is a warning alert.',
    };
  },
  template: '<Alert :alertType="alertType" :alertMessage="alertMessage" @close="closeAlert" />',
  methods: {
    closeAlert() {
      alert('Warning alert closed!');
    },
  },
});

export const Error = () => ({
  components: { Alert },
  data() {
    return {
      alertType: 'error',
      alertMessage: 'This is an error alert.',
    };
  },
  template: '<Alert :alertType="alertType" :alertMessage="alertMessage" @close="closeAlert" />',
  methods: {
    closeAlert() {
      alert('Error alert closed!');
    },
  },
});
