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
        if (list[1] === 'products' && path === 'all') return '全部訂單';
        if (list[1] === 'products' && path === 'listed') return '架上商品';
        if (list[1] === 'products' && path === 'soldout') return '已售完商品';
        if (list[1] === 'products' && path === 'unlisted') return '未上架商品';
        if (list[1] === 'coupons' && path === 'all') return '全部優惠卷';
        if (list[1] === 'coupons' && path === 'scheduled') return '已排定優惠卷';
        if (list[1] === 'coupons' && path === 'underway') return '進行中優惠卷';
        if (list[1] === 'coupons' && path === 'over') return '已結束優惠卷';
        if (list[1] === 'orders' && path === 'all') return '全部訂單';
        if (list[1] === 'orders' && path === 'unpaid') return '尚未結帳';
        return 'undefined';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/breadcrumb.scss';
</style>
