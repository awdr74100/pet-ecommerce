<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <!-- Static File -->
        <CouponPage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import CouponPage from '@/components/Layout/static/CouponPage.vue';

export default {
  metaInfo: {
    title: '優惠活動',
  },
  components: {
    Footer,
    CouponPage,
  },
};
</script>
