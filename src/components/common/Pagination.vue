<template>
  <ul class="pagination">
    <li>
      <button
        class="btn pagination__prev"
        :disabled="page === 1"
        @click.prevent="pageToggle(page - 1)"
      >
        <span>
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </span>
      </button>
    </li>
    <li v-for="(item, index) in pages" :key="index">
      <button
        class="btn pagination__item"
        :class="{ 'pagination__item--active': item === page }"
        @click.prevent="pageToggle(item)"
      >
        {{ item }}
      </button>
    </li>
    <li>
      <button
        class="btn pagination__next"
        :disabled="page === pages || pages === 0"
        @click.prevent="pageToggle(page + 1)"
      >
        <span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    length: Number,
    row: Number,
    resetKey: Number,
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
    resetKey() {
      this.page = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/pagination.scss';
</style>
