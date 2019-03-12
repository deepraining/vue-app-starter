<template>
  <p class="container">Welcome, {{ name }}!</p>
</template>

<script>
export default {
  name: 'Welcome',
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
  color: orange;
}
</style>
