<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <ProductList />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import ProductList from '@/components/Layout/ProductList.vue';

export default {
  metaInfo: {
    title: '商品分類',
  },
  components: {
    Footer,
    ProductList,
  },
};
</script>
