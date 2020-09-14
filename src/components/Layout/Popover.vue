<template>
  <div class="popover">
    <div class="popover__drawer"></div>
    <div class="popover__container text-secondary bg-white">
      <template v-if="true">
        <div class="popover__header p-3">
          <p>最近加入的商品</p>
        </div>
        <ul class="overflow px-3 my-1">
          <li class="product py-2" v-for="index in 5" :key="index">
            <div class="product__img"></div>
            <div class="product__content text-gray ml-3 mr-2">
              <p class="product__title">
                Moshi Helios Mini 時尚雙肩迷你後背包（都會遊獵系列，2018 SS，橄欖綠）13吋電腦包 筆電
              </p>
              <div class="d-flex align-items-end mt-auto">
                <template v-if="true">
                  <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                  <p class="ml-1">3.6 折</p>
                </template>
                <p class="ml-auto text-primary">$<span class="product__total">2,400</span></p>
              </div>
            </div>
            <div class="d-flex flex-column align-items-end">
              <p class="product__qty">x1</p>
              <span class="mt-auto text-danger cursor-pointer">刪除</span>
            </div>
          </li>
        </ul>
        <div class="popover__footer d-flex align-items-end p-3">
          <p>總計：<span class="text-primary">$785</span></p>
          <button
            class="btn btn--primary btn--sm ml-auto"
            @click.prevent="$router.push({ path: '/cart' })"
          >
            查看我的購物車
          </button>
        </div>
      </template>
      <template v-else>
        <div class="d-flex flex-column align-items-center justify-content-center py-6">
          <span class="text-secondary">
            <font-awesome-icon :icon="['fas', 'cart-arrow-down']" size="3x" />
          </span>
          <p class="mt-4">尚無商品</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/popover.scss';
</style>
