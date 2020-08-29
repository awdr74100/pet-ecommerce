<template>
  <ul class="breadcrumb">
    <li
      class="breadcrumb__item"
      :class="{ 'breadcrumb__item--active': index === pathList.length - 1 }"
      v-for="(item, index) in pathList"
      :key="index"
    >
      <p>{{ item }}</p>
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
      const list = this.$route.path.split('/').slice(1, 4);
      return list.map((path) => {
        if (path === 'admin') return '控制台';
        if (path === 'products') return '商品管理';
        if (path === 'coupons') return '優惠卷管理';
        if (path === 'orders') return '訂單管理';
        if (list[1] === 'products' && path === 'all') return '全部';
        if (list[1] === 'products' && path === 'listed') return '架上商品';
        if (list[1] === 'products' && path === 'soldout') return '已售完';
        if (list[1] === 'products' && path === 'unlisted') return '未上架';
        if (list[1] === 'coupons' && path === 'all') return '全部';
        if (list[1] === 'coupons' && path === 'scheduled') return '已排定';
        if (list[1] === 'coupons' && path === 'underway') return '進行中';
        if (list[1] === 'coupons' && path === 'over') return '已結束';
        if (list[1] === 'coupons' && path === 'not_enabled') return '未啟用';
        if (list[1] === 'orders' && path === 'all') return '全部訂單';
        if (list[1] === 'orders' && path === 'unpaid') return '尚未付款';
        if (list[1] === 'orders' && path === 'toship') return '待出貨';
        if (list[1] === 'orders' && path === 'shipping') return '運送中';
        if (list[1] === 'orders' && path === 'completed') return '已完成';
        if (list[1] === 'orders' && path === 'cancelled') return '已取消';
        return 'undefined';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/breadcrumb.scss';
</style>
