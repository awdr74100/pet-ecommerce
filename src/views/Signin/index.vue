<template>
  <div class="container">
    <div class="account-form-layout mt-6">
      <AccountForm />
    </div>
  </div>
</template>

<script>
import AccountForm from '@/components/Signin/AccountForm.vue';

export default {
  name: 'Signin',
  components: {
    AccountForm,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/views/Signin/index.scss';
</style>
