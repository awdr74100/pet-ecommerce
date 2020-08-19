<template>
  <ul class="breadcrumb">
    <li class="breadcrumb__item">
      <p>首頁</p>
      <span class="mx-2"><font-awesome-icon :icon="['fas', 'angle-right']"/></span>
    </li>
    <li
      class="breadcrumb__item"
      :class="{ 'breadcrumb__item--active': index === breadcrumbList.length - 1 }"
      v-for="(item, index) in breadcrumbList"
      :key="index"
    >
      <p>{{ item }}</p>
      <span class="mx-2" :class="{ 'd-none': index === breadcrumbList.length - 1 }">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    breadcrumbList() {
      const toSplit = this.$route.path.split('/').slice(2, 4);
      let category = '';
      if (toSplit[0] === 'products') category = '商品';
      if (toSplit[0] === 'coupons') category = '優惠卷';
      if (toSplit[0] === 'orders') category = '訂單';
      const chinesePath = toSplit.map((item) => {
        if (item === 'products') return '商品管理';
        if (item === 'coupons') return '優惠卷管理';
        if (item === 'orders') return '訂單管理';
        if (item === 'all') return `全部${category}`;
        return '';
      });
      return chinesePath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/breadcrumb.scss';
</style>
