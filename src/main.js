import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/zh-cn';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './fontAwesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('date-picker', DatePicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
