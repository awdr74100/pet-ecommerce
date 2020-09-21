<template>
  <div class="cart-table w-100 h-100">
    <div class="table-responsive">
      <table class="table text-secondary">
        <thead class="thead">
          <tr>
            <th style="min-width:40px" v-if="!readonly">
              <input type="checkbox" class="checkbox m-0" v-model="selectAll" />
            </th>
            <th style="min-width:320px" class="w-100">商品</th>
            <th style="min-width:140px">單價</th>
            <th style="min-width:200px">數量</th>
            <th style="min-width:140px">總計</th>
            <th style="min-width:95px" class="text-center">
              <p v-if="!readonly">操作</p>
              <p v-else>備註</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 骨架屏 -->
          <template v-if="skeletonTarget === 'cart'">
            <tr v-for="index in 4" :key="index">
              <td v-if="!readonly"><PuSkeleton height="16px" /></td>
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
            <tr v-for="(item, index) in collapseCart" :key="index">
              <td v-if="!readonly">
                <input
                  type="checkbox"
                  class="checkbox m-0"
                  :value="item.id"
                  :checked="selected.includes(item.id)"
                  @change="$emit('change', $event.target.value)"
                />
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
                  <button
                    class="btn btn-group__btn left"
                    :class="{ 'btn-group__btn--overlay': overlay.id === item.id }"
                    :disabled="readonly || item.qty <= 1 || overlay.id === item.id"
                    @click.prevent="updateCartItemQty('reduce', item)"
                  >
                    <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                  </button>
                  <input
                    type="number"
                    class="btn-group__input"
                    :ref="item.id"
                    :class="{ 'btn-group__input--overlay': overlay.id === item.id }"
                    :disabled="readonly || overlay.id === item.id"
                    :value="item.qty"
                    @blur="blurUpdateCartItemQty(item, $event)"
                  />
                  <button
                    class="btn btn-group__btn right"
                    :class="{ 'btn-group__btn--overlay': overlay.id === item.id }"
                    :disabled="readonly || item.qty >= item.product.stock || overlay.id === item.id"
                    @click.prevent="updateCartItemQty('add', item)"
                  >
                    <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
                  </button>
                </div>
                <span
                  class="stock d-block mt-1 text-primary"
                  v-if="!order.id && item.product.stock <= 5"
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
                <p v-if="readonly">無</p>
                <p
                  class="text-danger cursor-pointer text-center"
                  v-else
                  @click="removeFromCart(item.id)"
                >
                  <span v-if="spinner.id === item.id">
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                  </span>
                  <span v-else>刪除</span>
                </p>
              </td>
            </tr>
            <tr v-if="readonly && cart.length > 2">
              <td class="text-center" colspan="5">
                <button class="btn btn--primary btn--xl" @click="collapse = !collapse">
                  <div class="d-flex align-items-center">
                    <p v-if="collapse">查看其餘 {{ cart.length - 2 }} 件商品</p>
                    <p v-else>摺疊購物車</p>
                    <span class="icon ml-2" :class="{ 'icon--rotate': !collapse }">
                      <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </span>
                  </div>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      collapse: true,
      sortMode: 'down',
      sortTarget: 'created_at',
      spinner: { id: '', action: '' },
      overlay: { id: '' },
    };
  },
  methods: {
    async removeFromCart(cartProductId) {
      this.spinner.id = cartProductId;
      await this.$store.dispatch('cart/removeFromCart', { cartProductId });
      this.spinner.id = '';
    },
    async updateCartItemQty(action, cartProduct) {
      const { id } = cartProduct;
      let { qty } = cartProduct;
      this.overlay.id = id;
      const newQty = action === 'add' ? (qty += 1) : (qty -= 1);
      await this.$store.dispatch('cart/updateCartItemQty', { cartProductId: id, qty: newQty });
      this.overlay.id = '';
    },
    async blurUpdateCartItemQty(cartPorduct, e) {
      const { id, qty, product } = cartPorduct;
      const newQty = parseInt(e.target.value, 10);
      if (newQty === qty) return;
      // 從前端做驗證
      if (newQty > product.stock) {
        const message = '庫存不足';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        this.$refs[id][0].value = qty;
        return;
      }
      this.overlay.id = id;
      await this.$store.dispatch('cart/updateCartItemQty', { cartProductId: id, qty: newQty });
      this.overlay.id = '';
    },
  },
  computed: {
    collapseCart() {
      const vm = this;
      const cart = this.order.cart || this.cart;
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      const sortCart = cart.sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB));
      if (this.readonly && this.collapse) return sortCart.slice(0, 2);
      return sortCart;
    },
    selectAll: {
      get() {
        return this.cart.length > 0 ? this.selected.length === this.cart.length : false;
      },
      set(value) {
        this.$emit('callSelectToggle', value);
      },
    },
    ...mapState('cart', ['cart']),
    ...mapState('orders', ['order']),
    ...mapState(['skeletonTarget']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/cart-table.scss';
</style>
