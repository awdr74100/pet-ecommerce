<template>
  <div class="container mt-3 mb-6">
    <div class="row no-gutters bg-white box-shadow">
      <CouponTable />
    </div>
  </div>
</template>

<script>
import CouponTable from '@/components/Dashboard/CouponTable.vue';

export default {
  components: {
    CouponTable,
  },
};
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
}
</style>
