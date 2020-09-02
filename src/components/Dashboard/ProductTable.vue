<template>
  <div class="product-table">
    <!-- product panel -->
    <div class="p-4">
      <ProductPanel @callSearch="search" @callSearchReset="searchReset" />
    </div>
    <!-- section -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 商品</p>
      <button class="btn btn--primary btn--lg" @click.prevent="openModal('ProductAddOrEdit')">
        <p>
          <span class="mr-1"><font-awesome-icon :icon="['fas', 'plus']"/></span>新增商品
        </p>
      </button>
    </div>
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
              <th style="min-width:260px;width:100%">商品名稱</th>
              <th style="min-width:95px" data-sort="true" @click="sortToggle('origin_price')">
                <div class="d-flex align-items-center">
                  <p>原價</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'origin_price',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'origin_price',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:95px" data-sort="true" @click="sortToggle('price')">
                <div class="d-flex align-items-center">
                  <p>售價</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'price',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'price',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:95px" data-sort="true" @click="sortToggle('stock')">
                <div class="d-flex align-items-center">
                  <p>庫存量</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'stock',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'stock',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:95px" data-sort="true" @click="sortToggle('sales')">
                <div class="d-flex align-items-center">
                  <p>已售出</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'sales',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'sales',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:90px">商品狀態</th>
              <th style="min-width:90px" class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 3" :key="index">
              <td>
                <input type="checkbox" class="checkbox m-0" />
              </td>
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="ml-3">
                    <p class="product__title mb-1">
                      ANIBIO 德國家醫寵物保健系統 -Darm-aktiv 整腸保健粉
                    </p>
                    <span class="product__category">寵物戶外用品</span>
                  </div>
                </div>
              </td>
              <td>$2,000</td>
              <td>$1,000</td>
              <td>26</td>
              <td>10</td>
              <td>上架</td>
              <td class="text-center">
                <span class="icon">
                  <font-awesome-icon :icon="['far', 'edit']" />
                </span>
                <span class="icon ml-3">
                  <font-awesome-icon :icon="['far', 'trash-alt']" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- (tfoot) -->
      <div class="tfoot d-flex align-items-center justify-content-end px-3 py-2">
        <!-- dropdown component -->
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <!-- pagination component -->
        <div class="ml-3">
          <Pagination :length="33" :row="row" @callPageToggle="pageToggle" />
        </div>
      </div>
    </div>
    <!-- batch action -->
    <div class="p-4 pt-5">
      <div class="d-flex align-items-center text-secondary">
        <div class="align-items-center ml-2 d-none d-md-flex">
          <input type="checkbox" class="checkbox m-0" id="selectAll" />
          <label for="selectAll" class="ml-3 cursor-pointer">選擇本頁全部商品</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p>已選擇 1 個商品</p>
          <button class="btn btn--danger btn--md mx-3">刪除</button>
          <button class="btn btn--transparent btn--md">下架</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPanel from '@/components/Dashboard/ProductPanel.vue';
import Dropdown from '@/components/common/Dropdown.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    ProductPanel,
    Dropdown,
    Pagination,
  },
  data() {
    return {
      row: 12,
      page: 1,
      sortMode: 'down',
      sortTarget: '',
      searchTarget: '',
      searchTargetValue: '',
      searchCategory: '',
      searchStockRange: [],
      searchSalesRange: [],
    };
  },
  methods: {
    openModal(modal) {
      this.$store.commit('modal/OPENMODAL', { modal });
    },
    sortToggle(target) {
      if (this.sortTarget === target) {
        this.sortMode = this.sortMode === 'down' ? 'up' : 'down';
      } else {
        this.sortMode = 'down';
        this.sortTarget = target;
      }
    },
    rowToggle(row) {
      this.row = row;
      this.page = 1;
    },
    pageToggle(page) {
      this.page = page;
    },
    search(input) {
      this.searchTarget = input.searchTarget;
      this.searchTargetValue = input.searchTargetValue;
      this.searchCategory = input.searchCategory;
      this.searchStockRange = [...input.searchStockRange]; // fix call by reference
      this.searchSalesRange = [...input.searchSalesRange]; // fix call by reference
    },
    searchReset() {
      this.searchTarget = '';
      this.searchTargetValue = '';
      this.searchCategory = '';
      this.searchStockRange = [];
      this.searchSalesRange = [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-table.scss';
</style>
