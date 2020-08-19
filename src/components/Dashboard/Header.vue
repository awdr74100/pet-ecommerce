<template>
  <header class="header">
    <div class="logo"></div>
    <div class="header__menu" @click="sidebarToggle">
      <Hamburger />
    </div>
    <div class="header__breadcrumb mr-auto">
      <Breadcrumb />
    </div>
    <div class="header__account text-secondary pr-4">
      <span class="icon mr-2"><font-awesome-icon :icon="['fas', 'user-circle']"/></span>
      <p>root@gmail.com</p>
    </div>
    <a href="#" class="header__btn ml-md-2 ml-auto">
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
