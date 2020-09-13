<template>
  <router-link to="/product/wdww" class="product-card text-secondary p-3">
    <div class="product-card__img"></div>
    <p class="product-card__title mt-3">
      海洋之星FISH4CATS 鮭魚無麩質低敏配方400g、全貓ergergegergergerg
    </p>
    <div class="product-card__category text-gray d-flex align-items-center mt-2">
      <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
      <p class="ml-1">品牌貓飼料</p>
    </div>
    <div class="product-card__stock text-primary d-flex align-items-center mt-2">
      <span><font-awesome-icon :icon="['fas', 'cube']"/></span>
      <p class="ml-1" v-if="true">尚有庫存</p>
      <p class="ml-1" v-else>庫存不足</p>
    </div>
    <div class="d-flex align-items-end justify-content-end mt-2">
      <p class="product-card__origin-price">$1,180</p>
      <p class="product-card__price text-primary ml-2"><span class="dollar">$</span>1,160</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-card';
</style>
