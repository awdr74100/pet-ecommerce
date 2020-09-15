<template>
  <div class="cart-table w-100 h-100">
    <div
      class="table-responsive"
      :class="{ 'table-responsive--collapse': collapse && !collapseShow }"
    >
      <table class="table text-secondary">
        <thead class="thead">
          <tr>
            <th style="min-width:40px" v-if="edit">
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
          <tr v-for="index in cart" :key="index">
            <td v-if="edit">
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
                <button class="btn cart-table__btn left" :disabled="!edit">
                  <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
                </button>
                <input type="number" class="cart-table__input" min="0" :disabled="!edit" />
                <button class="btn cart-table__btn right" :disabled="!edit">
                  <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
                </button>
              </div>
              <span class="stock d-block mt-1 text-primary">剩下 0 個商品</span>
            </td>
            <td>
              <span class="mr-2 line-through">$1,600</span>
              <span class="text-primary">$1,400</span>
            </td>
            <td class="text-center">
              <p class="text-danger cursor-pointer" v-if="edit">刪除</p>
              <p class="text-secondary" v-else>無</p>
            </td>
          </tr>
          <tr v-if="collapse">
            <td class="text-center" colspan="5">
              <button
                class="btn btn--primary btn--xl"
                @click.prevent="collapseShow = !collapseShow"
              >
                <div class="d-flex align-items-center">
                  <p v-if="!collapseShow">查看其餘 6 件商品</p>
                  <p v-if="collapseShow">摺疊購物車</p>
                  <span class="icon ml-2" :class="{ 'icon--rotate': collapseShow }">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                  </span>
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    collapse: Boolean,
  },
  data() {
    return {
      collapseShow: false,
    };
  },
  computed: {
    cart() {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      if (this.collapse && !this.collapseShow) return arr.slice(0, 2);
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/cart-table.scss';
</style>
