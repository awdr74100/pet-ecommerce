<template>
  <div class="order-panel text-secondary">
    <div class="row">
      <div class="col-md-6">
        <div class="order-panel__group">
          <div class="order-panel__dropdown pl-3" @click="dropdownToggle">
            <p>{{ dropdownTarget }}</p>
            <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
              <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
            </span>
            <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': dropdownTarget === '訂單編號' }"
              >
                訂單編號
              </li>
              <li
                class="list__item px-3 py-2"
                :class="{ 'list__item--active': dropdownTarget === '購買人姓名' }"
              >
                購買人姓名
              </li>
            </ul>
            <span class="line"></span>
          </div>
          <input class="order-panel__input pl-max" type="text" placeholder="請輸入" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="order-panel__group mt-md-0 mt-3">
          <p class="mr-3 white-nowrap">訂單成立時間 (單)</p>
          <DatePicker />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from '@/components/common/DatePicker.vue';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      dropdownActive: false,
      dropdownTarget: '訂單編號',
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName === 'LI') {
        this.dropdownTarget = e.target.textContent.trim();
        this.dropdownActive = !this.dropdownActive;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-panel';
</style>
