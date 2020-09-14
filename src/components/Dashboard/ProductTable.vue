<template>
  <div class="product-table w-100">
    <!-- product panel -->
    <div class="p-4">
      <ProductPanel @callSearch="search" @callSearchReset="searchReset" />
    </div>
    <!-- section -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">{{ filterProducts.length }} 件商品</p>
      <button
        class="btn btn--primary btn--lg"
        @click.prevent="openModal('add-edit-product-modal', undefined, undefined, undefined)"
      >
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
                <input
                  type="checkbox"
                  class="checkbox m-0"
                  v-model="selectAll"
                  :disabled="sortAndSliceProducts.length === 0"
                />
              </th>
              <th style="min-width:260px" class="w-100">商品名稱</th>
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
            <template v-if="skeletonLoading">
              <tr v-for="index in row" :key="index">
                <td><PuSkeleton height="16px" /></td>
                <td class="d-flex align-items-center">
                  <div style="flex: 0 0 56px"><PuSkeleton height="56px" /></div>
                  <div class="ml-3 w-100">
                    <p class="mb-1"><PuSkeleton /></p>
                    <p style="max-width:160px"><PuSkeleton /></p>
                  </div>
                </td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="(item, index) in sortAndSliceProducts" :key="index">
                <td>
                  <input type="checkbox" class="checkbox m-0" :value="item" v-model="selected" />
                </td>
                <td>
                  <div class="product">
                    <div
                      class="product__img"
                      :style="{ 'background-image': `url('${item.imgUrl}')` }"
                    ></div>
                    <div class="product__overlay" v-if="!item.is_enabled">
                      <span class="text-white">
                        <font-awesome-icon :icon="['fas', 'lock']" size="lg" />
                      </span>
                    </div>
                    <div class="ml-3">
                      <p class="product__title mb-1">{{ item.title }}</p>
                      <span class="product__category">{{ item.category }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.sales }}</td>
                <td class="text-success" v-if="item.is_enabled">上架</td>
                <td class="text-danger" v-else>下架</td>
                <td class="text-center">
                  <span
                    class="icon"
                    @click.prevent="openModal('add-edit-product-modal', item, undefined, undefined)"
                  >
                    <font-awesome-icon :icon="['far', 'edit']" />
                  </span>
                  <span
                    class="icon ml-3"
                    @click.prevent="
                      openModal('delete-product-modal', undefined, [{ ...item }], undefined)
                    "
                  >
                    <font-awesome-icon :icon="['far', 'trash-alt']" />
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!-- (foot) - fix scroll problem -->
      <div class="tfoot d-flex align-items-center justify-content-end px-3 py-2">
        <!-- dropdown component -->
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <!-- pagination component -->
        <div class="ml-3">
          <Pagination :length="filterProducts.length" :row="row" @callPageToggle="pageToggle" />
        </div>
      </div>
    </div>
    <!-- batch action -->
    <div class="batch mt-3" v-if="showBatchAction">
      <div class="d-flex align-items-center text-secondary">
        <div class="align-items-center ml-3 d-none d-md-flex">
          <input type="checkbox" class="checkbox m-0" id="selectAll" v-model="selectAll" />
          <label for="selectAll" class="pl-3 cursor-pointer">選擇本頁全部商品</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p class="d-md-inline d-none">已選擇 {{ selected.length }} 件商品</p>
          <button
            class="btn btn--transparent btn--sm ml-3"
            @click.prevent="openModal('delete-product-modal', undefined, selected, undefined)"
          >
            刪除
          </button>
          <button
            class="btn btn--transparent btn--sm ml-3"
            v-if="showDisableButton"
            @click.prevent="openModal('change-status-product-modal', undefined, selected, false)"
          >
            下架
          </button>
          <button
            class="btn btn--primary btn--sm ml-3"
            v-if="showEnableButton"
            @click.prevent="openModal('change-status-product-modal', undefined, selected, true)"
          >
            上架
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
      selected: [],
    };
  },
  methods: {
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
    selectReset() {
      this.selected = [];
    },
    openModal(modal, cache = {}, caches = [], isEnabled) {
      const cachesFilter = [];
      if (isEnabled !== undefined) {
        cachesFilter[0] = isEnabled ? 'enable' : 'disable';
        cachesFilter[1] = caches.length;
        cachesFilter[2] = caches.filter((item) => isEnabled !== item.is_enabled);
        cachesFilter[3] = cachesFilter[1] - cachesFilter[2].length;
      }
      this.$store.commit('modal/OPENMODAL', {
        modal,
        cache,
        caches: cachesFilter.length > 0 ? cachesFilter : caches,
      });
    },
    ...mapActions('products', ['getProducts']),
  },
  computed: {
    selectAll: {
      get() {
        return this.sortAndSliceProducts.length > 0
          ? this.selected.length === this.sortAndSliceProducts.length
          : false;
      },
      set(value) {
        if (value) {
          this.selected = this.sortAndSliceProducts;
        } else {
          this.selected = [];
        }
      },
    },
    showBatchAction() {
      return this.selected.length > 0;
    },
    showEnableButton() {
      return this.selected.filter((item) => !item.is_enabled).length > 0;
    },
    showDisableButton() {
      return this.selected.filter((item) => item.is_enabled).length > 0;
    },
    filterProducts() {
      const vm = this;
      vm.selectReset(); // reset this.selected
      const { tab } = vm.$route.params;
      const products = [...vm.products]; // fix call by reference
      // prettier-ignore
      const needSearch = vm.searchTargetValue
        || vm.searchCategory
        || vm.searchStockRange.length > 0
        || vm.searchSalesRange.length > 0;
      const statusFilter = products.filter((item) => {
        if (tab === 'listed') return item.is_enabled;
        if (tab === 'soldout') return item.stock === 0;
        if (tab === 'unlisted') return !item.is_enabled;
        return item;
      });
      if (needSearch) {
        return statusFilter
          .filter((item) => {
            if (vm.searchTargetValue) {
              const [key, value] = [vm.searchTarget, vm.searchTargetValue];
              return item[key === '商品名稱' ? 'title' : 'id'].match(value);
            }
            return item;
          })
          .filter((item) => {
            if (vm.searchCategory) {
              return item.category.match(vm.searchCategory);
            }
            return item;
          })
          .filter((item) => {
            if (vm.searchStockRange.length > 0) {
              return item.stock >= vm.searchStockRange[0] && item.stock <= vm.searchStockRange[1];
            }
            return item;
          })
          .filter((item) => {
            if (vm.searchSalesRange.length > 0) {
              return item.sales >= vm.searchSalesRange[0] && item.sales <= vm.searchSalesRange[1];
            }
            return item;
          });
      }
      return statusFilter;
    },
    sortAndSliceProducts() {
      const vm = this;
      vm.selectReset(); // reset this.selected
      const products = [...vm.filterProducts]; /// fix call by reference
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      const [startItem, endItem] = [(vm.page - 1) * vm.row, vm.page * vm.row];
      if (vm.sortTarget) {
        return products
          .sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB))
          .slice(startItem, endItem);
      }
      return products.slice(startItem, endItem);
    },
    ...mapState('products', ['products']),
    ...mapState(['skeletonLoading']),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-table.scss';
</style>
