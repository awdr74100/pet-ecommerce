<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <!-- Static File -->
        <HomePage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import HomePage from '@/components/Layout/static/HomePage.vue';

export default {
  metaInfo: {
    title: '毛孩百貨',
    titleTemplate: null,
  },
  components: {
    Footer,
    HomePage,
  },
};
</script>
