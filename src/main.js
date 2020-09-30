import Vue from 'vue';
// Global Component
import axios from 'axios';
import VueAxios from 'vue-axios';
import VModal from 'vue-js-modal';
import Skeleton from 'vue-loading-skeleton';
import VueProgressBar from 'vue-progressbar';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DatePicker from 'vue2-datepicker';
import LuckDraw from 'vue-luck-draw';
import VueMeta from 'vue-meta';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import 'vue2-datepicker/locale/zh-cn';
// Core
import App from './App.vue';
import router from './router';
import store from './store';
// Other Component
import './registerServiceWorker';
import './fontAwesome';
import './validation';
import './swiper';
// Global Filter
import datetime from './filter/datetime';
import currency from './filter/currency';
import dollar from './filter/dollar';

Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(Skeleton);
Vue.use(VueProgressBar, { color: '#4bb36e', thickness: '3px' });
Vue.use(LuckDraw);
Vue.use(VueMeta);

Vue.filter('datetime', datetime);
Vue.filter('currency', currency);
Vue.filter('dollar', dollar);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('date-picker', DatePicker);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
