<template>
  <div class="cart-detail">
    <!-- 當購物車存在商品 -->
    <template v-if="cart.length > 0">
      <!-- table -->
      <div class="p-3">
        <!-- can't use v-model -->
        <CartTable :selected="selected" @change="putSelected" @callSelectToggle="selectToggle" />
      </div>
      <!-- info -->
      <div class="info mt-3">
        <!-- 骨架屏 -->
        <template v-if="skeletonTarget === 'cart'">
          <div class="d-flex align-items-center justify-content-end py-3">
            <span class="flex-1" style="max-width:340px"><PuSkeleton height="24px"/></span>
          </div>
          <div class="info__hr"></div>
          <div class="d-flex align-items-center justify-content-end py-3">
            <span class="flex-1" style="max-width:340px"><PuSkeleton height="24px"/></span>
          </div>
        </template>
        <!-- 實體 -->
        <template v-else>
          <div class="d-flex align-items-center justify-content-end py-3">
            <p class="info__message text-info d-md-inline d-none mr-4">
              慶祝開幕，輸入折扣碼「ALCRE88045」，即享有全館商品 9 折優惠
            </p>
            <div class="d-flex align-items-center info__group">
              <input
                type="text"
                class="info__input"
                placeholder="輸入優惠卷代碼"
                v-model="code"
                @keypress.enter="applyCoupon"
              />
              <button class="btn btn--secondary info__btn" @click.prevent="applyCoupon">
                <span style="min-width:28px" class="d-block" v-if="spinner.action === 'apply'">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin />
                </span>
                <p v-else>套用</p>
              </button>
            </div>
          </div>
          <div class="info__hr"></div>
          <div class="d-flex align-items-center justify-content-end py-3">
            <div class="d-flex flex-column align-items-end">
              <div class="d-flex align-items-center text-secondary">
                <span class="d-md-inline d-none">購買總金額 ({{ cart.length }} 件商品)：</span>
                <span class="d-md-none d-inline">{{ cart.length }} 件商品：</span>
                <span class="info__total mr-2" v-if="total !== final_total">{{
                  total | currency | dollar
                }}</span>
                <span class="info__f-total text-primary">{{
                  final_total | currency | dollar
                }}</span>
              </div>
              <span class="text-warning info__message mt-1" v-if="total !== final_total"
                >已將優惠卷套用至購物車</span
              >
            </div>
            <button
              class="btn btn--primary py-md-2 px-md-5 p-2 ml-3"
              @click.prevent="$router.push({ path: '/checkout' })"
            >
              <p><span class="d-md-inline d-none">前往</span>結帳</p>
            </button>
          </div>
          <template v-if="showBatchAction">
            <div class="info__hr"></div>
            <div class="d-flex align-items-center text-secondary py-3">
              <div class="d-flex align-items-center ml-3">
                <input type="checkbox" class="checkbox m-0" id="selectAll" v-model="selectAll" />
                <label for="selectAll" class="pl-2 cursor-pointer">全選</label>
              </div>
              <div class="d-flex align-items-center ml-auto">
                <p>已選擇 {{ selected.length }} 件商品</p>
                <button
                  class="btn btn--primary btn--sm ml-3 d-flex align-items-center"
                  @click="removeFromCart"
                >
                  <p>刪除</p>
                  <span class="ml-2" v-if="spinner.action === 'remove'">
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                  </span>
                </button>
              </div>
            </div>
          </template>
        </template>
      </div>
    </template>
    <!-- 當購物車為空 -->
    <template v-else>
      <div class="d-flex flex-column align-items-center justify-content-center empty">
        <span class="text-secondary">
          <font-awesome-icon :icon="['fas', 'cart-arrow-down']" size="4x" />
        </span>
        <small class="text-gray mt-3" style="font-size:15px">你的購物車還是空的</small>
        <router-link to="/category/全部商品" class="btn btn--primary btn--xl mt-3"
          >來去逛逛</router-link
        >
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CartTable from '@/components/Layout/CartTable.vue';

export default {
  components: {
    CartTable,
  },
  data() {
    return {
      code: '',
      selected: [],
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async removeFromCart() {
      this.spinner.action = 'remove';
      const ids = this.selected.join(',');
      await this.$store.dispatch('cart/removeFromCart', { cartProductId: ids });
      this.spinner.action = '';
      this.selectToggle(false);
    },
    async applyCoupon() {
      if (this.code === '') {
        const message = '禁止輸入為空';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return;
      }
      this.spinner.action = 'apply';
      await this.$store.dispatch('coupons/applyCoupon', { code: this.code });
      await this.$store.dispatch('cart/getCart');
      this.spinner.action = '';
    },
    putSelected(id) {
      const index = this.selected.indexOf(id);
      if (index < 0) {
        this.selected.push(id);
      } else {
        this.selected.splice(index, 1);
      }
    },
    selectToggle(status) {
      if (status) {
        this.selected = this.cart.map((item) => item.id);
      } else {
        this.selected = [];
      }
    },
  },
  computed: {
    selectAll: {
      get() {
        return this.cart.length > 0 ? this.selected.length === this.cart.length : false;
      },
      set(value) {
        if (value) {
          this.selected = this.cart.map((item) => item.id);
        } else {
          this.selected = [];
        }
      },
    },
    showBatchAction() {
      return this.selected.length > 0;
    },
    ...mapState('cart', ['cart', 'total', 'final_total']),
    ...mapState(['skeletonTarget']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/cart-detail.scss';
</style>
