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
    <!-- Modal -->
    <Modal />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Header from '@/components/Dashboard/Header.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';
import Modal from '@/components/Dashboard/Modal.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
    Modal,
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
