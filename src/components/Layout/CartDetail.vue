<template>
  <div class="cart-detail">
    <!-- 當購物車存在商品 -->
    <template v-if="cart.length > 0">
      <!-- table -->
      <div class="p-3">
        <div class="table-responsive">
          <table class="table text-secondary">
            <thead class="thead">
              <tr>
                <th style="min-width:40px">
                  <input type="checkbox" class="checkbox m-0" v-model="selectAll" />
                </th>
                <th style="min-width:320px" class="w-100">商品</th>
                <th style="min-width:140px">單價</th>
                <th style="min-width:200px">數量</th>
                <th style="min-width:140px">總計</th>
                <th style="min-width:95px" class="text-center">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- 骨架屏 -->
              <template v-if="skeletonTarget === 'cart'">
                <tr v-for="index in 4" :key="index">
                  <td><PuSkeleton height="16px" /></td>
                  <td class="d-flex align-items-center">
                    <div style="flex: 0 0 70px"><PuSkeleton height="70px" /></div>
                    <div class="ml-3 w-100">
                      <p class="mb-1"><PuSkeleton /></p>
                      <p style="max-width:160px"><PuSkeleton /></p>
                    </div>
                  </td>
                  <td><PuSkeleton /></td>
                  <td><PuSkeleton /></td>
                  <td><PuSkeleton /></td>
                  <td><PuSkeleton /></td>
                </tr>
              </template>
              <!-- 實體 -->
              <template v-else>
                <tr v-for="(item, index) in cart" :key="index">
                  <td>
                    <input type="checkbox" class="checkbox m-0" :value="item" v-model="selected" />
                  </td>
                  <td>
                    <div class="product">
                      <div
                        class="product__img"
                        :style="{ 'background-image': `url('${item.product.imgUrl}')` }"
                      ></div>
                      <div class="product__content text-gray ml-3 mr-2">
                        <p class="product__title">
                          {{ item.product.title }}
                        </p>
                        <p class="mt-1">{{ item.product.category }}</p>
                        <div class="d-flex align-items-center mt-auto" v-if="item.coupon">
                          <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                          <p class="ml-1">{{ item.coupon.percent / 10 }} 折</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{{ item.product.price | currency | dollar }}</td>
                  <td>
                    <div class="d-flex align-items-center text-secondary btn-group">
                      <button class="btn btn-group__btn left">
                        <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                      </button>
                      <input type="number" class="btn-group__input" :value="item.qty" />
                      <button class="btn btn-group__btn right">
                        <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
                      </button>
                    </div>
                    <span class="stock d-block mt-1 text-primary" v-if="item.product.stock <= 5"
                      >剩下 {{ item.product.stock }} 個商品</span
                    >
                  </td>
                  <td>
                    <span class="mr-2 line-through" v-if="item.coupon">{{
                      item.total | currency | dollar
                    }}</span>
                    <span class="text-primary">{{ item.final_total | currency | dollar }}</span>
                  </td>
                  <td class="text-center">
                    <p
                      class="text-danger cursor-pointer text-center"
                      @click="removeFromCart(item.id)"
                    >
                      <span v-if="iconLoadingTarget === item.id">
                        <font-awesome-icon :icon="['fas', 'spinner']" spin />
                      </span>
                      <span v-else>刪除</span>
                    </p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
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
              慶祝開幕，輸入折扣碼「ALCRE88045」，即享有全館商品 75 折優惠
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
                <span style="min-width:28px" v-if="iconLoadingTarget === 'apply'" class="d-block">
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
                <p class="d-md-inline d-none">已選擇 {{ selected.length }} 件商品</p>
                <button
                  class="btn btn--primary btn--sm ml-3 d-flex align-items-center"
                  @click="removeFromCart(undefined)"
                >
                  <p>刪除</p>
                  <span class="ml-2" v-if="iconLoadingTarget === 'remove'">
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

export default {
  data() {
    return {
      code: '',
      selected: [],
      iconLoadingTarget: '',
    };
  },
  methods: {
    async removeFromCart(id) {
      if (id) {
        this.iconLoadingTarget = id;
        await this.$store.dispatch('cart/removeFromCart', { cartProductId: id });
        this.iconLoadingTarget = '';
        this.selectReset();
        return;
      }
      const ids = this.selected.map((item) => item.id).join(',');
      this.iconLoadingTarget = 'remove';
      await this.$store.dispatch('cart/removeFromCart', { cartProductId: ids });
      this.iconLoadingTarget = '';
      this.selectReset();
    },
    async applyCoupon() {
      this.iconLoadingTarget = 'apply';
      await this.$store.dispatch('coupons/applyCoupon', { code: this.code });
      this.iconLoadingTarget = '';
    },
    selectReset() {
      this.selected = [];
    },
  },
  computed: {
    selectAll: {
      get() {
        return this.cart.length > 0 ? this.selected.length === this.cart.length : false;
      },
      set(value) {
        if (value) {
          this.selected = this.cart;
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
