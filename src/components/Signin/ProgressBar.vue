<template>
  <div class="progress-bar" v-if="active">
    <div class="progress"></div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Signin/progress-bar.scss';
</style>
