import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VModal from 'vue-js-modal';
import Skeleton from 'vue-loading-skeleton';
import VueProgressBar from 'vue-progressbar';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DatePicker from 'vue2-datepicker';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import 'vue2-datepicker/locale/zh-cn';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './fontAwesome';
import './validation';
import datetime from './filter/datetime';
import currency from './filter/currency';

Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(Skeleton);
Vue.use(VueProgressBar, { color: '#4bb36e', thickness: '3px' });

Vue.filter('datetime', datetime);
Vue.filter('currency', currency);

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
