<template>
  <div class="container-fluid px-0" :class="{ openSidebar: openSidebar }">
    <div class="header-layout bg-white">
      <Header />
    </div>
    <div class="row no-gutters">
      <div class="sidebar-layout bg-white">
        <Sidebar />
      </div>
      <div class="main-layout">
        <router-view></router-view>
      </div>
    </div>
    <!-- Drawer -->
    <div class="drawer" @click="sidebarToggle"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/Dashboard/Header.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';

export default {
  name: 'Dashboard',
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
@import '~@/assets/scss-scoped/views/Dashboard/index.scss';
</style>
