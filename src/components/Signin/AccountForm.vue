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
    <ValidationObserver ref="signin-form" slim>
      <form @submit.prevent="signin" class="mt-3" v-if="tab === 'signin'">
        <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
          <div class="account-form__group">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'user']"/></span>
            <input
              type="text"
              class="account-form__input text-secondary"
              autocomplete="on"
              placeholder="使用者名稱/電子郵件"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.usernameOrEmail"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
          <div class="account-form__group mt-1">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="account-form__input text-secondary"
              autocomplete="on"
              placeholder="密碼"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.password"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
            <button
              type="button"
              tabindex="-1"
              class="btn p-0 hide-btn"
              @click="showPassword = !showPassword"
            >
              <span class="text-secondary" v-if="showPassword">
                <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
              </span>
              <span class="text-secondary" v-else>
                <font-awesome-icon :icon="['far', 'eye-slash']" />
              </span>
            </button>
          </div>
        </ValidationProvider>
        <div class="d-flex align-items-center mt-1 mb-3">
          <input type="checkbox" class="checkbox" id="isAdmin" v-model="isAdmin" />
          <label class="checkbox-label ml-1" for="isAdmin">系統管理員</label>
        </div>
        <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signin">
          登入
        </button>
        <a href="#" class="forget mt-3" @click.prevent="toggleTab('reset')">忘記密碼？</a>
      </form>
    </ValidationObserver>
    <!-- signup form -->
    <ValidationObserver ref="signup-form" slim>
      <form @submit.prevent="signup" class="mt-3" v-if="tab === 'signup'">
        <ValidationProvider rules="required|include" v-slot="{ errors, failed }" slim>
          <div class="account-form__group">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'user']"/></span>
            <input
              type="text"
              class="account-form__input text-secondary"
              autocomplete="on"
              placeholder="使用者名稱"
              maxlength="10"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.username"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
          <div class="account-form__group mt-1">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="account-form__input text-secondary"
              autocomplete="on"
              placeholder="密碼"
              maxlength="12"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.password"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
            <button
              type="button"
              tabindex="-1"
              class="btn p-0 hide-btn"
              @click="showPassword = !showPassword"
            >
              <span class="text-secondary" v-if="showPassword">
                <font-awesome-icon :icon="['far', 'eye']" v-if="showPassword" />
              </span>
              <span class="text-secondary" v-else>
                <font-awesome-icon :icon="['far', 'eye-slash']" />
              </span>
            </button>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required|email" v-slot="{ errors, failed }" slim>
          <div class="account-form__group mt-1 mb-3">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
            <input
              type="text"
              class="account-form__input text-secondary"
              autocomplete="on"
              placeholder="電子郵件"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.email"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
        <button class="btn btn--primary btn--block account-form__btn" @click.prevent="signup">
          註冊
        </button>
      </form>
    </ValidationObserver>
    <!-- reset form -->
    <ValidationObserver ref="reset-form" slim>
      <form @submit.prevent="reset" class="mt-3" v-if="tab === 'reset'">
        <p class="py-1">發送密碼重置郵件</p>
        <ValidationProvider rules="required|email" v-slot="{ errors, failed }" slim>
          <div class="account-form__group mt-3 mb-3">
            <span class="account-form__icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
            <input
              type="text"
              class="account-form__input text-secondary"
              placeholder="電郵地址"
              :class="{ 'account-form__input--error': failed }"
              v-model="account.email"
            />
            <small class="account-form__error" v-if="failed">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
        <button
          class="btn btn--primary btn--block account-form__btn"
          @click.prevent="resetPassword"
        >
          發送
        </button>
      </form>
    </ValidationObserver>
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
      const valid = await this.$refs['signin-form'].validate();
      if (!valid) return;
      const { usernameOrEmail, password } = this.account;
      this.progressActive = true;
      const role = this.isAdmin ? 'admin' : 'user';
      await this.$store.dispatch(`${role}/signin`, { usernameOrEmail, password });
      this.progressActive = false;
    },
    async signup() {
      const valid = await this.$refs['signup-form'].validate();
      if (!valid) return;
      const { username, password, email } = this.account;
      this.progressActive = true;
      await this.$store.dispatch('user/signup', { username, password, email });
      this.progressActive = false;
    },
    async resetPassword() {
      const valid = await this.$refs['reset-form'].validate();
      if (!valid) return;
      const { email } = this.account;
      this.progressActive = true;
      await this.$store.dispatch('user/resetPassword', { email });
      this.progressActive = false;
    },
    toggleTab(action) {
      if (action === this.tab) return;
      this.showPassword = false;
      this.tab = action;
      this.account = {};
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Signin/account-form.scss';
</style>
