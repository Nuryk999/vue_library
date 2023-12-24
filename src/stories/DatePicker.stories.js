import DatePicker from '../components/DatePicker.vue';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const Default = () => ({
  components: { DatePicker },
  template: '<DatePicker @date-change="onDateChange" />',
  methods: {
    onDateChange(date) {
      alert(`Selected date: ${date}`);
    },
  },
});
