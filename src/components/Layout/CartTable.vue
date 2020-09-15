<template>
  <div class="cart-table">
    <!-- table -->
    <div class="p-3">
      <!-- (head, body) -->
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:40px">
                <input type="checkbox" class="checkbox m-0" />
              </th>
              <th style="min-width:320px" class="w-100">商品</th>
              <th style="min-width:140px">單價</th>
              <th style="min-width:200px">數量</th>
              <th style="min-width:140px">總計</th>
              <th style="min-width:95px" class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 6" :key="index">
              <td>
                <input type="checkbox" class="checkbox m-0" />
              </td>
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="product__content text-gray ml-3 mr-2">
                    <p class="product__title">
                      Country Naturals格然斯鄉村時光 雞肉鯡魚2.7kg、成幼貓
                    </p>
                    <p class="mt-1">品牌貓飼料</p>
                    <div class="d-flex align-items-center mt-auto">
                      <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                      <p class="ml-1">3.6 折</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>$1,600</td>
              <td>
                <div class="d-flex align-items-center text-secondary">
                  <button class="btn cart-table__btn left">
                    <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                  </button>
                  <input type="number" class="cart-table__input" min="0" v-model.number="qty" />
                  <button class="btn cart-table__btn right">
                    <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
                  </button>
                </div>
              </td>
              <td>
                <span class="mr-2 line-through">$1,600</span>
                <span class="text-primary">$1,400</span>
              </td>
              <td class="text-center">
                <p class="text-danger cursor-pointer">刪除</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- footer -->
    <div class="footer mt-3">
      <div class="d-flex align-items-center justify-content-end py-3">
        <p class="footer__message text-info d-md-inline d-none mr-4">
          慶祝開幕，輸入折扣碼「sdf9fwef7」，即享有全館商品9折優惠
        </p>
        <div class="d-flex align-items-center footer__group">
          <input type="text" class="footer__input" placeholder="輸入優惠卷代碼" />
          <button class="btn btn--secondary footer__btn">確定</button>
        </div>
      </div>
      <div class="footer__hr"></div>
      <div class="d-flex align-items-center justify-content-end py-3">
        <div class="d-flex flex-column align-items-end">
          <div class="d-flex align-items-center text-secondary">
            <span class="d-md-inline d-none">購買總金額 (2 件商品)：</span>
            <span class="d-md-none d-inline">2 個商品：</span>
            <span class="footer__total mr-2">$1,300</span>
            <span class="footer__f-total text-primary">$1,100</span>
          </div>
          <span class="text-warning footer__message mt-1">已將優惠卷套用至購物車</span>
        </div>
        <button class="btn btn--primary py-md-2 px-md-5 p-2 ml-3">
          <p><span class="d-md-inline d-none">前往</span>結帳</p>
        </button>
      </div>
      <template v-if="true">
        <div class="footer__hr"></div>
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
export default {
  data() {
    return {
      qty: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/cart-table.scss';
</style>
