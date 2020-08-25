<template>
  <div class="container mt-3">
    <div class="row no-gutters bg-white box-shadow">
      <ProductTable />
    </div>
  </div>
</template>

<script>
import ProductTable from '@/components/Dashboard/ProductTable.vue';

export default {
  components: {
    ProductTable,
  },
};
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
}
</style>
