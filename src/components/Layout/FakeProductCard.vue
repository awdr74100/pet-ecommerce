<template>
  <a href="#" class="product-card text-secondary pointer-none p-3">
    <div class="product-card__img"><PuSkeleton width="100%" height="100%" /></div>
    <p class="product-card__title mt-3"><PuSkeleton /></p>
    <div class="product-card__category text-gray d-flex align-items-center mt-2">
      <p class="flex-1" style="max-width:140px"><PuSkeleton /></p>
    </div>
    <div class="product-card__stock d-flex align-items-center mt-2">
      <p class="flex-1" style="max-width:80px"><PuSkeleton /></p>
    </div>
    <div class="d-flex align-items-end justify-content-end mt-2">
      <p class="product-card__origin-price flex-1" style="max-width:100px">
        <PuSkeleton />
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-card';
</style>
