<template>
  <div>
    <p>Products</p>
    {{ mode }}
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$route.params.mode;
    },
  },
};
</script>
