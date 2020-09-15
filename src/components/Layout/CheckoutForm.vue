<template>
  <div class="checkout-form">
    <!-- stepper -->
    <div class="p-3 mt-3">
      <Stepper />
    </div>
    <!-- table -->
    <div class="p-3">
      <CartTable :edit="false" :collapse="true" />
    </div>
  </div>
</template>

<script>
import Stepper from '@/components/Layout/Stepper.vue';
import CartTable from '@/components/Layout/CartTable.vue';

export default {
  components: {
    Stepper,
    CartTable,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/checkout-form.scss';
</style>
