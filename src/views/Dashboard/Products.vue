<template>
  <div class="container mt-3 mb-6">
    <div class="row no-gutters bg-white shadow-section">
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
