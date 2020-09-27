<template>
  <div class="w-100 h-100">
    <!-- banner -->
    <div class="position-relative">
      <swiper ref="swiper1" :options="bannerSwiperOptions">
        <swiper-slide>
          <div class="banner banner--img1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner--img2"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner--img3"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="message text-center p-md-5 p-3">
        <span class="message__text d-block white-nowrap text-primary">嚴選商品 x 效率服務</span>
        <span class="message__text d-block white-nowrap text-secondary mt-3"
          >提供最精緻、最溫暖的服務，滿足飼主與毛孩</span
        >
      </div>
    </div>
    <!-- news -->
    <section class="position-relative">
      <div class="d-flex flex-column align-items-center justify-content-center my-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">最新消息</h2>
        <span class="line bg-secondary mt-2"></span>
      </div>
      <div class="px-2">
        <div class="row-sm">
          <div class="col-md-8 px-2 mt-md-0 mt-4">
            <router-link to="/news" class="news text-secondary">
              <div class="news__img news__img--img1"></div>
              <div class="news__text-block d-flex flex-column p-3">
                <h6 class="title">「毛孩百貨」9 月 24 日正式開幕</h6>
                <span class="date d-flex align-items-center mt-3">
                  <span><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p class="ml-2">2020-09-24</p>
                </span>
                <span class="content mt-2"
                  >毛孩百貨正式開幕，各種品牌寵物用品，應有盡有，滿足你對毛小孩用品的各種需求。</span
                >
              </div></router-link
            >
          </div>
          <div class="col-md-4 px-2 mt-md-0 mt-4">
            <router-link to="/news" class="news text-secondary">
              <div class="news__img news__img--img2"></div>
              <div class="news__text-block d-flex flex-column p-3">
                <h6 class="title">慶開幕，全館商品9折起</h6>
                <span class="date d-flex align-items-center mt-3">
                  <span><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p class="ml-2">2020-09-24</p>
                </span>
                <span class="content mt-2"
                  >慶祝網站開幕，各項品牌商品9折起，優惠代碼請看結帳頁面，機會難得，請好好把握！</span
                >
              </div></router-link
            >
          </div>
          <div class="col-md-4 px-2 mt-4">
            <router-link to="/news" class="news text-secondary">
              <div class="news__img news__img--img3"></div>
              <div class="news__text-block d-flex flex-column p-3">
                <h6 class="title">夏天到了，該來消暑一下了</h6>
                <span class="date d-flex align-items-center mt-3">
                  <span><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p class="ml-2">2020-09-24</p>
                </span>
                <span class="content mt-2"
                  >新增寵物洗澡用品以及戶外生活用品，詳情請看商品列表。</span
                >
              </div></router-link
            >
          </div>
          <div class="col-md-8 px-2 mt-4">
            <router-link to="/news" class="news text-secondary">
              <div class="news__img news__img--img4"></div>
              <div class="news__text-block d-flex flex-column p-3">
                <h6 class="title">中秋節到來，寵物是否可以吃烤肉呢？</h6>
                <span class="date d-flex align-items-center mt-3">
                  <span><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p class="ml-2">2020-09-24</p>
                </span>
                <span class="content mt-2"
                  >中秋節到來，香噴噴的烤肉令人胃口大開，不過千萬要注意，寵物是不太能吃烤肉的，相關知識請看網路報導。</span
                >
              </div></router-link
            >
          </div>
        </div>
      </div>
    </section>
    <!-- hot products -->
    <section class="position-relative">
      <div class="d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">熱銷商品</h2>
        <span class="line bg-secondary mt-2"></span>
      </div>
      <div class="px-2">
        <swiper ref="swiper2" :options="productsSwiperOptions">
          <!-- 骨架屏 -->
          <template v-if="skeletonTarget === 'products'">
            <swiper-slide v-for="index in 6" :key="index">
              <div class="pt-5">
                <FakeProductCard />
              </div>
            </swiper-slide>
          </template>
          <!-- 實體 -->
          <template v-else>
            <swiper-slide v-for="(item, index) in hotProducts" :key="index">
              <div class="pt-5">
                <ProductCard :item="item" />
              </div>
            </swiper-slide>
          </template>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
    <!-- discount products -->
    <section class="position-relative">
      <div class="d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">限量折扣商品</h2>
        <span class="line bg-secondary mt-2"></span>
      </div>
      <div class="px-2">
        <swiper ref="swiper3" :options="productsSwiperOptions">
          <!-- 骨架屏 -->
          <template v-if="skeletonTarget === 'products'">
            <swiper-slide v-for="index in 6" :key="index">
              <div class="pt-5">
                <FakeProductCard />
              </div>
            </swiper-slide>
          </template>
          <!-- 實體 -->
          <template v-else>
            <swiper-slide v-for="(item, index) in discountProducts" :key="index">
              <div class="pt-5">
                <ProductCard :item="item" />
              </div>
            </swiper-slide>
          </template>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
    <!-- subscribe -->
    <div class="subscribe text-secondary mx-2 mt-5 mb-4">
      <div class="row no-gutters">
        <div class="col-md-6 py-4">
          <div class="subscribe__text text-center">
            <p>想要接收最即時的優惠資訊？</p>
            <p>快來訂閱「毛孩百貨」吧！</p>
          </div>
        </div>
        <div class="col-md-6 pt-md-4 pb-4 pt-0">
          <div class="mx-md-6 mx-0 px-md-5 px-3 h-100 d-flex align-items-center">
            <ValidationObserver ref="subscribe-form" slim>
              <form class="d-flex align-items-cneter w-100" @submit.prevent="subscribe">
                <ValidationProvider rules="required|email" v-slot="{ errors, failed }" slim>
                  <div class="position-relative w-100">
                    <input
                      type="email"
                      class="subscribe__input p-2"
                      placeholder="請輸入 email"
                      :class="{ 'subscribe__input--error': failed }"
                      v-model="email"
                    />
                    <small class="subscribe__error" v-if="failed">{{ errors[0] }}</small>
                  </div>
                </ValidationProvider>
                <button
                  type="submit"
                  class="btn btn--primary subscribe__btn"
                  @click.prevent="subscribe"
                >
                  <span
                    class="d-block"
                    style="min-width:30px"
                    v-if="spinner.action === 'subscribe'"
                  >
                    <font-awesome-icon :icon="['fas', 'spinner']" spin />
                  </span>
                  <p v-else>訂閱</p>
                </button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ProductCard from '@/components/Layout/ProductCard.vue';
import FakeProductCard from '@/components/Layout/FakeProductCard.vue';

export default {
  components: {
    ProductCard,
    FakeProductCard,
  },
  data() {
    return {
      bannerSwiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        speed: 500,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        loop: true,
      },
      productsSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        speed: 500,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
      },
      email: '',
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async subscribe() {
      const valid = await this.$refs['subscribe-form'].validate();
      if (!valid) return;
      this.spinner.action = 'subscribe';
      setTimeout(() => {
        const message = '成功訂閱';
        this.$store.dispatch('notification/updateMessage', { message, status: 'success' });
        this.spinner.action = '';
      }, 800);
    },
  },
  computed: {
    hotProducts() {
      const vm = this;
      const products = [...vm.products]; // fix call by reference
      return products.sort((a, b) => (a.sales > b.sales ? -1 : 1)).slice(0, 10);
    },
    discountProducts() {
      const vm = this;
      const products = [...vm.products]; // fix call by reference
      return products.filter((item) => item.origin_price !== item.price).slice(0, 10);
    },
    ...mapState('products', ['products']),
    ...mapState(['skeletonTarget']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/home-page.scss';
</style>
