<template>
  <div class="product-panel text-secondary">
    <form @submit.prevent="search">
      <div class="row">
        <div class="col-md-6">
          <div class="product-panel__group">
            <div class="product-panel__dropdown pl-3" @click="dropdownToggle">
              <p>{{ searchTarget }}</p>
              <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
                <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
              </span>
              <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
                <li
                  class="list__item px-3 py-2"
                  :class="{ 'list__item--active': searchTarget === '商品名稱' }"
                >
                  商品名稱
                </li>
                <li
                  class="list__item px-3 py-2"
                  :class="{ 'list__item--active': searchTarget === '商品ID' }"
                >
                  商品ID
                </li>
              </ul>
              <span class="line"></span>
            </div>
            <input
              class="product-panel__input pl-max"
              type="text"
              placeholder="請輸入"
              v-model="searchTargetValue"
            />
          </div>
          <div class="product-panel__group mt-3">
            <label class="product-panel__label mr-3" for="searchProductStock">庫存數量</label>
            <input
              class="product-panel__input"
              type="number"
              min="0"
              id="searchProductStock"
              placeholder="請輸入"
              v-model.number="searchStockRange[0]"
            />
            <span class="product-panel__line mx-2"></span>
            <input
              class="product-panel__input"
              type="number"
              min="0"
              placeholder="請輸入"
              v-model.number="searchStockRange[1]"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="product-panel__group mt-md-0 mt-3">
            <label class="product-panel__label mr-3" for="searchProductCategory">類別</label>
            <input
              class="product-panel__input"
              type="text"
              id="searchProductCategory"
              placeholder="選擇分類"
              v-model="searchCategory"
            />
          </div>
          <div class="product-panel__group mt-3 pr-6">
            <label class="product-panel__label mr-3" for="searchProductSoldout">已售出</label>
            <input
              class="product-panel__input"
              type="number"
              min="0"
              id="searchProductSoldout"
              placeholder="請輸入"
              v-model.number="searchSalesRange[0]"
            />
            <span class="product-panel__line mx-2"></span>
            <input
              class="product-panel__input"
              type="number"
              min="0"
              placeholder="請輸入"
              v-model.number="searchSalesRange[1]"
            />
          </div>
        </div>
      </div>
      <div class="row no-gutters mt-4">
        <button type="submit" class="btn btn--primary btn--md" @click.prevent="search">搜尋</button>
        <button
          type="button"
          class="btn btn--transparent btn--md ml-3"
          @click.prevent="searchReset"
        >
          重設
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      searchTarget: '商品名稱',
      searchTargetValue: '',
      searchCategory: '',
      searchStockRange: [],
      searchSalesRange: [],
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName === 'LI') {
        this.searchTarget = e.target.textContent.trim();
        this.dropdownActive = !this.dropdownActive;
      }
    },
    search() {
      this.$emit('callSearch', {
        searchTarget: this.searchTarget,
        searchTargetValue: this.searchTargetValue,
        searchCategory: this.searchCategory,
        searchStockRange: this.searchStockRange,
        searchSalesRange: this.searchSalesRange,
      });
    },
    searchReset() {
      this.searchTarget = '商品名稱';
      this.searchTargetValue = '';
      this.searchCategory = '';
      this.searchStockRange = [];
      this.searchSalesRange = [];
      this.$emit('callSearchReset');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-panel';
</style>
