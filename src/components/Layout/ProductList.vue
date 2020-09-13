<template>
  <div class="product-list text-secondary">
    <!-- product panel -->
    <div class="p-3 pb-2">
      <ProductPanel @callSortToggle="sortToggle" />
    </div>
    <!-- product list -->
    <div class="p-3 pt-0">
      <ul class="row-sm">
        <li class="col-md-3 px-2 mt-4" v-for="index in 12" :key="index">
          <ProductCard />
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
import ProductCard from '@/components/Layout/ProductCard.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    ProductPanel,
    ProductCard,
    Pagination,
  },
  data() {
    return {
      row: 12, // use with the dropdown component
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
