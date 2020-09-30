<template>
  <div class="container h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto mt-3">
      <main class="w-100">
        <ProductDetail />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow mt-3">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import ProductDetail from '@/components/Layout/ProductDetail.vue';

export default {
  metaInfo: {
    title: '商品資訊',
  },
  components: {
    Footer,
    ProductDetail,
  },
};
</script>
