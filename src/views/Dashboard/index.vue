<template>
  <div class="container-fluid px-0" :class="{ openSidebar: openSidebar }">
    <div class="header-layout">
      <Header />
    </div>
    <div class="row no-gutters">
      <div class="sidebar-layout">
        sidebar
      </div>
      <div class="main-layout">
        main
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Dashboard/Header.vue';

export default {
  components: {
    Header,
  },
  computed: mapState(['openSidebar']),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/views/Dashboard/index.scss';
</style>
