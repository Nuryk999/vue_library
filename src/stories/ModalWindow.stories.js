import ModalWindow from '../components/ModalWindow.vue';

export default {
  title: 'ModalWindow',
  component: ModalWindow,
};

export const Default = () => ({
  components: { ModalWindow },
  data() {
    return {
      modalTitle: 'Modal Title',
    };
  },
  template: `
    <div>
      <button @click="openModal">Open Modal</button>
      <ModalWindow :modalTitle="modalTitle">
        Modal Content
      </ModalWindow>
    </div>
  `,
  methods: {
    openModal() {
      this.$refs.modalWindow.openModal();
    },
  },
});
