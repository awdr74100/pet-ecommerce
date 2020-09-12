<template>
  <main class="container mt-3 mb-6">
    <div class="row no-gutters bg-white shadow">
      <ProductList />
    </div>
  </main>
</template>

<script>
import ProductList from '@/components/Layout/ProductList.vue';

export default {
  components: {
    ProductList,
  },
};
</script>
