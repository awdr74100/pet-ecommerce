<template>
  <div class="container h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto mt-3">
      <main class="w-100">
        <!-- Static File -->
        <NewsPage />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow mt-3">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import NewsPage from '@/components/Layout/static/NewsPage.vue';

export default {
  metaInfo: {
    title: '最新消息',
  },
  components: {
    Footer,
    NewsPage,
  },
};
</script>
