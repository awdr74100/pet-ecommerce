<template>
  <header class="header text-secondary">
    <ul class="list p-md-1 p-0">
      <li class="list__item px-3 bg-primary border-primary text-white" v-if="true">
        <span class="icon mr-1 icon-resize">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
        </span>
        <p class="d-md-inline d-none">awdr74100</p>
      </li>
      <li class="list__item px-3" v-if="false">
        <span class="icon mr-1 icon-resize">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
        </span>
        <div class="align-items-center d-md-flex d-none">
          <p>登入</p>
          <div class="header__line"></div>
          <p>註冊</p>
        </div>
      </li>
      <li class="list__item ml-md-1 px-3">
        <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></span>
        <p><span class="d-md-inline d-none">購物車</span> (0)</p>
      </li>
      <li class="list__item ml-md-1 px-3">
        <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
        <p class="d-md-inline d-none">訂單管理</p>
      </li>
      <li class="list__item search ml-md-1 pl-3 d-md-flex d-none">
        <span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
        <input class="header__input p-0 pl-3" type="text" />
      </li>
      <li class="list__item ml-md-1 px-3" @click="sidebarToggle">
        <Hamburger />
      </li>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex';

import Hamburger from '@/components/common/Hamburger.vue';

export default {
  components: {
    Hamburger,
  },
  methods: {
    sidebarToggle() {
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
  },
  computed: {
    account() {
      return JSON.parse(localStorage.getItem('user'));
    },
    ...mapState('user', ['isSignin']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/header.scss';
</style>
