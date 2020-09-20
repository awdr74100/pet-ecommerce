<template>
  <div class="checkout-detail">
    <!-- stepper -->
    <div class="p-3 mt-3">
      <Stepper :step="step" :stepFinsh="stepFinsh" />
    </div>
    <!-- table -->
    <div class="p-3">
      <CartTable :readonly="true" />
    </div>
    <!-- steps -->
    <div class="p-3">
      <div class="row">
        <div class="col-md-8 order-md-1 order-2 text-secondary">
          <!-- write -->
          <template v-if="step === 'write'">
            <div class="row">
              <div class="col-md-6">
                <!-- radio (shipping_method) -->
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
                <!-- radio (payment_method) -->
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
          <!-- created -->
          <template v-if="step !== 'write'">
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
                      <span class="ml-2 text-warning" v-if="order.status === 'unpaid'"
                        >尚未付款</span
                      >
                      <span class="ml-2 text-primary" v-if="order.status === 'toship'"
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
            <div class="window text-secondary mt-5" v-if="step === 'created'">
              <h2 class="bg-primary window__header text-white p-3">
                {{ order.payment_method | translate }}
              </h2>
              <div class="p-3 window__body">
                <div class="d-flex align-items-center justify-content-center">
                  <button
                    class="btn btn--primary px-5 d-flex align-items-center"
                    @click.prevent="payment"
                  >
                    <p>確認並付款</p>
                    <span class="ml-2" v-if="iconLoadingTarget === 'payment'">
                      <font-awesome-icon :icon="['fas', 'spinner']" spin />
                    </span>
                  </button>
                  <button
                    class="btn btn--danger px-5 ml-3 d-flex align-items-center"
                    @click.prevent="cancelOrder"
                  >
                    <p>取消訂單</p>
                    <span class="ml-2" v-if="iconLoadingTarget === 'cancel'">
                      <font-awesome-icon :icon="['fas', 'spinner']" spin />
                    </span>
                  </button>
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
    <!-- next step button -->
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
import CartTable from '@/components/Layout/CartTable.vue';

export default {
  components: {
    Stepper,
    CartTable,
  },
  data() {
    return {
      step: 'write',
      stepFinsh: [],
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
      // 重新取得訂單
      await this.$store.dispatch('orders/getOrder', { orderId: this.orderId });
      // 清空客戶端購物車
      this.$store.commit('cart/CLEARCART');
      // 下個步驟
      this.stepFinsh.push(this.step);
      this.step = 'created';
      this.iconLoadingTarget = '';
    },
    async cancelOrder() {
      this.iconLoadingTarget = 'cancel';
      // 取消訂單
      await this.$store.dispatch('orders/cancelOrder', { orderId: this.orderId });
      // 重新取得訂單
      await this.$store.dispatch('orders/getOrder', { orderId: this.orderId });
      // 下個步驟
      this.stepFinsh.push(this.step);
      this.step = 'cancelled';
      this.iconLoadingTarget = '';
    },
    async payment() {
      this.iconLoadingTarget = 'payment';
      // 付款
      await this.$store.dispatch('payment/payment', { orderId: this.orderId });
      // 重新取得訂單
      await this.$store.dispatch('orders/getOrder', { orderId: this.orderId });
      // 下個步驟
      this.stepFinsh.push(this.step);
      this.step = 'paid';
      this.iconLoadingTarget = '';
      // 模擬系統處理中
      setTimeout(() => {
        this.stepFinsh.push(this.step);
        this.step = 'toship';
      }, 5000);
    },
  },
  computed: {
    shippingFee() {
      const target = this.order.shipping_method || this.shipping_method;
      if (target === '7-11') return 60;
      if (target === 'family') return 60;
      return 120;
    },
    ...mapState('cart', ['total', 'final_total']),
    ...mapState('orders', ['order', 'orderId']),
    ...mapState(['skeletonTarget']),
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
