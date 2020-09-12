<template>
  <div class="product-panel text-secondary p-md-1 p-0">
    <div
      class="product-panel__tab ml-md-2"
      :class="{ 'product-panel__tab--active': sortTarget === 'created_at' }"
      @click="sortToggle('created_at')"
    >
      最新
    </div>
    <div
      class="product-panel__tab ml-md-2"
      :class="{ 'product-panel__tab--active': sortTarget === 'sales' }"
      @click="sortToggle('sales')"
    >
      最熱銷
    </div>
    <div
      class="product-panel__tab ml-md-2 d-md-none d-flex"
      :class="{ 'product-panel__tab--active': sortTarget === 'price' }"
      @click="
        sortToggle('price', sortTarget !== 'price' ? 'down' : sortMode === 'down' ? 'up' : 'down')
      "
    >
      價格
      <span
        class="icon ml-1"
        :class="{ 'icon--rotate': sortTarget === 'price' && sortMode === 'up' }"
      >
        <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
      </span>
    </div>
    <div
      class="product-panel__dropdown bg-white ml-md-2 py-2 d-md-flex d-none"
      @click="dropdownToggle"
    >
      <p class="ml-3" :class="{ 'text-primary': text }">{{ text || '價格' }}</p>
      <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
        <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
      </span>
      <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
        <li
          class="list__item px-3 py-2"
          :class="{ 'list__item--active': sortTarget === 'price' && sortMode === 'up' }"
        >
          價格：低到高
        </li>
        <li
          class="list__item px-3 py-2"
          :class="{ 'list__item--active': sortTarget === 'price' && sortMode === 'down' }"
        >
          價格：高到低
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      text: '',
      sortTarget: 'created_at',
      sortMode: 'down',
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName !== 'LI') return;
      const text = e.target.textContent.trim();
      if (text === '價格：低到高') {
        this.sortToggle('price', 'up', '價格：低到高');
        this.dropdownActive = !this.dropdownActive;
        return;
      }
      this.sortToggle('price', 'down', '價格：高到低');
      this.dropdownActive = !this.dropdownActive;
    },
    sortToggle(target, mode = 'down', text = '') {
      this.sortTarget = target;
      this.sortMode = mode;
      this.text = text;
      this.$emit('callSortToggle', { sortTarget: this.sortTarget, sortMode: this.sortMode });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-panel.scss';
</style>
