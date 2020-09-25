<template>
  <div class="w-100 h-100">
    <!-- coupon list -->
    <section>
      <ul class="list">
        <li class="list__item bg-primary text-white p-3">
          <span class="percent mt-3 mb-4">SAVE 10%*</span>
          <div class="position-relative">
            <div class="icon d-md-block d-none"></div>
            <p class="title text-center">慶祝「毛孩百貨」正式開幕，9折優惠碼等你來領取！</p>
          </div>
          <div class="hr my-4"></div>
          <template v-if="!getCoupon">
            <button class="btn btn--secondary btn--xl mb-1" @click.prevent="getCoupon = !getCoupon">
              點我領取！
            </button>
          </template>
          <template v-else>
            <span class="text">優惠代碼</span>
            <div class="px-5 py-2 bg-white mt-3">
              <p class="text-secondary">dqwd48qwd</p>
            </div>
          </template>
        </li>
      </ul>
    </section>
    <!-- coupon game -->
    <section class="text-secondary mt-5">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">幸運大轉盤</h2>
        <span class="line bg-secondary mt-2"></span>
      </div>
      <div class="d-flex flex-column align-items-center mt-4 mb-3">
        <div class="canvas w-100 h-100 p-3">
          <LuckyWheel
            ref="LuckDraw"
            @start="startCallBack"
            @end="endCallBack"
            style="width: 100%"
            :blocks="[
              { padding: '10px', background: '#4bb36e' },
              { padding: '0px', background: '#fff' },
            ]"
            :prizes="[
              {
                fonts: [{ text: '5% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#82d69c',
              },
              {
                fonts: [{ text: '2% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#b2ddc0',
              },
              {
                fonts: [{ text: '2% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#82d69c',
              },
              {
                fonts: [{ text: '5% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#b2ddc0',
              },
              {
                fonts: [{ text: '20% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#82d69c',
              },
              {
                fonts: [{ text: '5% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#b2ddc0',
              },
              {
                fonts: [{ text: '20% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#82d69c',
              },
              {
                fonts: [{ text: '5% OFF', top: '26px', fontSize: '16px', fontColor: '#fff' }],
                background: '#b2ddc0',
              },
            ]"
            :buttons="[
              { radius: '35px', background: '#4bb36e', pointer: true },
              {
                radius: '30px',
                background: '#4bb36e',
                fonts: [{ text: 'START', top: '-13px', fontSize: '16px', fontColor: '#fff' }],
              },
            ]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getCoupon: false,
    };
  },
  methods: {
    startCallBack() {
      console.log(123);
      this.$refs.LuckDraw.play();
      setTimeout(() => {
        const index = 3;
        this.$refs.LuckDraw.stop(index);
      }, 2000);
    },
    endCallBack(prize) {
      console.log(prize);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/coupon-page.scss';
</style>
