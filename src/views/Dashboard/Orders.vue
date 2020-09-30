<template>
  <main class="container px-0 mb-6">
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
