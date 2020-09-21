<template>
  <router-link :to="{ path: `/product/${item.id}` }" class="product-card text-secondary p-3">
    <div class="product-card__img" :style="{ 'background-image': `url('${item.imgUrl}')` }"></div>
    <p class="product-card__title mt-3">{{ item.title }}</p>
    <div class="product-card__category text-gray d-flex align-items-center mt-2">
      <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
      <p class="ml-1">{{ item.category }}</p>
    </div>
    <div
      class="product-card__stock d-flex align-items-center mt-2"
      :class="{
        'text-primary': item.stock > 5,
        'text-warning': item.stock <= 5 && item.stock > 0,
        'text-danger': item.stock === 0,
      }"
    >
      <span><font-awesome-icon :icon="['fas', 'cube']"/></span>
      <p class="ml-1" v-if="item.stock > 5">尚有庫存</p>
      <p class="ml-1" v-else-if="item.stock <= 5 && item.stock > 0">庫存較少</p>
      <p class="ml-1" v-else>庫存不足</p>
    </div>
    <div class="d-flex align-items-end justify-content-end mt-2">
      <p class="product-card__origin-price" v-if="item.origin_price !== item.price">
        {{ item.origin_price | currency | dollar }}
      </p>
      <p class="product-card__price text-primary ml-2">
        <span class="dollar">$</span>{{ item.price | currency }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-card';
</style>
