<template>
  <div id="app">
    <Notification />
    <Modal />
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from '@/components/common/Notification.vue';
import Modal from '@/components/common/Modal.vue';

export default {
  components: {
    Notification,
    Modal,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/all.scss';
</style>
