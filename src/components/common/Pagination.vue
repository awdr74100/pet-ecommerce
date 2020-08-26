<template>
  <ul class="pagination text-secondary">
    <li class="pagination__prev pagination__prev--disabled">
      <span>
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </span>
    </li>
    <li class="pagination__item pagination__item--active">1</li>
    <li class="pagination__item">2</li>
    <li class="pagination__next">
      <span>
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      page: 3,
    };
  },
  methods: {
    pageToggle(page) {
      console.log(page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/pagination.scss';
</style>
