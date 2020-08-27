<template>
  <ul class="pagination text-secondary">
    <li
      class="pagination__prev"
      :class="{ 'pagination__prev--disabled': page === 1 }"
      @click="pageToggle(page - 1)"
    >
      <span>
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </span>
    </li>
    <li
      class="pagination__item"
      :class="{ 'pagination__item--active': page === item }"
      v-for="(item, index) in pages"
      :key="index"
      @click="pageToggle(item)"
    >
      {{ item }}
    </li>
    <li
      class="pagination__next"
      :class="{ 'pagination__next--disabled': page === pages || pages === 0 }"
      @click="pageToggle(page + 1)"
    >
      <span>
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    length: Number,
    row: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    pageToggle(page) {
      this.page = page;
      this.$emit('callPageToggle', page);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.length / this.row);
    },
  },
  watch: {
    row() {
      this.page = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/pagination.scss';
</style>
