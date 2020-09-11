<template>
  <header class="header">
    <div class="header__toggle" @click="sidebarToggle">
      <Hamburger />
    </div>
    <div class="header__logo d-md-block d-none"></div>
    <div class="d-md-block d-none">
      <Breadcrumb />
    </div>
    <div class="ml-auto d-flex align-items-center text-secondary">
      <span class="header__avatar mr-2"><font-awesome-icon :icon="['fas', 'user-circle']"/></span>
      <span class="header__name mr-5">{{ account.username }}</span>
    </div>
    <div class="header__line"></div>
    <a href="#" class="header__btn ml-3" @click.prevent="signout">
      <p>登出</p>
      <span class="ml-2"><font-awesome-icon :icon="['fas', 'sign-out-alt']"/></span>
    </a>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

import Hamburger from '@/components/common/Hamburger.vue';
import Breadcrumb from '@/components/Dashboard/Breadcrumb.vue';

export default {
  components: {
    Hamburger,
    Breadcrumb,
  },
  methods: {
    sidebarToggle() {
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
    ...mapActions('admin', ['signout']),
  },
  computed: {
    account() {
      return JSON.parse(localStorage.getItem('admin'));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/header.scss';
</style>
