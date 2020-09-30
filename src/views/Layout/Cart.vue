<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <CartDetail />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import CartDetail from '@/components/Layout/CartDetail.vue';

export default {
  metaInfo: {
    title: '購物車',
  },
  components: {
    Footer,
    CartDetail,
  },
};
</script>
