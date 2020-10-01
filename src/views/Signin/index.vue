<template>
  <div class="container">
    <div class="account-form-layout d-flex align-items-center mx-auto">
      <main class="w-100 mb-6">
        <AccountForm />
      </main>
    </div>
  </div>
</template>

<script>
import AccountForm from '@/components/Signin/AccountForm.vue';

export default {
  name: 'Signin',
  metaInfo: {
    title: '會員登入',
  },
  components: {
    AccountForm,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/views/Signin/index.scss';
</style>
