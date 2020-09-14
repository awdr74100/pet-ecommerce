<template>
  <div class="cart-table">
    <!-- table -->
    <div class="p-4">
      <!-- (head, body) -->
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:40px">
                <input type="checkbox" class="checkbox m-0" />
              </th>
              <th style="min-width:400px" class="w-100">商品</th>
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
