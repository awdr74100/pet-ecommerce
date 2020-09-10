<template>
  <main class="container mt-3 mb-6">
    <div class="row no-gutters bg-white shadow">
      <CouponTable />
    </div>
  </main>
</template>

<script>
import CouponTable from '@/components/Dashboard/CouponTable.vue';

export default {
  components: {
    CouponTable,
  },
};
</script>
