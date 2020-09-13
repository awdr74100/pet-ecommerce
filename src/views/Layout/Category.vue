<template>
  <div class="container min-height d-flex flex-column mt-3">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main>
        <ProductList />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow mt-3">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import ProductList from '@/components/Layout/ProductList.vue';

export default {
  components: {
    Footer,
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100% - 15px);
}
</style>
