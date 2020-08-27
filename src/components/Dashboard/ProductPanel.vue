<template>
  <div class="product-panel text-secondary">
    <div class="row">
      <div class="col-md-6">
        <div class="product-panel__group">
          <div class="product-panel__dropdown pl-3" @click="dropdownToggle">
            <p>{{ dropdownTarget }}</p>
            <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
              <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
            </span>
            <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': dropdownTarget === '商品名稱' }"
              >
                商品名稱
              </li>
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': dropdownTarget === '商品ID' }"
              >
                商品ID
              </li>
            </ul>
            <span class="line"></span>
          </div>
          <input class="product-panel__input pl-max" type="text" placeholder="請輸入" />
        </div>
        <div class="product-panel__group mt-3">
          <label class="product-panel__label mr-3" for="productNum">庫存數量</label>
          <input
            class="product-panel__input"
            type="number"
            min="0"
            id="productNum"
            placeholder="請輸入"
          />
          <span class="product-panel__line mx-2"></span>
          <input class="product-panel__input" type="number" min="0" placeholder="請輸入" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-panel__group mt-md-0 mt-3">
          <label class="product-panel__label mr-3" for="productCategory">類別</label>
          <input
            class="product-panel__input"
            type="text"
            id="productCategory"
            placeholder="選擇分類"
          />
        </div>
        <div class="product-panel__group mt-3">
          <label class="product-panel__label mr-3" for="productSoldout">已售出</label>
          <input
            class="product-panel__input"
            type="number"
            min="0"
            id="productSoldout"
            placeholder="請輸入"
          />
          <span class="product-panel__line mx-2"></span>
          <input class="product-panel__input" type="number" min="0" placeholder="請輸入" />
        </div>
      </div>
    </div>
    <div class="row no-gutters mt-4">
      <button class="btn btn--primary px-4 py-1">搜尋</button>
      <button class="btn btn--transparent px-4 py-1 ml-3">重設</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      dropdownTarget: '商品名稱',
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName === 'LI') {
        this.dropdownTarget = e.target.textContent.trim();
        this.dropdownActive = !this.dropdownActive;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-panel';
</style>
