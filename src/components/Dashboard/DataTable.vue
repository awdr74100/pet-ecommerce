<template>
  <div class="data-table px-3">
    <div>
      <ControlPanel />
    </div>
  </div>
</template>

<script>
import ControlPanel from '@/components/Dashboard/ControlPanel.vue';

export default {
  components: {
    ControlPanel,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/data-table.scss';
</style>
