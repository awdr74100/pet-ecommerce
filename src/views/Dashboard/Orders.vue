<template>
  <main class="container mt-3 mb-6">
    <div class="row no-gutters bg-white shadow">
      <OrderTable />
    </div>
  </main>
</template>

<script>
import OrderTable from '@/components/Dashboard/OrderTable.vue';

export default {
  components: {
    OrderTable,
  },
};
</script>
