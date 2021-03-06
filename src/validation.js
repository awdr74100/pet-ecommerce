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

extend('include', {
  validate: (value) => !value.includes('@'),
  message: '禁止包含 @ 符號',
});

extend('tel', {
  validate: (value) => /((?=(09))[0-9]{10})$/.test(value),
  message: '請輸入有效電話號碼',
});
