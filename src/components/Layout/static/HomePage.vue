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
      <!-- <div class="prompt d-md-flex d-none flex-column align-items-center">
        <div class="chevron mb-2">
          <div class="chevron__item"></div>
          <div class="chevron__item"></div>
          <div class="chevron__item"></div>
        </div>
        <span class="text mt-5">SCROLL DOWN</span>
      </div> -->
    </div>
    <!-- news -->
    <section class="position-relative">
      <div class="d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">最新消息</h2>
        <span class="br mt-2"></span>
      </div>
      <div class="px-2">
        <div class="row-sm">
          <div class="col-md-8 px-2 pt-5">
            <div class="news"></div>
            <div class="text-block d-flex flex-column p-3">
              <h6 class="title">夏天到了，該來消暑一下了</h6>
              <span class="date d-flex align-items-center mt-3">
                <span><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                <p class="ml-2">2020-09-23</p>
              </span>
              <span class="content mt-2">新增寵物洗澡用品以及戶外生活用品，詳情請看商品列表。</span>
            </div>
          </div>
          <div class="col-md-4 px-2 pt-md-5 pt-4">
            <div class="news"></div>
          </div>
          <div class="col-md-4 px-2 pt-4">
            <div class="news"></div>
          </div>
          <div class="col-md-4 px-2 pt-4">
            <div class="news"></div>
          </div>
          <div class="col-md-4 px-2 pt-4">
            <div class="news"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- hot products -->
    <section class="position-relative">
      <div class="d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">熱銷商品</h2>
        <span class="br mt-2"></span>
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
        <span class="br mt-2"></span>
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
    <div class="subscribe text-secondary m-2 mt-5">
      <div class="row">
        <div class="col-md-6 py-4">
          <div class="subscribe__text text-center">
            <p>想要接收最即時的優惠資訊？</p>
            <p>快來訂閱「毛孩百貨」吧！</p>
          </div>
        </div>
        <div class="col-md-6 pt-md-4 pb-4 pt-0">
          <div class="d-flex align-items-center justify-content-center mx-3 h-100">
            <input type="email" class="subscribe__input p-2" placeholder="請輸入 email" />
            <button class="btn btn--primary subscribe__btn">訂閱</button>
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
    };
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
  created() {
    this.$store.dispatch('products/getProducts', { role: 'guest' });
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/home-page.scss';
</style>
