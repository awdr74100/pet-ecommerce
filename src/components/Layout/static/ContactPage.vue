<template>
  <div class="w-100 h-100">
    <!-- map -->
    <section class="text-secondary">
      <div class="row no-gutters">
        <div class="col-md-4">
          <div class="d-flex flex-column p-5">
            <h5 class="title font-weight-semi-bold mt-3">聯絡資訊</h5>
            <span class="highlight bg-primary my-3"></span>
            <p class="text mt-3">地址：台北市南港區三重路19之6號7樓(南港軟體園區C棟)</p>
            <p class="text mt-3">電話：02-0000-0000</p>
            <p class="text mt-3">傳真：02-0000-0000</p>
            <p class="text mt-3">手機：0912-345678</p>
            <p class="text mt-3">郵箱：service@gmail.com</p>
            <p class="text mt-3 mb-3">
              營業時間：週一至周五 10:00~21:30，週六週日 11:00~ 21:00(例假日無提供電話客服)
            </p>
          </div>
        </div>
        <div class="col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3223004349193!2d121.61154831507827!3d25.05706298396157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab5881ed5a01%3A0xf1fd9515ad913fc4!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5LiJ6YeN6LevMTktNuiZnw!5e0!3m2!1szh-TW!2stw!4v1600880598802!5m2!1szh-TW!2stw"
            class="w-100"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>
    <!-- form -->
    <section class="text-secondary">
      <div class="d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 class="font-m font-weight-semi-bold text-center text-secondary">聯絡表單</h2>
        <span class="line bg-secondary mt-2"></span>
      </div>
      <div class="d-flex flex-column align-items-center mt-4">
        <span class="text-gray text-center text mb-4 px-3"
          >如果您有任何疑問，或想回饋反映的意見，歡迎與我們聯繫。</span
        >
        <ValidationObserver ref="send-form" slim>
          <form class="form w-100 mb-5 p-3" @submit.prevent="send">
            <div class="d-flex w-100">
              <label for="name" class="white-nowrap mr-3 mt-2 d-md-inline d-none">你的姓名*</label>
              <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                <div class="form__group flex-1">
                  <input
                    type="text"
                    id="name"
                    class="form__input w-100"
                    placeholder="我們該怎麼稱呼你？"
                    :class="{ 'form__input--error': failed }"
                    v-model="user.name"
                  />
                  <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                </div>
              </ValidationProvider>
            </div>
            <div class="d-flex w-100 mt-1">
              <label for="tel" class="white-nowrap mr-3 mt-2 d-md-inline d-none">聯繫方式*</label>
              <ValidationProvider rules="required|tel" v-slot="{ errors, failed }" slim>
                <div class="form__group flex-1">
                  <input
                    type="tel"
                    id="tel"
                    class="form__input w-100"
                    placeholder="電話號碼"
                    :class="{ 'form__input--error': failed }"
                    v-model="user.tel"
                  />
                  <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                </div>
              </ValidationProvider>
              <ValidationProvider rules="email" v-slot="{ errors, failed }" slim>
                <div class="form__group flex-1 ml-3">
                  <input
                    type="email"
                    id="email"
                    class="form__input w-100"
                    placeholder="電子郵件(選填)"
                    :class="{ 'form__input--error': failed }"
                    v-model="user.email"
                  />
                  <small class="form__error" v-if="failed">{{ errors[0] }}</small>
                </div>
              </ValidationProvider>
            </div>
            <div class="d-flex w-100 mt-1">
              <label for="message" class="white-nowrap mr-3 mt-1 d-md-inline d-none"
                >訊息內容*</label
              >
              <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                <div class="flex-1 position-relative">
                  <textarea
                    id="message"
                    rows="8"
                    class="form__textarea w-100"
                    placeholder="訊息內容"
                    :class="{ 'form__textarea--error': failed }"
                    v-model="user.message"
                  ></textarea>
                  <small class="form__error" style="bottom:-14px" v-if="failed">{{
                    errors[0]
                  }}</small>
                </div>
              </ValidationProvider>
            </div>
            <div class="w-100 mt-4 d-md-flex d-none">
              <label class="form__hidden white-nowrap mr-3 d-md-inline d-none">填充文字*</label>
              <button
                class="btn btn--primary btn--md d-flex align-items-center"
                @click.prevent="send"
              >
                <p>送出訊息</p>
                <span class="ml-2" v-if="spinner.action === 'send'">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin />
                </span>
              </button>
            </div>
            <div class="mt-4 d-md-none d-flex justify-content-center">
              <button
                class="btn btn--primary btn--md d-flex align-items-center"
                @click.prevent="send"
              >
                <p>送出訊息</p>
                <span class="ml-2" v-if="spinner.action === 'send'">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin />
                </span>
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        tel: '',
        email: '',
        message: '',
      },
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    async send() {
      const valid = await this.$refs['send-form'].validate();
      if (!valid) return;
      this.spinner.action = 'send';
      setTimeout(() => {
        const message = '成功送出';
        this.$store.dispatch('notification/updateMessage', { message, status: 'success' });
        this.spinner.action = '';
      }, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/contact-page.scss';
</style>
