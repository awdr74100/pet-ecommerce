<template>
  <div class="checkout-form">
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
                  <p class="cursor-pointer text-center">
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
          <!-- write step -->
          <template v-if="true">
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
                    <input type="radio" name="transport" class="radio m-0" id="7-11" checked />
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
                    <input type="radio" name="transport" class="radio m-0" id="family" />
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
                    <input type="radio" name="transport" class="radio m-0" id="t-cat" />
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
                    <input type="radio" name="pay" class="radio m-0" id="atm" checked />
                    <label for="atm" class="form__label pl-3">
                      <div class="d-flex align-items-center">
                        <span class="d-block mr-2">
                          <font-awesome-icon :icon="['far', 'money-bill-alt']" size="lg" />
                        </span>
                        <p>ATM 轉帳</p>
                      </div>
                    </label>
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <input type="radio" name="pay" class="radio m-0" id="credit-card" />
                    <label for="credit-card" class="form__label pl-3">
                      <div class="d-flex align-items-center">
                        <span class="d-block mr-2">
                          <font-awesome-icon :icon="['fas', 'money-check']" size="lg" />
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
            <form class="form ml-3">
              <div class="row">
                <div class="col-md-6">
                  <label for="name" class="form__label d-block mb-1 mt-3">姓名*</label>
                  <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="請輸入" />
                    <small class="form__error" v-if="false">此欄位不可空白</small>
                  </div>
                  <label for="tel" class="form__label d-block mb-1">連絡電話*</label>
                  <div class="form__group">
                    <input type="tel" class="form__input" id="tel" placeholder="請輸入" />
                    <small class="form__error" v-if="false">此欄位不可空白</small>
                  </div>
                  <label for="email" class="form__label d-block mb-1">電子郵件*</label>
                  <div class="form__group">
                    <input type="email" class="form__input" id="email" placeholder="請輸入" />
                    <small class="form__error" v-if="false">此欄位不可空白</small>
                  </div>
                  <label for="address" class="form__label d-block mb-1">收件地址*</label>
                  <div class="form__group">
                    <input type="text" class="form__input" id="address" placeholder="請輸入" />
                    <small class="form__error" v-if="false">此欄位不可空白</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="remarks" class="form__label d-block mb-1 mt-md-3 mt-0">備註</label>
                  <textarea class="form__textarea" cols="30" rows="6" id="remarks"></textarea>
                </div>
              </div>
            </form>
          </template>
          <!-- created step -->
          <template v-if="true">
            <div class="window text-secondary mt-md-0 mt-5">
              <h2 class="bg-primary window__header text-white p-3">結帳資訊</h2>
              <div class="p-3 window__body">
                <div class="row">
                  <div class="col-md-7">
                    <div class="d-flex">
                      <p class="text-gray white-nowrap">姓名：</p>
                      <span class="ml-2">藍奕濡</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">連絡電話：</p>
                      <span class="ml-2">0972791303</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">電子郵件：</p>
                      <span class="ml-2">a78945612385238@gmail.com</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">收件地址：</p>
                      <span class="ml-2">台中市大里區東南路162巷8號12樓</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">留言：</p>
                      <span class="ml-2">請用紙箱將其包裝，謝謝請用紙箱將其包裝</span>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="d-flex mt-md-0 mt-3">
                      <p class="text-gray white-nowrap">運送方式：</p>
                      <span class="ml-2">7-11 純取貨</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">付款方式：</p>
                      <span class="ml-2">ATM 轉帳</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="d-flex mt-3 pt-3 border-top">
                      <p class="text-gray white-nowrap">訂單建立時間：</p>
                      <span class="ml-2">2020/09/17 13:22:35</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">訂單編號：</p>
                      <span class="ml-2">-MHMZ6o6Q7uA_S1MuxhO</span>
                    </div>
                    <div class="d-flex mt-3">
                      <p class="text-gray white-nowrap">付款狀態：</p>
                      <span class="ml-2 text-danger">尚未付款</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="window text-secondary mt-5">
              <h2 class="bg-primary window__header text-white p-3">ATM 轉帳</h2>
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
                <span class="ml-auto">$1,300</span>
              </div>
              <div class="d-flex align-items-center mt-3">
                <p class="text-gray white-nowrap">運費</p>
                <span class="ml-auto">$90</span>
              </div>
              <div class="d-flex align-items-center mt-3">
                <p class="text-gray white-nowrap">總計</p>
                <span class="ml-auto text-primary">$1,390</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- send order -->
    <div class="mb-3" v-if="step === 'write'">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <button class="btn btn--primary btn--xl" @click.prevent="nextStep('created')">
          送出訂單
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
    };
  },
  methods: {
    nextStep(step) {
      this.stepFinsh.push(this.step);
      this.step = step;
    },
  },
  computed: {
    collapseCart() {
      if (this.collapse) return this.cart.slice(0, 2);
      return this.cart;
    },
    ...mapState('cart', ['cart', 'total', 'final_total']),
    ...mapState(['skeletonTarget']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/checkout-form.scss';
</style>
