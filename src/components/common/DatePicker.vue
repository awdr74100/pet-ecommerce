<template>
  <date-picker
    type="date"
    :range="true"
    @change="handleChange"
    @clear="handleClear"
    v-model="dateRange"
  />
</template>

<script>
export default {
  data() {
    return {
      dateRange: [new Date(), new Date()],
    };
  },
  methods: {
    handleChange(value, type) {
      console.log(value);
      console.log(type);
      console.log(123);
    },
    handleClear() {
      this.dateRange = [new Date(), new Date()];
    },
  },
};
</script>
