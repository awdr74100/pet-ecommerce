<template>
  <div class="container-fluid px-0" :class="{ openSidebar: openSidebar }">
    <div class="header-layout bg-white shadow">
      <Header />
    </div>
    <div class="sidebar-layout bg-white shadow-right">
      <Sidebar />
    </div>
    <div class="row no-gutters">
      <div class="main-layout">
        <router-view></router-view>
      </div>
    </div>
    <!-- Overlay -->
    <div class="overlay" @click="sidebarToggle"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Header from '@/components/Layout/Header.vue';
import Sidebar from '@/components/Layout/Sidebar.vue';

export default {
  name: 'Layout',
  metaInfo: {
    titleTemplate: '%s - 毛孩百貨',
  },
  components: {
    Header,
    Sidebar,
  },
  methods: {
    sidebarToggle() {
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
  },
  computed: mapState(['openSidebar']),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/views/Layout/index.scss';
</style>
