// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div :class="['alert', alertType]">
      <span class="close" @click="closeAlert">&times;</span>
      {{ alertMessage }}
    </div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: {
    alertType: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
    },
    alertMessage: String,
  },
  methods: {
    closeAlert() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
</style>
