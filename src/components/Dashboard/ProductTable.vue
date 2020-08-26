<template>
  <div class="product-table">
    <div class="p-4">
      <ControlPanel />
    </div>
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">共 2 樣商品</p>
      <button class="btn btn--primary px-3 py-1">
        <p>
          <span class="mr-1"><font-awesome-icon :icon="['fas', 'plus']"/></span>新增商品
        </p>
      </button>
    </div>
    <div class="p-4">
      <!-- table (head, body) -->
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr class="head">
              <th style="min-width:40px" data-sort="false">
                <input type="checkbox" class="checkbox m-0" />
              </th>
              <th style="min-width:260px" data-sort="false">商品名稱</th>
              <th style="min-width:95px" @click="sortToggle('oPrice')">
                <div class="d-flex align-items-center">
                  <p>原價</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'oPrice',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'oPrice',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:95px" @click="sortToggle('price')">
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
              <th style="min-width:95px" @click="sortToggle('stock')">
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
              <th style="min-width:95px" @click="sortToggle('sales')">
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
              <th style="min-width:90px" data-sort="false">商品狀態</th>
              <th style="min-width:90px" class="text-center" data-sort="false">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 1" :key="index">
              <td>
                <input type="checkbox" class="checkbox m-0" />
              </td>
              <td class="product">
                <div class="product__img"></div>
                <div class="ml-3">
                  <p class="product__title mb-1">
                    ANIBIO 德國家醫寵物保健系統 -Darm-aktiv 整腸保健粉
                  </p>
                  <span class="product__category">寵物戶外用品</span>
                </div>
              </td>
              <td>$2,000</td>
              <td>$1,000</td>
              <td>26</td>
              <td>10</td>
              <td>上架</td>
              <td class="text-center">
                <span class="icon"><font-awesome-icon :icon="['far', 'edit']"/></span>
                <span class="icon ml-3"><font-awesome-icon :icon="['far', 'trash-alt']"/></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- table (tfoot) -->
      <div class="tfoot d-flex align-items-center justify-content-end p-3">
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <div class="ml-3">
          <Pagination />
        </div>
      </div>
    </div>
    <!-- action -->
    <div class="p-4 pt-5">
      <div class="d-flex align-items-center text-secondary">
        <div class="d-flex align-items-center ml-2">
          <input type="checkbox" class="checkbox m-0" id="selectAll" />
          <label for="selectAll" class="ml-3">選擇本頁全部商品</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p>已選擇 1 個商品</p>
          <button class="btn btn--danger px-3 py-1 mx-3">刪除</button>
          <button class="btn btn--transparent px-3 py-1">下架</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanel from '@/components/Dashboard/ControlPanel.vue';
import Dropdown from '@/components/common/Dropdown.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    ControlPanel,
    Dropdown,
    Pagination,
  },
  data() {
    return {
      row: 8,
      page: 1,
      sortTarget: 'oPrice',
      sortMode: 'down',
      selectTarget: [],
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
    },
    pageToggle(page) {
      this.page = page;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-table.scss';
</style>
