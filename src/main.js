import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VModal from 'vue-js-modal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/zh-cn';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './fontAwesome';

Vue.use(VueAxios, axios);
Vue.use(VModal);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('date-picker', DatePicker);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
