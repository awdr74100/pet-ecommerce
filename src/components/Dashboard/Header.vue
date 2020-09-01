<template>
  <header class="header">
    <div class="header__toggle" @click="sidebarToggle">
      <Hamburger />
    </div>
    <div class="header__logo d-md-block d-none"></div>
    <div class="d-md-block d-none">
      <Breadcrumb />
    </div>
    <div class="ml-auto text-secondary">
      <span class="header__link mr-5"><font-awesome-icon :icon="['fas', 'user-cog']"/></span>
      <span class="header__link ml-2 mr-5"><font-awesome-icon :icon="['far', 'bell']"/></span>
    </div>
    <div class="header__line"></div>
    <a href="#" class="header__btn ml-3">
      <p>登出</p>
      <span class="ml-2"><font-awesome-icon :icon="['fas', 'sign-out-alt']"/></span>
    </a>
  </header>
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/header.scss';
</style>
