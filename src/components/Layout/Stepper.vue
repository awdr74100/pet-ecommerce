<template>
  <ul class="stepper w-100 text-secondary mb-md-6 mb-3  mt-2">
    <li class="stepper__item mr-2">
      <span v-if="true"><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'check']"/></span>
      <p class="stepper__text">填寫訂購資料</p>
    </li>
    <li class="stepper__line"></li>
    <li class="stepper__item mx-2">
      <span v-if="true"><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'check']"/></span>
      <p class="stepper__text">填寫訂購資料</p>
    </li>
    <li class="stepper__line"></li>
    <li class="stepper__item mx-2">
      <span v-if="true"><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'check']"/></span>
      <p class="stepper__text">訂單已成立</p>
    </li>
    <li class="stepper__line"></li>
    <li class="stepper__item ml-2">
      <span v-if="true"><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'check']"/></span>
      <p class="stepper__text">付款完成，準備出貨中</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/stepper.scss';
</style>
