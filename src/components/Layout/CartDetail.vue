<template>
  <div class="cart-detail">
    <!-- table -->
    <div class="p-3">
      <CartTable :edit="true" :collapse="false" />
    </div>
    <!-- info -->
    <div class="info mt-3">
      <div class="d-flex align-items-center justify-content-end py-3">
        <p class="info__message text-info d-md-inline d-none mr-4">
          慶祝開幕，輸入折扣碼「sdf9fwef7」，即享有全館商品9折優惠
        </p>
        <div class="d-flex align-items-center info__group">
          <input type="text" class="info__input" placeholder="輸入優惠卷代碼" />
          <button class="btn btn--secondary info__btn">確定</button>
        </div>
      </div>
      <div class="info__hr"></div>
      <div class="d-flex align-items-center justify-content-end py-3">
        <div class="d-flex flex-column align-items-end">
          <div class="d-flex align-items-center text-secondary">
            <span class="d-md-inline d-none">購買總金額 (2 件商品)：</span>
            <span class="d-md-none d-inline">2 個商品：</span>
            <span class="info__total mr-2">$1,300</span>
            <span class="info__f-total text-primary">$1,100</span>
          </div>
          <span class="text-warning info__message mt-1">已將優惠卷套用至購物車</span>
        </div>
        <button
          class="btn btn--primary py-md-2 px-md-5 p-2 ml-3"
          @click.prevent="$router.push({ path: '/checkout' })"
        >
          <p><span class="d-md-inline d-none">前往</span>結帳</p>
        </button>
      </div>
      <template v-if="true">
        <div class="info__hr"></div>
        <div class="d-flex align-items-center text-secondary py-3">
          <div class="d-flex align-items-center ml-3">
            <input type="checkbox" class="checkbox m-0" id="selectAll" />
            <label for="selectAll" class="pl-2 cursor-pointer">全選</label>
          </div>
          <div class="d-flex align-items-center ml-auto">
            <p class="d-md-inline d-none">已選擇 3 件商品</p>
            <button class="btn btn--transparent btn--sm ml-3">清空</button>
            <button class="btn btn--primary btn--sm ml-3">刪除</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CartTable from '@/components/Layout/CartTable.vue';

export default {
  components: {
    CartTable,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/cart-detail.scss';
</style>
