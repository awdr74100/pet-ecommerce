<template>
  <div class="product-list text-secondary">
    <!-- product panel -->
    <div class="p-3 pb-2">
      <ProductPanel @callSortToggle="sortToggle" />
    </div>
    <!-- product list -->
    <div class="p-3 pt-0">
      <ul class="row-sm">
        <!-- 骨架屏 -->
        <template v-if="skeletonTarget === 'products'">
          <li class="col-md-3 px-2 mt-4" v-for="index in row" :key="index">
            <FakeProductCard />
          </li>
        </template>
        <!-- 實體 -->
        <template v-else>
          <li class="col-md-3 px-2 mt-4" v-for="(item, index) in sortAndSliceProducts" :key="index">
            <ProductCard :item="item" />
          </li>
        </template>
      </ul>
    </div>
    <!-- helpers -->
    <div class="p-3 mt-3 d-flex align-items-center justify-content-center">
      <Pagination
        :length="filterProducts.length"
        :row="row"
        :resetKey="resetKey"
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
      sortTarget: 'created_at',
      sortMode: 'down',
      resetKey: Date.now(),
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
      this.resetKey = Date.now();
      this.page = 1;
    },
  },
  computed: {
    filterProducts() {
      const vm = this;
      vm.paginationReset(); // reset pagination page
      const { category } = vm.$route.params; // fix call by reference
      const products = [...vm.products];
      return products.filter((item) => {
        if (category === '品牌貓飼料') return item.category === '品牌貓飼料';
        if (category === '品牌狗飼料') return item.category === '品牌狗飼料';
        if (category === '寵物營養品') return item.category === '寵物營養品';
        if (category === '貓砂與貓砂盆') return item.category === '貓砂與貓砂盆';
        if (category === '寵物戶外用品') return item.category === '寵物戶外用品';
        if (category === '優惠商品') return item.origin_price !== item.price;
        return item;
      });
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
  created() {
    this.$store.dispatch('products/getProducts', { role: 'guest' });
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-list.scss';
</style>
