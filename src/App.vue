<template>
  <div id="app">
    <Notification />
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from '@/components/common/Notification.vue';

export default {
  components: {
    Notification,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/all.scss';
</style>
