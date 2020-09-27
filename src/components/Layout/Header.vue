<template>
  <header class="header">
    <ul class="list p-md-1 p-0">
      <!-- 登入/註冊 -->
      <li class="list__item ml-md-1" v-if="!isSignin">
        <router-link to="/signin" class="list__link px-3">
          <span class="icon icon-resize mr-1">
            <font-awesome-icon :icon="['fas', 'user-circle']" />
          </span>
          <div class="align-items-center d-md-flex d-none">
            <p>登入</p>
            <span class="line"></span>
            <p>註冊</p>
          </div>
        </router-link>
      </li>
      <!-- 登出 -->
      <li class="list__item ml-md-1" v-if="isSignin">
        <a href="#" class="list__link list__link--primary px-3" @click.prevent="signout">
          <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'sign-out-alt']"/></span>
          <p class="d-md-inline d-none">登出</p>
        </a>
      </li>
      <!-- 購物車 -->
      <li class="list__item ml-md-1" v-if="showCart">
        <router-link to="/cart" class="list__link px-3">
          <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></span>
          <p><span class="d-md-inline d-none">購物車</span> ({{ isSignin ? cart.length : 0 }})</p>
        </router-link>
        <!-- popover -->
        <Popover />
      </li>
      <!-- 訂單管理 -->
      <li class="list__item ml-md-1">
        <router-link to="/orders" class="list__link px-3">
          <span class="icon mr-1"><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
          <p class="d-md-inline d-none">訂單管理</p>
        </router-link>
      </li>
      <!-- 搜尋 -->
      <li class="list__item ml-md-1 d-md-flex d-none">
        <div class="list__link search-link">
          <span class="icon cursor-pointer px-3" @click="searchProduct">
            <font-awesome-icon :icon="['fas', 'search']" />
          </span>
          <input
            class="search p-0"
            type="text"
            placeholder="找商品"
            v-model.trim="productTitle"
            @keypress.enter="searchProduct"
          />
        </div>
      </li>
      <!-- 側邊欄 -->
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
  data() {
    return {
      productTitle: '',
    };
  },
  methods: {
    sidebarToggle() {
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
    signout() {
      const { requiresAuth = false } = this.$route.meta;
      this.$store.dispatch('user/signout', { requiresAuth });
    },
    searchProduct() {
      if (!this.productTitle) return;
      this.$router.push({ path: `/category/全部商品?title=${this.productTitle}` });
      this.productTitle = '';
    },
  },
  computed: {
    showCart() {
      return this.$route.name !== 'Checkout';
    },
    ...mapState('user', ['isSignin']),
    ...mapState('cart', ['cart']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/header.scss';
</style>
