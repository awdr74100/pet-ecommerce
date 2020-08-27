<template>
  <div class="order-table">
    <div class="p-4">
      <OrderPanel />
    </div>
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 訂單</p>
    </div>
    <div class="p-4">
      <!-- ... -->
    </div>
  </div>
</template>

<script>
import OrderPanel from '@/components/Dashboard/OrderPanel.vue';

export default {
  components: {
    OrderPanel,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-table.scss';
</style>
