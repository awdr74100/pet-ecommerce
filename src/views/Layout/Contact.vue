<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <!-- Static File -->
        <ContactPage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import ContactPage from '@/components/Layout/static/ContactPage.vue';

export default {
  metaInfo: {
    title: '聯絡我們',
  },
  components: {
    Footer,
    ContactPage,
  },
};
</script>
