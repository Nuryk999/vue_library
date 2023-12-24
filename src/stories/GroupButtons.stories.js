import GroupButtons from '../components/GroupButtons.vue';

export default {
  title: 'GroupButtons',
  component: GroupButtons,
};

export const Default = () => ({
  components: { GroupButtons },
  data() {
    return {
      buttons: [
        { id: 'button1', label: 'Button 1', type: 'default' },
        { id: 'button2', label: 'Button 2', type: 'primary' },
        { id: 'button3', label: 'Button 3', type: 'danger' },
      ],
    };
  },
  template: '<GroupButtons :buttons="buttons" @button-click="handleButtonClick" />',
  methods: {
    handleButtonClick(buttonId) {
      alert(`Button with ID ${buttonId} clicked!`);
    },
  },
});
