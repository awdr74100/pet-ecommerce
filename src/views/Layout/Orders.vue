<template>
  <div class="container px-0 h-100 d-flex flex-column">
    <div class="row no-gutters bg-white shadow mb-auto">
      <main class="w-100">
        <OrderTable />
      </main>
    </div>
    <div class="row no-gutters bg-white shadow-top">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer.vue';
import OrderTable from '@/components/Layout/OrderTable.vue';

export default {
  metaInfo: {
    title: '訂單管理',
  },
  components: {
    Footer,
    OrderTable,
  },
};
</script>
