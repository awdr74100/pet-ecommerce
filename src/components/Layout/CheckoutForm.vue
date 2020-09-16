<template>
  <div class="checkout-form">
    <!-- stepper -->
    <div class="p-3 mt-3">
      <Stepper :step="step" :steps="steps" />
    </div>
    <!-- table -->
    <div class="p-3">
      <CartTable :edit="false" :collapse="true" />
    </div>
    <!-- form / info -->
    <div class="p-3">
      <div class="row">
        <!-- form -->
        <div class="col-md-8 order-md-1 order-2 text-secondary">
          <!-- transport -->
          <div class="d-flex align-items-center pb-3 title mt-md-0 mt-5">
            <span class="icon mr-2"><font-awesome-icon :icon="['fas', 'shipping-fast']"/></span>
            <p>選擇運送方式</p>
          </div>
          <form class="form ml-3">
            <div class="d-flex flex-column mt-3">
              <div class="d-flex align-items-center">
                <input type="radio" name="transport" class="radio m-0" id="7-11" checked />
                <label for="7-11" class="form__label min-width ml-3">7-11 純取貨</label>
                <span class="form__price ml-6 pl-6">$90</span>
              </div>
              <p class="form__message text-gray mt-2">預計到貨時間9月15日 - 9月17日</p>
            </div>
            <div class="d-flex flex-column mt-3">
              <div class="d-flex align-items-center">
                <input type="radio" name="transport" class="radio m-0" id="family" />
                <label for="family" class="form__label min-width ml-3">全家純取貨</label>
                <span class="form__price ml-6 pl-6">$90</span>
              </div>
              <p class="form__message text-gray mt-2">預計到貨時間9月15日 - 9月17日</p>
            </div>
            <div class="d-flex flex-column mt-3">
              <div class="d-flex align-items-center">
                <input type="radio" name="transport" class="radio m-0" id="t-cat" />
                <label for="t-cat" class="form__label min-width ml-3">黑貓宅急便</label>
                <span class="form__price ml-6 pl-6">$90</span>
              </div>
              <p class="form__message text-gray mt-2">預計到貨時間9月15日 - 9月17日</p>
            </div>
          </form>
          <!-- pay -->
          <div class="d-flex align-items-center pb-3 title mt-5">
            <span class="icon mr-2"><font-awesome-icon :icon="['fas', 'money-bill-wave']"/></span>
            <p>選擇付款方式</p>
          </div>
          <form class="form ml-3">
            <div class="d-flex align-items-center mt-3">
              <input type="radio" name="pay" class="radio m-0" id="atm" checked />
              <label for="atm" class="form__label ml-3">
                <p>
                  <span class="icon mr-2">
                    <font-awesome-icon :icon="['far', 'money-bill-alt']"/></span
                  >ATM 轉帳
                </p>
              </label>
            </div>
            <div class="d-flex align-items-center mt-3">
              <input type="radio" name="pay" class="radio m-0" id="credit-card" />
              <label for="credit-card" class="form__label ml-3">
                <p>
                  <span class="icon mr-2"><font-awesome-icon :icon="['fas', 'money-check']"/></span
                  >信用卡一次付清
                </p>
              </label>
            </div>
          </form>
          <!-- write -->
          <div class="d-flex align-items-center pb-3 title mt-5">
            <span class="icon mr-2"><font-awesome-icon :icon="['fas', 'user-edit']"/></span>
            <p>填寫收件人資訊</p>
          </div>
          <form class="form ml-3">
            <div class="row">
              <div class="col-md-6">
                <label for="name" class="form__label mb-1 mt-3">姓名*</label>
                <div class="form__group">
                  <input type="text" class="form__input" id="name" placeholder="請輸入" />
                  <!-- <small class="form__error">此欄位不可空白</small> -->
                </div>
                <label for="tel" class="form__label mb-1">連絡電話*</label>
                <div class="form__group">
                  <input type="tel" class="form__input" id="tel" placeholder="請輸入" />
                  <!-- <small class="form__error">此欄位不可空白</small> -->
                </div>
                <label for="email" class="form__label mb-1">電子郵件*</label>
                <div class="form__group">
                  <input type="email" class="form__input" id="email" placeholder="請輸入" />
                  <!-- <small class="form__error">此欄位不可空白</small> -->
                </div>
                <label for="address" class="form__label mb-1">收件地址*</label>
                <div class="form__group">
                  <input type="text" class="form__input" id="address" placeholder="請輸入" />
                  <!-- <small class="form__error">此欄位不可空白</small> -->
                </div>
              </div>
              <div class="col-md-6">
                <label for="remarks" class="form__label mb-1 mt-md-3 mt-0">備註</label>
                <textarea class="form__textarea" cols="30" rows="6" id="remarks"></textarea>
              </div>
            </div>
          </form>
        </div>
        <!-- info -->
        <div class="col-md-4 order-md-2 order-1">
          <div class="info text-secondary p-3">
            <div class="d-flex align-items-end info__total">
              <p>購買總金額</p>
              <span class="ml-auto">$1,300</span>
            </div>
            <div class="d-flex align-items-end mt-3 info__shipping-fee">
              <p>運費</p>
              <span class="ml-auto">+$60</span>
            </div>
            <div class="d-flex align-items-end mt-3 info__final-total">
              <p>總計</p>
              <span class="ml-auto">$1,360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- action button -->
    <div class="p-3 pt-1">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <button class="btn btn--primary btn--xl" @click="nextStep('created')">送出訂單</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      steps: [],
    };
  },
  methods: {
    nextStep(step) {
      this.steps.push(this.step);
      this.step = step;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/checkout-form.scss';
</style>
