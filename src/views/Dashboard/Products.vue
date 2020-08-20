<template>
  <div>
    <p>{{ $route.name }}</p>
    <p>{{ $route.params.tab }}</p>
    <p>{{ alert }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(123);
  },
  computed: {
    alert() {
      return this.$route.params.tab;
    },
  },
};
</script>
