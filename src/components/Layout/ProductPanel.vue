<template>
  <ul class="product-panel text-secondary d-flex align-items-center p-md-2 p-0 ">
    <li class="align-items-center ml-2 mr-1 d-md-flex d-none">
      <span><font-awesome-icon :icon="['fas', 'filter']"/></span>
      <p class="ml-2">篩選</p>
    </li>
    <li
      class="product-panel__tab d-flex align-items-center justify-content-center ml-md-2"
      :class="{ 'product-panel__tab--active': sortTarget === 'created_at' }"
      @click="sortToggle('created_at')"
    >
      最新
    </li>
    <li
      class="product-panel__tab d-flex align-items-center justify-content-center ml-md-2"
      :class="{ 'product-panel__tab--active': sortTarget === 'sales' }"
      @click="sortToggle('sales')"
    >
      最熱銷
    </li>
    <li
      class="product-panel__dropdown align-items-center ml-md-2 py-2 d-md-flex d-none"
      @click="dropdownToggle"
      data-dropdown="true"
    >
      <p class="ml-3" :class="{ 'text-primary': sortTarget === 'price' }">
        {{
          sortTarget === 'price' ? (sortMode === 'down' ? '價格：高到低' : '價格：低到高') : '價格'
        }}
      </p>
      <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
        <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
      </span>
      <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
        <li
          class="list__item px-3 py-2"
          :class="{ 'list__item--active': sortTarget === 'price' && sortMode === 'up' }"
          data-dropdownItem="true"
        >
          價格：低到高
        </li>
        <li
          class="list__item px-3 py-2"
          :class="{ 'list__item--active': sortTarget === 'price' && sortMode === 'down' }"
          data-dropdownItem="true"
        >
          價格：高到低
        </li>
      </ul>
    </li>
    <li
      class="product-panel__tab d-md-none d-flex align-items-center justify-content-center ml-md-2"
      :class="{ 'product-panel__tab--active': sortTarget === 'price' }"
      @click="
        sortToggle('price', sortTarget !== 'price' ? 'down' : sortMode === 'down' ? 'up' : 'down')
      "
    >
      <p>價格</p>
      <span
        class="icon ml-1"
        :class="{ 'icon--rotate': sortTarget === 'price' && sortMode === 'up' }"
        ><font-awesome-icon :icon="['fas', 'angle-down']" size="sm"
      /></span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      sortTarget: 'created_at',
      sortMode: 'down',
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.dataset.dropdown) {
        this.dropdownActive = !this.dropdownActive;
      }
      if (!e.target.dataset.dropdownitem) return;
      const text = e.target.textContent.trim();
      if (text === '價格：低到高') {
        this.sortToggle('price', 'up');
        this.dropdownActive = !this.dropdownActive;
        return;
      }
      this.sortToggle('price', 'down');
      this.dropdownActive = !this.dropdownActive;
    },
    sortToggle(target, mode = 'down') {
      this.sortTarget = target;
      this.sortMode = mode;
      this.$emit('callSortToggle', { sortTarget: this.sortTarget, sortMode: this.sortMode });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-panel.scss';
</style>
