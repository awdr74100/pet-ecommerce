<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <CheckoutDetail />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import CheckoutDetail from '@/components/Layout/CheckoutDetail.vue';

export default {
  metaInfo: {
    title: '訂單結帳',
  },
  components: {
    Footer,
    CheckoutDetail,
  },
  beforeCreate() {
    if (this.$store.state.cart.cart.length === 0) {
      this.$router.push({ path: '/cart' });
    }
  },
  destroyed() {
    this.$store.commit('orders/CLEARORDER');
  },
};
</script>
