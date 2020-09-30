<template>
  <main class="container px-0 mb-6">
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
