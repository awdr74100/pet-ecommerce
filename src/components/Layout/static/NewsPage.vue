<template>
  <div class="w-100 h-100">
    <!-- news list -->
    <section class="text-secondary">
      <ul class="list">
        <li class="list__item py-4">
          <div class="row">
            <div class="col-md-5">
              <div class="img img--news1"></div>
            </div>
            <div class="col-md-7">
              <div class="d-flex flex-column align-items-start h-100">
                <p class="py-2 px-3 bg-primary text-white mt-md-0 mt-4">最新消息</p>
                <h2 class="font-xl font-weight-semi-bold mt-4">
                  「毛孩百貨」10月7日 (一) 正式開幕
                </h2>
                <span class="text-gray mt-4 d-flex align-items-center">
                  <span class="mr-2"><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p>2020-09-24</p>
                </span>
                <div class="hr w-100 my-4"></div>
                <p class="description mb-3">
                  毛孩百貨正式開幕，各種品牌寵物用品，應有盡有，滿足你對毛小孩用品的各種需求。
                </p>
                <div class="ml-auto mt-auto">
                  <a
                    href="#"
                    class="btn btn--outline--primary btn--lg px-4 d-flex align-items-cneter"
                    @click.prevent="alert"
                  >
                    <p>閱讀更多</p>
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list__item py-4">
          <div class="row">
            <div class="col-md-5">
              <div class="img img--news2"></div>
            </div>
            <div class="col-md-7">
              <div class="d-flex flex-column align-items-start h-100">
                <p class="py-2 px-3 bg-primary text-white mt-md-0 mt-4">最新消息</p>
                <h2 class="font-xl font-weight-semi-bold mt-4">
                  慶開幕，全館商品9折起
                </h2>
                <span class="text-gray mt-4 d-flex align-items-center">
                  <span class="mr-2"><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p>2020-09-24</p>
                </span>
                <div class="hr w-100 my-4"></div>
                <p class="description mb-3">
                  慶祝網站開幕，各項品牌商品9折起，優惠代碼請看結帳頁面，機會難得，請好好把握！
                </p>
                <div class="ml-auto mt-auto">
                  <a
                    href="#"
                    class="btn btn--outline--primary btn--lg px-4 d-flex align-items-cneter"
                    @click.prevent="alert"
                  >
                    <p>閱讀更多</p>
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list__item py-4">
          <div class="row">
            <div class="col-md-5">
              <div class="img img--news3"></div>
            </div>
            <div class="col-md-7">
              <div class="d-flex flex-column align-items-start h-100">
                <p class="py-2 px-3 bg-primary text-white mt-md-0 mt-4">最新消息</p>
                <h2 class="font-xl font-weight-semi-bold mt-4">
                  夏天到了，該來消暑一下了
                </h2>
                <span class="text-gray mt-4 d-flex align-items-center">
                  <span class="mr-2"><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p>2020-09-24</p>
                </span>
                <div class="hr w-100 my-4"></div>
                <p class="description mb-3">
                  夏天即將到來，該讓毛孩清涼一下了，新增寵物洗澡用品以及戶外生活用品，詳情請看商品列表。
                </p>
                <div class="ml-auto mt-auto">
                  <a
                    href="#"
                    class="btn btn--outline--primary btn--lg px-4 d-flex align-items-cneter"
                    @click.prevent="alert"
                  >
                    <p>閱讀更多</p>
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list__item py-4">
          <div class="row">
            <div class="col-md-5">
              <div class="img img--news4"></div>
            </div>
            <div class="col-md-7">
              <div class="d-flex flex-column align-items-start h-100">
                <p class="py-2 px-3 bg-primary text-white mt-md-0 mt-4">最新消息</p>
                <h2 class="font-xl font-weight-semi-bold mt-4">
                  中秋節到來，寵物是否可以吃烤肉呢？
                </h2>
                <span class="text-gray mt-4 d-flex align-items-center">
                  <span class="mr-2"><font-awesome-icon :icon="['far', 'calendar-alt']"/></span>
                  <p>2020-09-24</p>
                </span>
                <div class="hr w-100 my-4"></div>
                <p class="description mb-3">
                  中秋節到來，香噴噴的烤肉令人胃口大開，不過千萬要注意，寵物是不太能吃烤肉的，相關知識請看網路報導。
                </p>
                <div class="ml-auto mt-auto">
                  <a
                    href="#"
                    class="btn btn--outline--primary btn--lg px-4 d-flex align-items-cneter"
                    @click.prevent="alert"
                  >
                    <p>閱讀更多</p>
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      const message = '尚在更新中';
      this.$store.dispatch('notification/updateMessage', { message, status: 'warning' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/static/news-page.scss';
</style>
