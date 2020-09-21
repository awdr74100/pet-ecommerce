<template>
  <div class="popover">
    <div class="popover__drawer"></div>
    <div class="popover__container text-secondary bg-white">
      <!-- 當購物車存在商品 -->
      <template v-if="isSignin && cart.length > 0">
        <div class="popover__header p-3">
          <p>最近加入的商品</p>
        </div>
        <ul class="overflow px-3 my-1">
          <li class="product py-2" v-for="(item, index) in sortCart" :key="index">
            <div
              class="product__img"
              :style="{ 'background-image': `url('${item.product.imgUrl}')` }"
            ></div>
            <div class="product__content text-gray ml-3 mr-2">
              <p class="product__title">{{ item.product.title }}</p>
              <div class="d-flex align-items-end mt-auto">
                <template v-if="item.coupon">
                  <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                  <p class="ml-1">{{ item.coupon.percent / 10 }} 折</p>
                </template>
                <p class="ml-auto text-primary">
                  $<span class="product__total">{{ item.final_total | currency }}</span>
                </p>
              </div>
            </div>
            <div class="d-flex flex-column align-items-end">
              <p class="product__qty">x{{ item.qty }}</p>
              <span
                class="mt-auto text-danger cursor-pointer product__delete text-center"
                @click="removeFromCart(item.id)"
              >
                <span v-if="spinner.id === item.id && spinner.action === 'deleteSingle'">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin />
                </span>
                <p v-else>刪除</p>
              </span>
            </div>
          </li>
        </ul>
        <div class="popover__footer d-flex align-items-end p-3">
          <p>
            總計：<span class="text-primary">{{ final_total | currency | dollar }}</span>
          </p>
          <a
            href="#"
            class="btn btn--transparent btn--xl px-2 ml-auto d-flex align-items-center"
            @click.prevent="clearCart"
          >
            <p>清空</p>
            <span class="ml-2" v-if="spinner.action === 'deleteAll'">
              <font-awesome-icon :icon="['fas', 'spinner']" spin />
            </span>
          </a>
          <router-link to="/cart" class="btn btn--primary btn--xl px-3 ml-2"
            >查看我的購物車</router-link
          >
        </div>
      </template>
      <!-- 當購物車為空 -->
      <template v-else>
        <div class="d-flex flex-column align-items-center justify-content-center py-6">
          <span class="text-secondary">
            <font-awesome-icon :icon="['fas', 'cart-arrow-down']" size="3x" />
          </span>
          <p class="mt-4">尚無商品</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      sortMode: 'down',
      sortTarget: 'created_at',
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async initCart() {
      await this.$store.dispatch('user/check');
      if (this.isSignin) {
        this.$store.dispatch('cart/getCart');
      }
    },
    async removeFromCart(cartProductId) {
      this.spinner.id = cartProductId;
      this.spinner.action = 'deleteSingle';
      // 在每次動作前驗證
      await this.$store.dispatch('user/check');
      // 檢查是否登入
      if (!this.isSignin) {
        this.$router.push({ path: '/signin' });
        return;
      }
      await this.$store.dispatch('cart/removeFromCart', { cartProductId });
      this.spinner.id = '';
      this.spinner.action = '';
    },
    async clearCart() {
      this.spinner.action = 'deleteAll';
      // 在每次動作前驗證
      await this.$store.dispatch('user/check');
      // 檢查是否登入
      if (!this.isSignin) {
        this.$router.push({ path: '/signin' });
        return;
      }
      await this.$store.dispatch('cart/clearCart');
      this.spinner.action = '';
    },
  },
  computed: {
    sortCart() {
      const vm = this;
      const cart = [...vm.cart]; /// fix call by reference
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      return cart.sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB));
    },
    ...mapState('user', ['isSignin']),
    ...mapState('cart', ['cart', 'total', 'final_total']),
  },
  created() {
    this.initCart();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/popover.scss';
</style>
