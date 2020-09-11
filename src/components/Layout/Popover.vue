<template>
  <div class="popover">
    <div class="popover__drawer"></div>
    <div class="popover__container text-secondary bg-white">
      <div class="popover__header p-3">
        <p>最近加入的商品</p>
      </div>
      <ul class="p-3">
        <li>123</li>
      </ul>
      <div class="popover__footer d-flex align-items-end p-3">
        <p>總計：<span class="text-primary">NT$785</span></p>
        <button class="btn btn--transparent ml-auto">清空</button>
        <button class="btn btn--primary ml-2">查看並結帳</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/popover.scss';
</style>
