<template>
  <div class="w-100 h-100">
    <!-- coupon list -->
    <section>
      <ul class="list">
        <li class="list__item bg-primary text-white p-3">
          <span class="percent mt-3 mb-4">SAVE 10%*</span>
          <div class="position-relative">
            <div class="icon d-md-block d-none"></div>
            <p class="title text-center">慶祝「毛孩百貨」正式開幕，9 折優惠卷等你來領取！</p>
          </div>
          <div class="hr my-4"></div>
          <template v-if="!showCoupon">
            <button
              class="btn btn--secondary btn--xl mb-1"
              @click.prevent="showCoupon = !showCoupon"
              key="1"
            >
              點我領取
            </button>
          </template>
          <template v-else>
            <span class="text">優惠代碼</span>
            <button
              class="btn btn--white btn--lg text-secondary d-flex align-items-center mt-2"
              @click.prevent="doCopy('ALCRE88045')"
              key="2"
            >
              <p>ALCRE88045</p>
              <span class="ml-5"><font-awesome-icon :icon="['far', 'copy']"/></span>
            </button>
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
        <p class="p-2 bg-secondary text-white font-xs">說明</p>
        <p class="mt-3">每位顧客在每次活動有三次轉取優惠卷的機會</p>
        <p class="mt-2">優惠卷可立即套用至購物車上</p>
        <p class="mt-3 font-xs text-info" v-if="isSignin">
          剩餘抽獎次數：<span>{{ draws }}</span>
        </p>
        <div class="canvas w-100 h-100 p-3 mt-3" v-if="true">
          <LuckyWheel
            ref="LuckDraw"
            @start="startCallBack"
            @end="endCallBack"
            style="width:100%; height:100%;max-height:350px"
            :blocks="LuckyWheelOptions.blocks"
            :prizes="LuckyWheelPrizes"
            :buttons="LuckyWheelOptions.buttons"
            :default-style="{ fontColor: '#fff', fontSize: '16px' }"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showCoupon: false,
      LuckyWheelOptions: {
        blocks: [
          { padding: '10px', background: '#4bb36e' },
          { padding: '0px', background: '#fff' },
        ],
        buttons: [
          { radius: '35px', background: '#fff', pointer: true },
          { radius: '30px', background: '#4bb36e', pointer: true },
          {
            radius: '30px',
            background: '#4bb36e',
            fonts: [{ text: 'GO', top: '-11px', fontSize: '18px' }],
          },
        ],
        defaultStyle: { fontColor: '#fff', fontSize: '16px' },
      },
    };
  },
  methods: {
    async initLuckyWheel() {
      await this.$store.dispatch('coupons/getCoupons', { role: 'guest' });
      if (this.isSignin) {
        this.$store.dispatch('coupons/getDraws');
      }
    },
    async startCallBack() {
      // 在每次動作前驗證
      await this.$store.dispatch('user/check');
      // 檢查是否登入
      if (!this.isSignin) {
        this.$router.push({ path: '/signin' });
        return;
      }
      // 檢查剩餘抽獎次數
      if (this.draws === 0) {
        const message = '已達抽獎上限次數';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return;
      }
      // 先從前端處理
      this.$store.commit('coupons/SETDRAWS', this.draws - 1);
      this.$refs.LuckDraw.play();
      await this.$store.dispatch('coupons/getCoupon');
      const index = this.LuckyWheelPrizes.findIndex((item) => item.key === this.coupon.id);
      this.$refs.LuckDraw.stop(index);
    },
    endCallBack() {
      if (this.coupon.title === '謝謝參與') {
        this.$store.commit('modal/OPENMODAL', { modal: 'lucky-wheel-modal', cache: {} });
      } else {
        const cache = {
          code: this.coupon.code,
          discount: (this.coupon.percent / 10).toString().replace('.', ''),
        };
        this.$store.commit('modal/OPENMODAL', { modal: 'lucky-wheel-modal', cache });
      }
    },
    async doCopy(copyText) {
      try {
        await this.$copyText(copyText);
        const message = '複製成功';
        this.$store.dispatch('notification/updateMessage', { message, status: 'success' });
      } catch ({ message }) {
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
      }
    },
  },
  computed: {
    LuckyWheelPrizes() {
      const vm = this;
      const coupons = [...vm.coupons];
      return coupons.map((item) => {
        const key = item.id;
        let text = item.title;
        if (item.title !== '謝謝參與') {
          text = `${(item.percent / 10).toString().replace('.', '')} 折優惠卷`;
        }
        return {
          key,
          fonts: [{ text, top: '28px' }],
          background: text === '謝謝參與' ? '#84cc9c' : '#67bf85',
        };
      });
    },
    ...mapState('user', ['isSignin']),
    ...mapState('coupons', ['coupons', 'coupon', 'draws']),
  },
  created() {
    this.initLuckyWheel();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/coupon-page.scss';
</style>
