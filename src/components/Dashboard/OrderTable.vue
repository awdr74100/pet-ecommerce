<template>
  <div class="order-table">
    <!-- order panel -->
    <div class="p-4">
      <OrderPanel />
    </div>
    <!-- section -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 訂單</p>
    </div>
    <!-- Table List -->
    <div class="p-4">
      <div class="table-header">
        <ul class="list">
          <li style="min-width:300px" class="list__item">商品</li>
          <li style="min-width:120px;max-width:140px" class="list__item">買家應付金額</li>
          <li style="min-width:120px;max-width:140px" class="list__item">運送方式</li>
          <li style="min-width:200px" class="list__item">買家資料</li>
          <li style="min-width:200px" class="list__item d-flex align-items-center">
            <p>狀態</p>
            <span class="line mx-1"></span>
            <p>時間</p>
          </li>
        </ul>
      </div>
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
