<template>
  <p class="container">Hello, {{ name }}!</p>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: {
      type: String,
      required: !0,
      default: '',
    },
  },
};
</script>

<style scoped>
.container {
  color: green;
}
</style>
