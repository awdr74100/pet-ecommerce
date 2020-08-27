<template>
  <div class="order-table">
    <div class="p-4">
      <OrderPanel />
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
