<template>
  <div class="container mt-3">
    <div class="row no-gutters bg-white box-shadow">
      <DataTable />
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/Dashboard/DataTable.vue';

export default {
  components: {
    DataTable,
  },
};
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
}
</style>
