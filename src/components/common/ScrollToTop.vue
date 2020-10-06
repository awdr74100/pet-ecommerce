<template>
  <div
    class="scroll-to-top"
    :class="{ 'scroll-to-top--show': scrollTop > 400 }"
    v-scroll-to="{
      el: '#app',
      duration: 300,
    }"
  >
    <button class="btn btn--primary p-0 scroll-to-top__btn">
      <span class="d-block rotate">
        <font-awesome-icon :icon="['fas', 'angle-down']" size="lg" />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  methods: {
    getScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.getScrollTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.getScrollTop);
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/scroll-to-top.scss';
</style>
