<template>
  <ul class="stepper w-100 text-secondary mb-md-6 mb-3  mt-2">
    <li
      class="stepper__item mr-2"
      :class="{ 'stepper__item--active': step === 'write' || stepFinsh.includes('write') }"
    >
      <span v-if="stepFinsh.includes('write')"><font-awesome-icon :icon="['fas', 'check']"/></span>
      <span v-else><font-awesome-icon :icon="['fas', 'pen']"/></span>
      <p class="stepper__text">填寫訂購資料</p>
    </li>
    <li class="stepper__line"></li>
    <li
      class="stepper__item mx-2"
      :class="{ 'stepper__item--active': step === 'created' || stepFinsh.includes('created') }"
    >
      <span v-if="stepFinsh.includes('created')">
        <font-awesome-icon :icon="['fas', 'check']" />
      </span>
      <span v-else><font-awesome-icon :icon="['fas', 'file-alt']"/></span>
      <p class="stepper__text">已建立訂單</p>
    </li>
    <!-- cancelled -->
    <template v-if="step === 'cancelled'">
      <li class="stepper__line"></li>
      <li class="stepper__item stepper__item--cancel mx-2">
        <span><font-awesome-icon :icon="['fas', 'times']"/></span>
        <p class="stepper__text">已取消訂單</p>
      </li>
    </template>
    <!-- is_paid -->
    <template v-if="step !== 'cancelled'">
      <li class="stepper__line"></li>
      <li
        class="stepper__item mx-2"
        :class="{ 'stepper__item--active': step === 'paid' || stepFinsh.includes('paid') }"
      >
        <span v-if="stepFinsh.includes('paid')"><font-awesome-icon :icon="['fas', 'check']"/></span>
        <span v-else><font-awesome-icon :icon="['fas', 'money-bill-wave']"/></span>
        <p class="stepper__text">付款成功</p>
      </li>
      <li class="stepper__line">
        <span class="loading" v-if="step === 'paid'">
          <font-awesome-icon :icon="['fas', 'spinner']" spin />
        </span>
      </li>
      <li
        class="stepper__item ml-2"
        :class="{ 'stepper__item--active': step === 'toship' || stepFinsh.includes('toship') }"
      >
        <span v-if="stepFinsh.includes('toship')"
          ><font-awesome-icon :icon="['fas', 'check']"
        /></span>
        <span v-else><font-awesome-icon :icon="['fas', 'shipping-fast']"/></span>
        <p class="stepper__text">準備出貨中</p>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    step: String,
    stepFinsh: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/stepper.scss';
</style>
