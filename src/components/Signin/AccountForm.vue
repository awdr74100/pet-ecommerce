<template>
  <div class="account-form text-secondary p-4">
    <ProgressBar :active="progressActive" />
    <span class="return" v-if="tab === 'reset'" @click="toggleTab('signin')">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </span>
    <a href="#" class="logo mb-1"></a>
    <ul class="d-flex align-items-center mt-3 pb-1" v-if="tab !== 'reset'">
      <li
        class="account-form__tab py-1"
        :class="{ 'account-form__tab--active': tab === 'signin' }"
        @click="toggleTab('signin')"
      >
        會員登入
      </li>
      <li
        class="account-form__tab py-1"
        :class="{ 'account-form__tab--active': tab === 'signup' }"
        @click="toggleTab('signup')"
      >
        立即註冊
      </li>
    </ul>
    <form @submit.prevent="signin" class="form mt-3" v-if="tab === 'signin'">
      <div class="account-form__section">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          autocomplete="on"
          placeholder="Email"
          v-model="account.email"
        />
      </div>
      <div class="account-form__section mt-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="account-form__input text-secondary"
          autocomplete="on"
          placeholder="Password"
          v-model="account.password"
        />
        <span class="hide-btn" @click="showPassword = !showPassword">
          <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
          <font-awesome-icon :icon="['far', 'eye-slash']" v-else />
        </span>
      </div>
      <div class="d-flex align-items-center mt-3 mb-3">
        <input type="checkbox" class="checkbox" id="isAdmin" v-model="isAdmin" />
        <label class="checkbox-label ml-1" for="isAdmin">系統管理員</label>
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signin">
        登入
      </button>
      <a href="#" class="forget mt-3" @click="toggleTab('reset')">忘記密碼？</a>
    </form>
    <form @submit.prevent="signup" class="form mt-3" v-if="tab === 'signup'">
      <div class="account-form__section">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="Email"
          v-model="account.email"
        />
      </div>
      <div class="account-form__section mt-3 mb-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="account-form__input text-secondary"
          placeholder="Password"
          v-model="account.password"
        />
        <span class="hide-btn" @click="showPassword = !showPassword">
          <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
          <font-awesome-icon :icon="['far', 'eye-slash']" v-else />
        </span>
      </div>
      <div class="account-form__section mt-3 mb-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'user']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="Nickname"
          v-model="account.nickname"
        />
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signup">
        註冊
      </button>
    </form>
    <form @submit.prevent="reset" class="form mt-3" v-if="tab === 'reset'">
      <p class="py-1">重新設定密碼</p>
      <div class="account-form__section mt-3 mb-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="Email"
          v-model="account.email"
        />
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="reset">
        下一步
      </button>
    </form>
  </div>
</template>

<script>
import ProgressBar from '@/components/Signin/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      tab: 'signin',
      progressActive: false,
      showPassword: false,
      isAdmin: false,
      account: {},
    };
  },
  methods: {
    signin() {
      console.log('signin');
      this.progressActive = true;
      setTimeout(() => {
        this.progressActive = false;
      }, 2000);
    },
    signup() {
      console.log('signup');
    },
    reset() {
      console.log('reset');
    },
    toggleTab(action) {
      this.account = {};
      this.tab = action;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Signin/account-form.scss';
</style>
