<template>
  <div class="order-panel text-secondary">
    <form @submit.prevent="search">
      <div class="row">
        <div class="col-md-6">
          <div class="order-panel__group">
            <div class="order-panel__dropdown pl-3" @click="dropdownToggle">
              <p>{{ searchTarget }}</p>
              <span class="icon ml-auto mr-3" :class="{ 'icon--rotate': dropdownActive }">
                <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
              </span>
              <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
                <li
                  class="list__item px-3 py-2"
                  :class="{ 'list__item--active': searchTarget === '訂單編號' }"
                >
                  訂單編號
                </li>
                <li
                  class="list__item px-3 py-2"
                  :class="{ 'list__item--active': searchTarget === '購買人姓名' }"
                >
                  購買人姓名
                </li>
              </ul>
              <span class="line"></span>
            </div>
            <input
              class="order-panel__input pl-max"
              type="text"
              placeholder="請輸入"
              v-model="searchTargetValue"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="order-panel__group mt-md-0 mt-3">
            <p class="mr-3 white-nowrap">訂單成立時間</p>
            <date-picker
              type="date"
              value-type="timestamp"
              v-model="searchDateRange"
              @clear="datePickerClear"
              :range="true"
            />
          </div>
        </div>
      </div>
      <div class="row no-gutters mt-4">
        <button type="submit" class="btn btn--primary btn--md" @click.prevent="search">搜尋</button>
        <button
          type="button"
          class="btn btn--transparent btn--md ml-3"
          @click.prevent="searchReset"
        >
          重設
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      searchTarget: '訂單編號',
      searchTargetValue: '',
      searchDateRange: [
        new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()).getTime(),
        new Date(new Date().toDateString()).getTime(),
      ],
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName === 'LI') {
        this.searchTarget = e.target.textContent.trim();
        this.dropdownActive = !this.dropdownActive;
      }
    },
    datePickerClear() {
      this.searchDateRange = [
        new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()).getTime(),
        new Date(new Date().toDateString()).getTime(),
      ];
    },
    search() {
      this.$emit('callSearch', {
        searchTarget: this.searchTarget,
        searchTargetValue: this.searchTargetValue,
        searchDateRange: this.searchDateRange,
      });
    },
    searchReset() {
      this.searchTarget = '訂單編號';
      this.searchTargetValue = '';
      this.searchDateRange = [
        new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()).getTime(),
        new Date(new Date().toDateString()).getTime(),
      ];
      this.$emit('callSearchReset');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-panel';
</style>
