import MessageBox from '../components/MessageBox.vue';

export default {
  title: 'MessageBox',
  component: MessageBox,
};

export const Info = () => ({
  components: { MessageBox },
  data() {
    return {
      messageType: 'info',
      messageTitle: 'Info Message',
    };
  },
  template: '<MessageBox :messageType="messageType" :messageTitle="messageTitle">This is an information message.</MessageBox>',
});

export const Success = () => ({
  components: { MessageBox },
  data() {
    return {
      messageType: 'success',
      messageTitle: 'Success Message',
    };
  },
  template: '<MessageBox :messageType="messageType" :messageTitle="messageTitle">This is a success message.</MessageBox>',
});

export const Warning = () => ({
  components: { MessageBox },
  data() {
    return {
      messageType: 'warning',
      messageTitle: 'Warning Message',
    };
  },
  template: '<MessageBox :messageType="messageType" :messageTitle="messageTitle">This is a warning message.</MessageBox>',
});

export const Error = () => ({
  components: { MessageBox },
  data() {
    return {
      messageType: 'error',
      messageTitle: 'Error Message',
    };
  },
  template: '<MessageBox :messageType="messageType" :messageTitle="messageTitle">This is an error message.</MessageBox>',
});
