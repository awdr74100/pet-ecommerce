<template>
  <header class="header">
    <ul class="list p-md-1 p-0">
      <!-- 登入/註冊 -->
      <li class="list__item ml-md-1">
        <a href="#" class="list__link px-3">
          <span class="icon icon-resize mr-1">
            <font-awesome-icon :icon="['fas', 'user-circle']" />
          </span>
          <div class="align-items-center d-md-flex d-none">
            <p>登入</p>
            <span class="line"></span>
            <p>註冊</p>
          </div>
        </a>
      </li>
      <!-- 購物車 -->
      <li class="list__item ml-md-1">
        <router-link to="/cart" class="list__link px-3">
          <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></span>
          <p><span class="d-md-inline d-none">購物車</span> (5)</p>
        </router-link>
        <!-- popover -->
        <Popover />
      </li>
      <!-- 訂單管理 -->
      <li class="list__item ml-md-1">
        <a href="#" class="list__link px-3">
          <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
          <p class="d-md-inline d-none">訂單管理</p>
        </a>
      </li>
      <!-- 搜尋 -->
      <li class="list__item ml-md-1 d-md-flex d-none">
        <a href="#" class="list__link search-link pl-3">
          <span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
          <input class="search p-0 pl-3" type="text" placeholder="找商品" />
        </a>
      </li>
      <!-- Sidebar 開關 -->
      <li class="list__item ml-md-1">
        <a href="#" class="list__link menu-link px-3" @click.prevent="sidebarToggle">
          <Hamburger />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex';

import Hamburger from '@/components/common/Hamburger.vue';
import Popover from '@/components/Layout/Popover.vue';

export default {
  components: {
    Hamburger,
    Popover,
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
