<template>
  <div>
    <!-- Product Add Or Edit  -->
    <modal
      height="auto"
      name="ProductAddOrEdit"
      :adaptive="true"
      :shiftY="0.2"
      :width="800"
      :max-width="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <p class="aaa">123</p>
    </modal>
    <!-- Product Delete -->
    <modal name="ProductDelete">
      <p class="aaa">456</p>
    </modal>
    <!-- Coupon Add or Edit -->
    <modal name="CouponAddOrEdit">
      <p class="aaa">789</p>
    </modal>
    <!-- Coupon Delete -->
    <modal name="CouponDelete">
      <p class="aaa">456</p>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxWidth: 0,
    };
  },
  methods: {
    beforeOpen() {
      this.maxWidth = window.innerWidth - 30;
    },
    beforeClose({ name }) {
      this.$store.commit('modal/CLOSEMODAL', name);
    },
    closeModal(modal) {
      this.$store.commit('modal/CLOSEMODAL', modal);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/modal.scss';
</style>
