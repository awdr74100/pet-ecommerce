<template>
  <div class="product-list text-secondary">
    <!-- panel -->
    <div class="p-3 pb-0">
      <ProductPanel @callSortToggle="sortToggle" />
    </div>
    <!-- list -->
    <div class="p-3 pt-0">
      <ul class="row-sm">
        <!-- 骨架屏 -->
        <template v-if="skeletonTarget === 'products'">
          <li class="col-md-3 px-2 mt-4" v-for="index in row" :key="index">
            <FakeProductCard />
          </li>
        </template>
        <!-- 實體 -->
        <template v-else-if="filterProducts.length > 0">
          <li class="col-md-3 px-2 mt-4" v-for="(item, index) in sortAndSliceProducts" :key="index">
            <ProductCard :item="item" />
          </li>
        </template>
        <!-- 未找到商品 -->
        <template v-else>
          <li class="col-md-12 px-2 mt-4">
            <div class="d-flex flex-column align-items-center justify-content-center py-6 my-6">
              <span class="text-gray">
                <font-awesome-icon :icon="['fas', 'search']" size="3x" />
              </span>
              <p class="mt-4">未找到商品</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <!-- footer -->
    <div
      class="p-2 my-3 d-flex align-items-center justify-content-center"
      v-if="filterProducts.length > 0"
    >
      <Pagination
        :length="filterProducts.length"
        :row="row"
        :forceResetKey="forceResetKey"
        @callPageToggle="pageToggle"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ProductPanel from '@/components/Layout/ProductPanel.vue';
import ProductCard from '@/components/Layout/ProductCard.vue';
import Pagination from '@/components/common/Pagination.vue';
import FakeProductCard from '@/components/Layout/FakeProductCard.vue';

export default {
  components: {
    ProductPanel,
    ProductCard,
    Pagination,
    FakeProductCard,
  },
  data() {
    return {
      row: 12, // use with the dropdown component
      page: 1,
      sortMode: 'down',
      sortTarget: 'created_at',
      forceResetKey: Date.now(),
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
    paginationReset() {
      this.forceResetKey = Date.now();
      this.page = 1;
    },
  },
  computed: {
    filterProducts() {
      const vm = this;
      vm.paginationReset(); // reset pagination page
      const { category } = vm.$route.params;
      const { title } = vm.$route.query;
      const products = [...vm.products]; // fix call by reference
      const filterProducts = products.filter((item) => {
        if (category === '優惠商品') return item.origin_price !== item.price;
        if (category === '全部商品') return item;
        return item.category === category;
      });
      if (title) {
        return filterProducts.filter((item) => item.title.toLowerCase().match(title.toLowerCase()));
      }
      return filterProducts;
    },
    sortAndSliceProducts() {
      const vm = this;
      const products = [...vm.filterProducts]; // fix call by reference
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      const [startItem, endItem] = [(vm.page - 1) * vm.row, vm.page * vm.row];
      return products
        .sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB))
        .slice(startItem, endItem);
    },
    ...mapState('products', ['products']),
    ...mapState(['skeletonTarget']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-list.scss';
</style>
