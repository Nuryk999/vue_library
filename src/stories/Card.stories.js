import Card from '../components/Card.vue';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => ({
  components: { Card },
  template: `
    <Card>
      <template #header>
        Card Header
      </template>
      Card Content
    </Card>
  `,
});
