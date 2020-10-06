<template>
  <div id="app">
    <Notification />
    <Modal />
    <ScrollToTop />
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from '@/components/common/Notification.vue';
import Modal from '@/components/common/Modal.vue';
import ScrollToTop from '@/components/common/ScrollToTop.vue';

export default {
  components: {
    Notification,
    Modal,
    ScrollToTop,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/all.scss';
</style>
