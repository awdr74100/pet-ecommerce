<template>
  <div class="sidebar h-100">
    <div class="py-2 shadow">
      <router-link to="/" class="sidebar__logo" @click.native="sidebarToggle"></router-link>
    </div>
    <div class="py-2 px-5 shadow d-block d-md-none">
      <input type="text" class="sidebar__input px-2 py-1" placeholder="找商品" />
    </div>
    <nav class="sidebar__nav w-100 h-100">
      <div class="py-2 shadow">
        <ul>
          <li>
            <router-link
              to="/"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--home mr-4"></span>
              <p class="font-resize">首頁</p>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/about' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--about mr-4"></span>
              <p class="font-resize">關於我們</p>
            </router-link>
          </li>
          <li>
            <router-link
              to="/news"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/news' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--news mr-4"></span>
              <p class="font-resize">最新消息</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="py-2 shadow">
        <ul>
          <li>
            <a href="#" class="sidebar__link px-5 py-2" @click.prevent="dropdownToggle">
              <span class="icon icon--hot mr-4"></span>
              <p class="font-resize">熱銷商品</p>
              <span class="arrow" :class="{ 'arrow--rotate': dropdownActive }">
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </span>
            </a>
            <ul class="dropdown" :class="{ 'dropdown--active': dropdownActive }">
              <li>
                <router-link
                  to="/category/全部商品"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/全部商品' }"
                  @click.native="sidebarToggle"
                  >全部商品</router-link
                >
              </li>
              <li>
                <router-link
                  to="/category/品牌貓飼料"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/品牌貓飼料' }"
                  @click.native="sidebarToggle"
                  >品牌貓飼料</router-link
                >
              </li>
              <li>
                <router-link
                  to="/category/品牌狗飼料"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/品牌狗飼料' }"
                  @click.native="sidebarToggle"
                  >品牌狗飼料</router-link
                >
              </li>
              <li>
                <router-link
                  to="/category/寵物營養品"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/寵物營養品' }"
                  @click.native="sidebarToggle"
                  >寵物營養品</router-link
                >
              </li>
              <li>
                <router-link
                  to="/category/貓砂與貓砂盆"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/貓砂與貓砂盆' }"
                  @click.native="sidebarToggle"
                  >貓砂與貓砂盆</router-link
                >
              </li>
              <li>
                <router-link
                  to="/category/寵物戶外用品"
                  class="sidebar__link"
                  :class="{ 'sidebar__link--active': path === '/category/寵物戶外用品' }"
                  @click.native="sidebarToggle"
                  >寵物戶外用品</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/category/優惠商品"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/category/優惠商品' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--sale mr-4"></span>
              <p class="font-resize">優惠商品</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="py-2">
        <ul>
          <li>
            <router-link
              to="/coupon"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/coupon' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--coupon mr-4"></span>
              <p class="font-resize">優惠活動</p>
            </router-link>
          </li>
          <li>
            <router-link
              to="/adopt"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/adopt' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--adopt mr-4"></span>
              <p class="font-resize">領養專區</p>
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="sidebar__link px-5 py-2"
              :class="{ 'sidebar__link--active': path === '/contact' }"
              @click.native="sidebarToggle"
            >
              <span class="icon icon--contact mr-4"></span>
              <p class="font-resize">聯絡我們</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="py-2 mb-2 text-gray mt-auto">
        <div class="copyright d-flex justify-content-center align-items-center">
          <p>Copyright © 2020 Roya</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
    };
  },
  methods: {
    dropdownToggle() {
      this.dropdownActive = !this.dropdownActive;
    },
    sidebarToggle() {
      if (window.innerWidth >= 768) return;
      console.log(this.$route.path);
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/sidebar.scss';
</style>
