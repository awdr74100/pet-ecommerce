<template>
  <div class="container mt-3">
    <p>123</p>
    <p>{{ path }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      const path = this.$route.mata;
      console.log('re');
      return path;
    },
  },
  created() {
    console.log('created');
  },
};
</script>
