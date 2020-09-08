import { setInteractionMode, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

setInteractionMode('eager');

extend('email', {
  ...email,
  message: '請輸入有效 email 地址',
});

extend('required', {
  ...required,
  message: '此欄位不可空白',
});
