<template>
  <div class="product-list">
    <!-- product panel -->
    <div class="p-3 pb-2">
      <ProductPanel @callSortToggle="sortToggle" />
    </div>
    <!-- product list -->
    <div class="p-3 pt-0">
      <ul class="row-sm">
        <li class="col-md-3 px-2 mt-4" v-for="index in 12" :key="index">
          <div class="product text-secondary p-3">
            <div class="product__img"></div>
            <p class="product__title mt-3">
              海洋之星FISH4CATS 鮭魚無麩質低敏配方400g、全貓ergergegergergerg
            </p>
            <div class="product__category text-gray d-flex align-items-center mt-2">
              <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
              <p class="ml-1">品牌貓飼料</p>
            </div>
            <div class="d-flex align-items-end justify-content-end mt-2">
              <p class="product__origin-price">$1,180</p>
              <p class="product__price text-primary ml-2"><span class="dollar">$</span>1,160</p>
            </div>
            <!-- <button class="btn btn--primary mt-2">加入購物車</button> -->
          </div>
        </li>
      </ul>
    </div>
    <!-- helpers -->
    <div class="p-3 mt-3 d-flex align-items-center justify-content-center">
      <Pagination :length="13" :row="row" @callPageToggle="pageToggle" />
    </div>
  </div>
</template>

<script>
import ProductPanel from '@/components/Layout/ProductPanel.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    ProductPanel,
    Pagination,
  },
  data() {
    return {
      row: 12, // can import dropdown component
      page: 1,
      sortTarget: 'created_at',
      sortMode: 'down',
    };
  },
  methods: {
    pageToggle(page) {
      this.page = page;
    },
    sortToggle({ sortTarget, sortMode }) {
      this.sortTarget = sortTarget;
      this.sortMode = sortMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-list.scss';
</style>
