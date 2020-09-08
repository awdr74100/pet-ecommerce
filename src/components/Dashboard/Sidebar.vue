<template>
  <div class="sidebar">
    <div class="sidebar__toggle d-md-none" @click="sidebarToggle">
      <Hamburger />
    </div>
    <ul class="pb-6">
      <li class="mt-2">
        <div class="tab px-4 py-2" @click="tabToggle('products')">
          <span class="icon mr-3"><font-awesome-icon :icon="['fas', 'shopping-bag']"/></span>
          <p>商品管理</p>
          <span class="arrow ml-auto" :class="{ 'arrow--rotate': activeTab.includes('products') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list" :class="{ 'list--active': activeTab.includes('products') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'products' && pathList[2] === 'all' }"
              to="/admin/products/all"
              @click.native="sidebarToggle"
              >全部</router-link
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
              >已售完</router-link
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
              >未上架</router-link
            >
          </li>
        </ul>
      </li>
      <li class="mt-2">
        <div class="tab px-4 py-2" @click="tabToggle('coupons')">
          <span class="icon mr-3"><font-awesome-icon :icon="['fas', 'tag']"/></span>
          <p>優惠卷管理</p>
          <span class="arrow ml-auto" :class="{ rotate: activeTab.includes('coupons') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list" :class="{ 'list--active': activeTab.includes('coupons') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'coupons' && pathList[2] === 'all' }"
              to="/admin/coupons/all"
              @click.native="sidebarToggle"
              >全部</router-link
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
              >已排定</router-link
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
              >進行中</router-link
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
              >已結束</router-link
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
              >被禁用</router-link
            >
          </li>
        </ul>
      </li>
      <li class="mt-2">
        <div class="tab px-4 py-2" @click="tabToggle('orders')">
          <span class="icon mr-3"><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
          <p>訂單管理</p>
          <span class="arrow ml-auto" :class="{ rotate: activeTab.includes('orders') }">
            <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
          </span>
        </div>
        <ul class="list" :class="{ 'list--active': activeTab.includes('orders') }">
          <li>
            <router-link
              class="list__link"
              :class="{ 'list__link--active': pathList[1] === 'orders' && pathList[2] === 'all' }"
              to="/admin/orders/all"
              @click.native="sidebarToggle"
              >全部</router-link
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
              >尚未付款</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'orders' && pathList[2] === 'toship',
              }"
              to="/admin/orders/toship"
              @click.native="sidebarToggle"
              >待出貨</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'orders' && pathList[2] === 'shipping',
              }"
              to="/admin/orders/shipping"
              @click.native="sidebarToggle"
              >運送中</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'orders' && pathList[2] === 'completed',
              }"
              to="/admin/orders/completed"
              @click.native="sidebarToggle"
              >已完成</router-link
            >
          </li>
          <li>
            <router-link
              class="list__link"
              :class="{
                'list__link--active': pathList[1] === 'orders' && pathList[2] === 'cancelled',
              }"
              to="/admin/orders/cancelled"
              @click.native="sidebarToggle"
              >已取消</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Hamburger from '@/components/common/Hamburger.vue';

export default {
  components: {
    Hamburger,
  },
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
