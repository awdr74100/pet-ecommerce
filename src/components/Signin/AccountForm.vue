<template>
  <div class="account-form text-secondary p-5">
    <!-- progress bar -->
    <ProgressBar :active="progressActive" />
    <!-- return action (just reset form) -->
    <span class="return" v-if="tab === 'reset'" @click="toggleTab('signin')">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </span>
    <!-- logo -->
    <router-link to="/" class="logo mb-1"></router-link>
    <!-- tabs -->
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
    <!-- signin form -->
    <form @submit.prevent="signin" class="mt-3" v-if="tab === 'signin'">
      <div class="account-form__group">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'user']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          autocomplete="on"
          placeholder="使用者名稱/電子郵件"
          v-model="account.usernameOrEmail"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
      </div>
      <div class="account-form__group mt-1">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="account-form__input text-secondary"
          autocomplete="on"
          placeholder="密碼"
          v-model="account.password"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
        <button type="button" class="btn p-0 hide-btn" @click="showPassword = !showPassword">
          <span class="text-secondary" v-if="showPassword">
            <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
          </span>
          <span class="text-secondary" v-else>
            <font-awesome-icon :icon="['far', 'eye-slash']" />
          </span>
        </button>
      </div>
      <div class="d-flex align-items-center mt-1 mb-3">
        <input type="checkbox" class="checkbox" id="isAdmin" v-model="isAdmin" />
        <label class="checkbox-label ml-1" for="isAdmin">系統管理員</label>
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signin">
        登入
      </button>
      <a href="#" class="forget mt-3" @click.prevent="toggleTab('reset')">忘記密碼？</a>
    </form>
    <!-- signup form -->
    <form @submit.prevent="signup" class="mt-3" v-if="tab === 'signup'">
      <div class="account-form__group">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'user']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="使用者名稱"
          v-model="account.username"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
      </div>
      <div class="account-form__group mt-1">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="account-form__input text-secondary"
          placeholder="密碼"
          v-model="account.password"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
        <button type="button" class="btn p-0 hide-btn" @click="showPassword = !showPassword">
          <span class="text-secondary" v-if="showPassword">
            <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
          </span>
          <span class="text-secondary" v-else>
            <font-awesome-icon :icon="['far', 'eye-slash']" />
          </span>
        </button>
      </div>
      <div class="account-form__group mt-1 mb-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="電子郵件"
          v-model="account.email"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signup">
        註冊
      </button>
    </form>
    <!-- reset form -->
    <form @submit.prevent="reset" class="mt-3" v-if="tab === 'reset'">
      <p class="py-1">發送密碼重置郵件</p>
      <div class="account-form__group mt-3 mb-3">
        <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
        <input
          type="text"
          class="account-form__input text-secondary"
          placeholder="電郵地址"
          v-model="account.email"
        />
        <small class="account-form__error" v-if="false">此欄位不可空白</small>
      </div>
      <button class="btn btn--primary btn--block account-form__btn" @click.prevent="resetPassword">
        發送
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
    async signin() {
      const { usernameOrEmail = '', password = '' } = this.account;
      this.progressActive = true;
      if (this.isAdmin) {
        await this.$store.dispatch('admin/signin', { usernameOrEmail, password });
      } else {
        await this.$store.dispatch('user/signin', { usernameOrEmail, password });
      }
      this.progressActive = false;
    },
    async signup() {
      const { username = '', password = '', email = '' } = this.account;
      this.progressActive = true;
      await this.$store.dispatch('user/signup', { username, password, email });
      this.progressActive = false;
    },
    async resetPassword() {
      const { email = '' } = this.account;
      this.progressActive = true;
      await this.$store.dispatch('user/resetPassword', { email });
      this.progressActive = false;
    },
    toggleTab(action) {
      if (action === this.tab) return;
      this.showPassword = false;
      this.account = {};
      this.tab = action;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Signin/account-form.scss';
</style>
