<template>
  <div class="sidebar mb-6">
    <div class="logo d-md-none">毛孩<span class="highlight">百貨</span></div>
    <ul class="p-4 pt-3">
      <li>
        <div class="tab-name py-1" @click="tabToggle('products')">
          <span class="mr-2"><font-awesome-icon :icon="['fas', 'shopping-bag']" size="sm"/></span>
          <p class="text-l-2">商品管理</p>
          <span class="ml-auto" :class="{ rotate: activeTab.includes('products') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list ml-3" :class="{ 'list--active': activeTab.includes('products') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'products' && pathList[2] === 'all' }"
              to="/admin/products/all"
              @click.native="sidebarToggle"
              >全部商品</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'products' && pathList[2] === 'listed',
              }"
              to="/admin/products/listed"
              @click.native="sidebarToggle"
              >架上商品</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'products' && pathList[2] === 'soldout',
              }"
              to="/admin/products/soldout"
              @click.native="sidebarToggle"
              >已售完商品</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'products' && pathList[2] === 'unlisted',
              }"
              to="/admin/products/unlisted"
              @click.native="sidebarToggle"
              >未上架商品</router-link
            >
          </li>
        </ul>
      </li>
      <li class="mt-2">
        <div class="tab-name py-1" @click="tabToggle('coupons')">
          <span class="mr-2"><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
          <p class="text-l-1">優惠卷管理</p>
          <span class="ml-auto" :class="{ rotate: activeTab.includes('coupons') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list ml-3" :class="{ 'list--active': activeTab.includes('coupons') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'all' }"
              to="/admin/coupons/all"
              @click.native="sidebarToggle"
              >全部優惠卷</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'scheduled',
              }"
              to="/admin/coupons/scheduled"
              @click.native="sidebarToggle"
              >已排定優惠卷</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'underway',
              }"
              to="/admin/coupons/underway"
              @click.native="sidebarToggle"
              >進行中優惠卷</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'over',
              }"
              to="/admin/coupons/over"
              @click.native="sidebarToggle"
              >已結束優惠卷</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'not_enabled',
              }"
              to="/admin/coupons/not_enabled"
              @click.native="sidebarToggle"
              >未啟用優惠卷</router-link
            >
          </li>
        </ul>
      </li>
      <li class="mt-2">
        <div class="tab-name py-1" @click="tabToggle('orders')">
          <span class="mr-2"><font-awesome-icon :icon="['fas', 'file-alt']" size="sm"/></span>
          <p class="text-l-3">訂單管理</p>
          <span class="ml-auto" :class="{ rotate: activeTab.includes('orders') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list ml-3" :class="{ 'list--active': activeTab.includes('orders') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'orders' && pathList[2] === 'all' }"
              to="/admin/orders/all"
              @click.native="sidebarToggle"
              >全部訂單</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'orders' && pathList[2] === 'unpaid',
              }"
              to="/admin/orders/unpaid"
              @click.native="sidebarToggle"
              >尚未結帳</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: ['products', 'coupons', 'orders'],
    };
  },
  methods: {
    tabToggle(tab) {
      const index = this.activeTab.indexOf(tab);
      if (index !== -1) return this.activeTab.splice(index, 1);
      return this.activeTab.push(tab);
    },
    sidebarToggle() {
      if (window.innerWidth >= 768) return;
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
  },
  computed: {
    pathList() {
      return this.$route.path.split('/').slice(1, 4);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/sidebar.scss';
</style>
