<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <!-- Static File -->
        <AboutPage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import AboutPage from '@/components/Layout/static/AboutPage.vue';

export default {
  metaInfo: {
    title: '關於我們',
  },
  components: {
    Footer,
    AboutPage,
  },
};
</script>
