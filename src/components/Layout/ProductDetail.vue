<template>
  <div class="product-detail text-secondary">
    <div class="p-3">
      <!-- 骨架屏 -->
      <template v-if="skeletonTarget === 'product'">
        <div class="row">
          <div class="col-md-5">
            <div class="p-3">
              <div class="product-detail__img"><PuSkeleton width="100%" height="100%" /></div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="p-3">
              <h1 class="product-detail__title"><PuSkeleton /></h1>
              <div class="text-gray d-flex align-items-center mt-2">
                <p class="flex-1" style="max-width:200px"><PuSkeleton /></p>
              </div>
              <div class="p-0 product-detail__section d-flex align-items-center my-3">
                <div class="flex-1">
                  <PuSkeleton height="70px" />
                </div>
              </div>
              <p class="product-detail__sub mb-2 text-gray" style="max-width:80px">
                <PuSkeleton />
              </p>
              <ul class="product-detail__features mb-2">
                <li class="item py-1" v-for="index in 3" :key="index" style="max-width:300px">
                  <PuSkeleton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <!-- 實體 -->
      <template v-else>
        <div class="row">
          <div class="col-md-5">
            <div class="p-3">
              <div
                class="product-detail__img"
                :style="{ 'background-image': `url('${product.imgUrl}')` }"
              ></div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="p-3">
              <h1 class="product-detail__title">{{ product.title }}</h1>
              <div class="text-gray d-flex align-items-center mt-2">
                <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
                <p class="ml-1">{{ product.category }}</p>
                <div class="line mx-3"></div>
                <p>
                  <span class="text-secondary mr-2">{{ product.sales }}</span
                  >已售出
                </p>
              </div>
              <div class="p-4 product-detail__section d-flex align-items-center my-3">
                <p
                  class="product-detail__origin-price text-gray"
                  v-if="product.origin_price !== product.price"
                >
                  {{ product.origin_price | currency | dollar }}
                </p>
                <p class="product-detail__price text-primary ml-2">
                  {{ product.price | currency | dollar }}
                </p>
                <span
                  class="product-detail__percent bg-primary text-white ml-2"
                  v-if="product.origin_price !== product.price"
                  >{{ productDiscount }} 折</span
                >
              </div>
              <p class="product-detail__sub mb-2 text-gray">商品特色：</p>
              <ul class="product-detail__features list-style-disc ml-3 mb-2">
                <li class="item py-1" v-for="(item, index) in productDescription" :key="index">
                  {{ item }}
                </li>
              </ul>
              <div class="product-detail__dropdown mb-2">
                <div class="d-flex align-items-center cursor-pointer py-2" @click="dropdownToggle">
                  <p class="text-gray">付款與運送</p>
                  <span class="icon text-gray ml-auto" :class="{ 'icon--rotate': dropdownActive }">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                  </span>
                </div>
                <div class="collapse p-3" :class="{ 'collapse--active': dropdownActive }">
                  <p class="title mb-2">付款方式</p>
                  <ul>
                    <li class="pt-1 pb-2">
                      <p>信用卡一次付清</p>
                    </li>
                    <li class="pt-1">
                      <p>AMT 轉帳</p>
                    </li>
                  </ul>
                  <p class="title mb-2 mt-3">運送方式</p>
                  <ul>
                    <li class="pt-1 pb-2">
                      <div class="d-flex align-items-center mb-2">
                        <p>7-11 純取貨</p>
                        <span class="ml-auto">$60</span>
                      </div>
                      <small class="text-gray date">
                        預計到貨時間{{ arrivalDate.date1.mm }}月{{ arrivalDate.date1.dd }}日 -
                        {{ arrivalDate.date2.mm }}月{{ arrivalDate.date2.dd }}日
                      </small>
                    </li>
                    <li class="pt-1 pb-2">
                      <div class="d-flex align-items-center mb-2">
                        <p>全家純取貨</p>
                        <span class="ml-auto">$60</span>
                      </div>
                      <small class="text-gray date">
                        預計到貨時間{{ arrivalDate.date1.mm }}月{{ arrivalDate.date1.dd }}日 -
                        {{ arrivalDate.date2.mm }}月{{ arrivalDate.date2.dd }}日
                      </small>
                    </li>
                    <li class="pt-1">
                      <div class="d-flex align-items-center mb-2">
                        <p>黑貓宅急便</p>
                        <span class="ml-auto">$120</span>
                      </div>
                      <small class="text-gray date">
                        預計到貨時間{{ arrivalDate.date1.mm }}月{{ arrivalDate.date1.dd }}日 -
                        {{ arrivalDate.date2.mm }}月{{ arrivalDate.date2.dd }}日
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex align-items-center text-secondary mb-2">
                <button
                  class="btn btn--lg product-detail__btn left mr-0"
                  :disabled="qty <= 1"
                  @click.prevent="qty -= 1"
                >
                  <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                </button>
                <input
                  type="number"
                  class="product-detail__input mx-0"
                  :ref="product.id"
                  :disabled="product.stock === 0"
                  @input="filterQty"
                  :value="qty"
                />
                <button
                  class="btn btn--lg product-detail__btn right ml-0"
                  :disabled="qty >= product.stock"
                  @click.prevent="qty += 1"
                >
                  <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
                </button>
                <span class="product-detail__stock ml-3">還剩 {{ product.stock }} 件</span>
              </div>
              <div class="d-flex align-items-center mb-5">
                <button
                  class="btn btn--transparent btn-md--xl btn--lg d-flex align-items-center"
                  @click.prevent="addToCart('add')"
                >
                  <p>加入購物車</p>
                  <span class="ml-2" v-if="spinner.action === 'add'">
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                  </span>
                </button>
                <button
                  class="btn btn--primary btn-md--xl btn--lg ml-3 d-flex align-items-center"
                  @click="addToCart('push')"
                >
                  <p>直接購買</p>
                  <span class="ml-2" v-if="spinner.action === 'push'">
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                  </span>
                </button>
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="p-3">
              <span class="product-detail__tab p-3">商品詳情</span>
              <p class="product-detail__content p-3">{{ product.content }}</p>
            </div>
          </div>
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
      qty: 1,
      dropdownActive: false,
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async initProduct() {
      const { id } = this.$route.params;
      await this.$store.dispatch('products/getProduct', { productId: id });
      if (this.product.stock === 0) this.qty = 0;
    },
    dropdownToggle() {
      this.dropdownActive = !this.dropdownActive;
    },
    filterQty(e) {
      const qty = parseInt(e.target.value, 10);
      // 檢查是否為有效數字
      if (qty <= 0 || Number.isNaN(qty) || e.target.value.includes('.')) {
        this.$refs[this.product.id].value = this.qty;
        return;
      }
      // 檢查是否庫存不足
      if (qty > this.product.stock) {
        this.$refs[this.product.id].value = this.qty;
        return;
      }
      this.qty = qty;
    },
    async addToCart(action) {
      this.spinner.action = action;
      // 在每次動作前驗證
      await this.$store.dispatch('user/check');
      // 檢查是否登入
      if (!this.isSignin) {
        this.spinner.action = '';
        this.$router.push({ path: '/signin' });
        return;
      }
      // 檢查是否庫存不足
      if (this.qty > this.product.stock || this.qty === 0) {
        const message = '庫存不足';
        this.spinner.action = '';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return;
      }
      // 加入購物車
      const success = await this.$store.dispatch('cart/addToCart', {
        productId: this.product.id,
        qty: this.qty,
      });
      this.spinner.action = '';
      if (success && action === 'push') {
        this.$router.push('/cart');
      }
    },
  },
  computed: {
    productDiscount() {
      const discount = Math.round((this.product.price / this.product.origin_price) * 100);
      if (discount % 10 === 0) return discount;
      return discount / 10;
    },
    productDescription() {
      if (this.product.description) {
        return this.product.description.split('\n') || [];
      }
      return [];
    },
    arrivalDate() {
      const day = 2; // 到貨天數
      const date = new Date();
      date.setDate(date.getDate() + day);
      let mm = date.getMonth() + 1;
      let dd = date.getDate();
      const date1 = { mm, dd };
      date.setDate(date.getDate() + 1); // 誤差天數
      mm = date.getMonth() + 1;
      dd = date.getDate();
      const date2 = { mm, dd };
      return { date1, date2 };
    },
    ...mapState('user', ['isSignin']),
    ...mapState('products', ['product']),
    ...mapState(['skeletonTarget']),
  },
  created() {
    this.initProduct();
  },
};
</script>
<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-detail.scss';
</style>
