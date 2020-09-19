<template>
  <div class="checkout-detail">
    <!-- stepper -->
    <div class="p-3 mt-3">
      <Stepper :step="step" :stepFinsh="stepFinsh" />
    </div>
    <!-- table -->
    <div class="p-3">
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:320px" class="w-100">商品</th>
              <th style="min-width:140px">單價</th>
              <th style="min-width:200px">數量</th>
              <th style="min-width:140px">總計</th>
              <th style="min-width:95px" class="text-center">備註</th>
            </tr>
          </thead>
          <tbody>
            <!-- 骨架屏 -->
            <template v-if="skeletonTarget === 'cart'">
              <tr v-for="index in 2" :key="index">
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
                    <button class="btn btn-group__btn left" disabled>
                      <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                    </button>
                    <input type="number" class="btn-group__input" :value="item.qty" disabled />
                    <button class="btn btn-group__btn right" disabled>
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
                  <p class="text-center">
                    <span>無</span>
                  </p>
                </td>
              </tr>
              <tr v-if="cart.length > 2">
                <td class="text-center" colspan="5">
                  <button class="btn btn--primary btn--xl" @click.prevent="collapse = !collapse">
                    <div class="d-flex align-items-center">
                      <p v-if="collapse">查看其餘 {{ cart.length - 2 }} 件商品</p>
                      <p v-if="!collapse">摺疊購物車</p>
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
    <!-- form / window -->
    <div class="p-3">
      <div class="row">
        <!-- steps -->
        <div class="col-md-8 order-md-1 order-2 text-secondary">
          <!-- write step(1) -->
          <template v-if="step === 'write'">
            <div class="row">
              <div class="col-md-6">
                <!-- transport -->
                <div class="d-flex align-items-center pb-3 tab-name mt-md-0 mt-5">
                  <span class="d-block mr-2">
                    <font-awesome-icon :icon="['fas', 'shipping-fast']" />
                  </span>
                  <p>選擇運送方式</p>
                </div>
                <form class="form ml-3">
                  <div class="d-flex mt-3">
                    <input
                      type="radio"
                      class="radio m-0"
                      id="7-11"
                      value="7-11"
                      v-model="shipping_method"
                    />
                    <label for="7-11" class="form__label pl-3 d-flex flex-column flex-1">
                      <div class="d-flex align-items-center">
                        <p>7-11 純取貨</p>
                        <span class="ml-auto mr-3">$60</span>
                      </div>
                      <small class="form__message text-gray mt-2"
                        >預計到貨時間9月15日 - 9月17日</small
                      >
                    </label>
                  </div>
                  <div class="d-flex mt-3">
                    <input
                      type="radio"
                      class="radio m-0"
                      id="family"
                      value="family"
                      v-model="shipping_method"
                    />
                    <label for="family" class="form__label pl-3 d-flex flex-column flex-1">
                      <div class="d-flex align-items-center">
                        <p>全家純取貨</p>
                        <span class="ml-auto mr-3">$60</span>
                      </div>
                      <small class="form__message text-gray mt-2"
                        >預計到貨時間9月15日 - 9月17日</small
                      >
                    </label>
                  </div>
                  <div class="d-flex mt-3">
                    <input
                      type="radio"
                      class="radio m-0"
                      id="t-cat"
                      value="t-cat"
                      v-model="shipping_method"
                    />
                    <label for="t-cat" class="form__label pl-3 d-flex flex-column flex-1">
                      <div class="d-flex align-items-center">
                        <p>黑貓宅急便</p>
                        <span class="ml-auto mr-3">$120</span>
                      </div>
                      <small class="form__message text-gray mt-2"
                        >預計到貨時間9月15日 - 9月17日</small
                      >
                    </label>
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <!-- pay -->
                <div class="d-flex align-items-center pb-3 tab-name mt-md-0 mt-5">
                  <span class="d-block mr-2">
                    <font-awesome-icon :icon="['fas', 'money-bill-wave']" />
                  </span>
                  <p>選擇付款方式</p>
                </div>
                <form class="form ml-3">
                  <div class="d-flex align-items-center mt-3">
                    <input
                      type="radio"
                      class="radio m-0"
                      id="atm"
                      value="atm"
                      v-model="payment_method"
                    />
                    <label for="atm" class="form__label pl-3">
                      <div class="d-flex align-items-center">
                        <span class="d-block mr-2">
                          <font-awesome-icon :icon="['far', 'credit-card']" size="lg" />
                        </span>
                        <p>ATM 轉帳</p>
                      </div>
                    </label>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <input
                      type="radio"
                      class="radio m-0"
                      id="credit-card"
                      value="credit_card"
                      v-model="payment_method"
                    />
                    <label for="credit-card" class="form__label pl-3">
                      <div class="d-flex align-items-center">
                        <span class="d-block mr-2">
                          <font-awesome-icon :icon="['fab', 'cc-visa']" size="lg" />
                        </span>
                        <p>信用卡一次付清</p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <!-- write -->
            <div class="d-flex align-items-center pb-3 tab-name mt-5">
              <span class="d-block mr-2"><font-awesome-icon :icon="['fas', 'user-edit']"/></span>
              <p>填寫收件人資訊</p>
            </div>
            <ValidationObserver ref="create-order-form" slim>
              <form class="form ml-3">
                <div class="row">
                  <div class="col-md-6">
                    <label for="name" class="form__label d-block mb-1 mt-3">姓名*</label>
                    <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                      <div class="form__group">
                        <input
                          type="text"
                          class="form__input"
                          id="name"
                          placeholder="請輸入"
                          :class="{ 'form__input--error': failed }"
                          v-model="user.name"
                        />
                        <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                      </div>
                    </ValidationProvider>
                    <label for="tel" class="form__label d-block mb-1">連絡電話*</label>
                    <ValidationProvider rules="required|tel" v-slot="{ errors, failed }" slim>
                      <div class="form__group">
                        <input
                          type="tel"
                          class="form__input"
                          id="tel"
                          placeholder="請輸入"
                          :class="{ 'form__input--error': failed }"
                          v-model="user.tel"
                        />
                        <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                      </div>
                    </ValidationProvider>
                    <label for="email" class="form__label d-block mb-1">電子郵件*</label>
                    <ValidationProvider rules="required|email" v-slot="{ errors, failed }" slim>
                      <div class="form__group">
                        <input
                          type="email"
                          class="form__input"
                          id="email"
                          placeholder="請輸入"
                          :class="{ 'form__input--error': failed }"
                          v-model="user.email"
                        />
                        <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                      </div>
                    </ValidationProvider>
                    <label for="address" class="form__label d-block mb-1">收件地址*</label>
                    <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                      <div class="form__group">
                        <input
                          type="text"
                          class="form__input"
                          id="address"
                          placeholder="請輸入"
                          :class="{ 'form__input--error': failed }"
                          v-model="user.address"
                        />
                        <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <label for="remarks" class="form__label d-block mb-1 mt-md-3 mt-0">留言</label>
                    <textarea
                      class="form__textarea"
                      cols="30"
                      rows="6"
                      id="remarks"
                      v-model="message"
                    ></textarea>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </template>
          <!-- created step(2) -->
          <template v-if="step === 'created'">
            <div class="window text-secondary mt-md-0 mt-5">
              <h2 class="bg-primary window__header text-white p-3">結帳資訊</h2>
              <div class="p-3 window__body">
                <div class="row">
                  <div class="col-md-7">
                    <div class="d-flex">
                      <p class="text-gray white-nowrap">姓名：</p>
                      <span class="ml-2">{{ order.user.name }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">連絡電話：</p>
                      <span class="ml-2">{{ order.user.tel }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">電子郵件：</p>
                      <span class="ml-2">{{ order.user.email }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">收件地址：</p>
                      <span class="ml-2">{{ order.user.address }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">留言：</p>
                      <span class="ml-2">{{ order.message }}</span>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="d-flex mt-md-0 mt-3">
                      <p class="text-gray white-nowrap">運送方式：</p>
                      <span class="ml-2">{{ order.shipping_method | translate }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">付款方式：</p>
                      <span class="ml-2">{{ order.payment_method | translate }}</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="d-flex mt-3 pt-3 border-top">
                      <p class="text-gray white-nowrap">訂單建立時間：</p>
                      <span class="ml-2">{{ order.created_at | datetime }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">訂單編號：</p>
                      <span class="ml-2">{{ order.id }}</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">付款狀態：</p>
                      <span class="ml-2 text-danger" v-if="order.status === 'unpaid'"
                        >尚未付款</span
                      >
                      <span class="ml-2 text-danger" v-if="order.status === 'toship'"
                        >已完成付款</span
                      >
                      <span class="ml-2 text-danger" v-if="order.status === 'cancelled'"
                        >已取消訂單</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="window text-secondary mt-5">
              <h2 class="bg-primary window__header text-white p-3">
                {{ order.payment_method | translate }}
              </h2>
              <div class="p-3 window__body">
                <div class="d-flex align-items-center justify-content-center">
                  <button class="btn btn--primary px-5">確認並付款</button>
                  <button class="btn btn--danger px-5 ml-3">取消訂單</button>
                </div>
              </div>
            </div>
          </template>
        </div>
        <!-- abstract -->
        <div class="col-md-4 order-md-2 order-1">
          <div class="window text-secondary">
            <h2 class="bg-primary window__header text-white p-3">訂單摘要</h2>
            <div class="p-3 window__body">
              <div class="d-flex align-items-center">
                <p class="text-gray white-nowrap">購買總金額</p>
                <span class="ml-auto" v-if="order.final_total">{{
                  order.final_total | currency | dollar
                }}</span>
                <span class="ml-auto" v-else>{{ final_total | currency | dollar }}</span>
              </div>
              <div class="d-flex align-items-center mt-3">
                <p class="text-gray white-nowrap">運費</p>
                <span class="ml-auto">{{ shippingFee | currency | dollar }}</span>
              </div>
              <div class="d-flex align-items-center mt-3">
                <p class="text-gray white-nowrap">總計</p>
                <span class="ml-auto text-primary" v-if="order.final_total">{{
                  (order.final_total + shippingFee) | currency | dollar
                }}</span>
                <span class="ml-auto text-primary" v-else>{{
                  (final_total + shippingFee) | currency | dollar
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- create order -->
    <div class="mb-3" v-if="step === 'write'">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <button
          class="btn btn--primary btn--xl d-flex align-items-center"
          @click.prevent="createOrder"
        >
          <p>建立訂單</p>
          <span class="ml-2" v-if="iconLoadingTarget === 'create'">
            <font-awesome-icon :icon="['fas', 'spinner']" spin />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Stepper from '@/components/Layout/Stepper.vue';

export default {
  components: {
    Stepper,
  },
  data() {
    return {
      step: 'write',
      stepFinsh: [],
      collapse: true,
      shipping_method: '7-11',
      payment_method: 'atm',
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
      iconLoadingTarget: '',
    };
  },
  methods: {
    async createOrder() {
      const valid = await this.$refs['create-order-form'].validate();
      if (!valid) return;
      this.iconLoadingTarget = 'create';
      const orderData = {
        user: this.user,
        message: this.message,
        shipping_method: this.shipping_method,
        payment_method: this.payment_method,
      };
      // 建立訂單
      await this.$store.dispatch('orders/createOrder', orderData);
      // 取得訂單
      await this.$store.dispatch('orders/getOrder', { orderId: this.orderId });
      // 清空購物車
      this.$store.commit('cart/CLEARCART');
      // 下個步驟
      this.stepFinsh.push(this.step);
      this.step = 'created';
      this.iconLoadingTarget = '';
    },
  },
  computed: {
    collapseCart() {
      const target = this.order.cart || this.cart;
      if (this.collapse) return target.slice(0, 2);
      return target;
    },
    shippingFee() {
      const target = this.order.shipping_method || this.shipping_method;
      if (target === '7-11') return 60;
      if (target === 'family') return 60;
      return 120;
    },
    ...mapState('cart', ['cart', 'total', 'final_total']),
    ...mapState(['skeletonTarget']),
    ...mapState('orders', ['order', 'orderId']),
  },
  filters: {
    translate(value) {
      if (value === '7-11') return '7-11 純取貨';
      if (value === 'family') return '全家純取貨';
      if (value === 't-cat') return '黑貓宅急便';
      if (value === 'atm') return 'ATM 轉帳';
      if (value === 'credit_card') return '信用卡一次付清';
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/checkout-detail.scss';
</style>
