<template>
  <ul class="breadcrumb">
    <li
      class="breadcrumb__item"
      :class="{ 'breadcrumb__item--active': index === pathList.length - 1 }"
      v-for="(item, index) in pathList"
      :key="index"
    >
      <p>{{ item | translate }}</p>
      <span class="mx-2" :class="{ 'd-none': index === pathList.length - 1 }">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    pathList() {
      return this.$route.path.split('/').slice(1, 4);
    },
  },
  filters: {
    translate(value) {
      if (value === 'admin') return '控制台';
      if (value === 'products') return '產品管理';
      if (value === 'coupons') return '優惠卷管理';
      if (value === 'orders') return '訂單管理';
      if (value === 'all') return '全部';
      if (value === 'listed') return '架上商品';
      if (value === 'soldout') return '已售完';
      if (value === 'unlisted') return '未上架';
      if (value === 'scheduled') return '已排定';
      if (value === 'underway') return '進行中';
      if (value === 'over') return '已結束';
      if (value === 'not_enabled') return '被禁用';
      if (value === 'unpaid') return '尚未付款';
      if (value === 'toship') return '待出貨';
      if (value === 'shipping') return '運送中';
      if (value === 'completed') return '已完成';
      if (value === 'cancelled') return '已取消';
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/breadcrumb.scss';
</style>
