<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <!-- Static File -->
        <AdoptPage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import AdoptPage from '@/components/Layout/static/AdoptPage.vue';

export default {
  metaInfo: {
    title: '領養專區',
  },
  components: {
    Footer,
    AdoptPage,
  },
};
</script>
