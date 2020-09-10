<template>
  <main class="container mt-3 mb-6">
    <div class="row no-gutters bg-white shadow">
      <ProductTable />
    </div>
  </main>
</template>

<script>
import ProductTable from '@/components/Dashboard/ProductTable.vue';

export default {
  components: {
    ProductTable,
  },
};
</script>
