import Vue from 'vue';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import {
  Swiper as SwiperClass,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from 'swiper/swiper.esm';

SwiperClass.use([Pagination, Autoplay, Navigation, EffectFade]);
Vue.use(getAwesomeSwiper(SwiperClass));
