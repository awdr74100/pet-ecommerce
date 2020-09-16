<template>
  <ul class="stepper w-100 text-secondary mb-md-6 mb-3  mt-2">
    <li
      class="stepper__item mr-2"
      :class="{ 'stepper__item--active': step === 'write' || steps.includes('write') }"
    >
      <span v-if="steps.includes('write')"><font-awesome-icon :icon="['fas', 'check']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <p class="stepper__text">填寫訂購資料</p>
    </li>
    <li class="stepper__line"></li>
    <li
      class="stepper__item mx-2"
      :class="{ 'stepper__item--active': step === 'created' || steps.includes('created') }"
    >
      <span v-if="steps.includes('created')"><font-awesome-icon :icon="['fas', 'check']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
      <p class="stepper__text">已建立訂單</p>
    </li>
    <li class="stepper__line"></li>
    <li
      class="stepper__item mx-2"
      :class="{ 'stepper__item--active': step === 'paid' || steps.includes('paid') }"
    >
      <span v-if="steps.includes('paid')"><font-awesome-icon :icon="['fas', 'check']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'money-bill-wave']"/></span>
      <p class="stepper__text">付款成功</p>
    </li>
    <li class="stepper__line"></li>
    <li
      class="stepper__item ml-2"
      :class="{ 'stepper__item--active': step === 'toship' || steps.includes('toship') }"
    >
      <span v-if="steps.includes('toship')"><font-awesome-icon :icon="['fas', 'check']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'shipping-fast']"/></span>
      <p class="stepper__text">準備出貨中</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    step: String,
    steps: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/stepper.scss';
</style>
