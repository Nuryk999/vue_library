<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button :class="type" :disabled="isDisabled" @click="emitClick">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: {
      type: String,
      default: 'default', 
    },
    isDisabled: Boolean,
  },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
};
</script>

<style>
</style>
