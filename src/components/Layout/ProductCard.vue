<template>
  <router-link :to="{ path: `/product/${item.id}` }" class="product-card text-secondary p-3">
    <div class="product-card__img" :style="{ 'background-image': `url('${item.imgUrl}')` }"></div>
    <p class="product-card__title mt-3">{{ item.title }}</p>
    <div class="product-card__category text-gray d-flex align-items-center mt-2">
      <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
      <p class="ml-1">{{ item.category }}</p>
    </div>
    <div
      class="product-card__stock d-flex align-items-center mt-2"
      :class="{
        'text-primary': item.stock > 5,
        'text-warning': item.stock <= 5 && item.stock > 0,
        'text-danger': item.stock === 0,
      }"
    >
      <span><font-awesome-icon :icon="['fas', 'cube']"/></span>
      <p class="ml-1" v-if="item.stock > 5">尚有庫存</p>
      <p class="ml-1" v-else-if="item.stock <= 5 && item.stock > 0">庫存較少</p>
      <p class="ml-1" v-else>庫存不足</p>
    </div>
    <div class="d-flex align-items-end mt-2">
      <p class="product-card__price text-primary">
        <span class="dollar">$</span>{{ item.price | currency }}
      </p>
      <p class="product-card__origin-price ml-2" v-if="item.origin_price !== item.price">
        {{ item.origin_price | currency | dollar }}
      </p>
      <button
        class="btn p-0 product-card__btn ml-auto d-flex align-items-center justify-content-center"
        :class="{ 'product-card__btn--disabled': item.stock === 0 }"
        @click.prevent.stop="addToCart(item.id, item.stock)"
      >
        <span class="spinner text-white" v-if="spinner.id === item.id">
          <font-awesome-icon :icon="['fas', 'spinner']" spin />
        </span>
        <div class="icon m-1" v-else></div>
      </button>
    </div>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async addToCart(productId, productStock) {
      if (productStock === 0) return;
      this.spinner = { id: productId, action: '' };
      // 在每次動作前驗證
      await this.$store.dispatch('user/check');
      // 檢查是否登入
      if (!this.isSignin) {
        this.$router.push({ path: '/signin' });
        return;
      }
      // 加入購物車
      await this.$store.dispatch('cart/addToCart', { productId, qty: 1 });
      this.spinner = { id: '', action: '' };
    },
  },
  computed: mapState('user', ['isSignin']),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-card';
</style>
