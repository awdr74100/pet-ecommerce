<template>
  <div class="control-panel text-secondary">
    <div class="row mb-3">
      <div class="col-md-6">
        <div class="control-panel__group mt-3">
          <div class="control-panel__select pl-3" @click="selectToggle">
            <p>{{ selectTarget }}</p>
            <span class="icon ml-auto mr-3" :class="{ rotate: selectActive }">
              <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
            </span>
            <ul class="list py-1" :class="{ 'list--active': selectActive }">
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': selectTarget === '商品名稱' }"
              >
                商品名稱
              </li>
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': selectTarget === '商品ID' }"
              >
                商品ID
              </li>
            </ul>
            <span class="line"></span>
          </div>
          <input class="control-panel__input pl-max" type="text" id="select" placeholder="請輸入" />
        </div>
        <div class="control-panel__group mt-3">
          <label class="control-panel__label mr-3" for="productNum">商品數量</label>
          <input
            class="control-panel__input"
            type="number"
            min="0"
            id="productNum"
            placeholder="請輸入"
          />
          <span class="control-panel__line mx-2"></span>
          <input class="control-panel__input" type="number" min="0" placeholder="請輸入" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="control-panel__group mt-3">
          <label class="control-panel__label mr-3" for="productCategory">類別</label>
          <input
            class="control-panel__input"
            type="text"
            id="productCategory"
            placeholder="搜尋分類"
          />
        </div>
        <div class="control-panel__group mt-3 pr-6">
          <label class="control-panel__label mr-3" for="productSoldout">已售出</label>
          <input
            class="control-panel__input"
            type="number"
            min="0"
            id="productSoldout"
            placeholder="請輸入"
          />
          <span class="control-panel__line mx-2"></span>
          <input class="control-panel__input" type="number" min="0" placeholder="請輸入" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectActive: false,
      selectTarget: '商品名稱',
    };
  },
  methods: {
    selectToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.selectActive = !this.selectActive;
      }
      if (e.target.tagName === 'LI') {
        this.selectTarget = e.target.textContent.trim();
        this.selectActive = !this.selectActive;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/control-panel';
</style>
