<template>
  <div class="coupon-table">
    <!-- section -->
    <div class="d-flex align-items-center p-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 優惠卷</p>
      <button class="btn btn--primary btn--lg" @click.prevent="openModal('coupon-add-edit-modal')">
        <p>
          <span class="mr-1"><font-awesome-icon :icon="['fas', 'plus']"/></span>產生新的優惠卷
        </p>
      </button>
    </div>
    <!-- table -->
    <div class="p-4">
      <!-- (head, body) -->
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:40px">
                <input type="checkbox" class="checkbox m-0" />
              </th>
              <th style="min-width:250px;width:100%">
                <div class="d-flex align-items-center">
                  <p>優惠卷代碼</p>
                  <span class="line mx-1"></span>
                  <p>優惠卷名稱</p>
                </div>
              </th>
              <th style="min-width:100px">折扣類型</th>
              <th style="min-width:160px" data-sort="true" @click="sortToggle('percent')">
                <div class="d-flex align-items-center">
                  <p>折扣額度 (百分比)</p>
                  <span
                    class="sort"
                    :class="{
                      'sort--active': sortTarget === 'percent',
                      'sort--rotate': sortMode === 'up' && sortTarget === 'percent',
                    }"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-down']" />
                  </span>
                </div>
              </th>
              <th style="min-width:90px">是否啟用</th>
              <th style="min-width:205px">
                <div class="d-flex align-items-center">
                  <p>狀態</p>
                  <span class="line mx-1"></span>
                  <p>期間</p>
                </div>
              </th>
              <th style="min-width:90px" class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 3" :key="index">
              <td>
                <input type="checkbox" class="checkbox m-0" />
              </td>
              <td>
                <div class="coupon">
                  <div class="coupon__img">
                    <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x"/></span>
                  </div>
                  <div class="ml-3">
                    <p class="coupon__code mb-1">
                      ALC55DWD
                    </p>
                    <span class="coupon__title">周年慶，全館商品 95 折</span>
                  </div>
                </div>
              </td>
              <td>賣場折扣卷</td>
              <td>70%</td>
              <td>啟用</td>
              <td>
                <div class="d-flex flex-column align-items-start">
                  <p class="target target--scheduled">即將開始</p>
                  <p>2020-08-27 至 2020-08-30</p>
                </div>
              </td>
              <td class="text-center">
                <span class="icon">
                  <font-awesome-icon :icon="['far', 'edit']" />
                </span>
                <span class="icon ml-3" @click="openModal('coupon-delete-modal')">
                  <font-awesome-icon :icon="['far', 'trash-alt']" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- (tfoot) -->
      <div class="tfoot d-flex align-items-center justify-content-end px-3 py-2">
        <!-- dropdown component -->
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <!-- pagination component -->
        <div class="ml-3">
          <Pagination :length="33" :row="row" @callPageToggle="pageToggle" />
        </div>
      </div>
    </div>
    <!-- batch action -->
    <div class="p-4 pt-5">
      <div class="d-flex align-items-center text-secondary">
        <div class="align-items-center ml-2 d-none d-md-flex">
          <input type="checkbox" class="checkbox m-0" id="selectAll" />
          <label for="selectAll" class="ml-3 cursor-pointer">選擇本頁全部優惠卷</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p>已選擇 1 張優惠卷</p>
          <button class="btn btn--danger btn--sm mx-3">刪除</button>
          <button
            class="btn btn--transparent btn--sm"
            @click.prevent="openModal('coupon-enabled-modal')"
          >
            禁用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/common/Dropdown.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    Dropdown,
    Pagination,
  },
  data() {
    return {
      row: 12,
      page: 1,
      sortMode: 'down',
      sortTarget: '',
      selectTargets: [],
    };
  },
  methods: {
    openModal(modal) {
      this.$store.commit('modal/OPENMODAL', { modal });
    },
    sortToggle(target) {
      if (this.sortTarget === target) {
        this.sortMode = this.sortMode === 'down' ? 'up' : 'down';
      } else {
        this.sortMode = 'down';
        this.sortTarget = target;
      }
    },
    rowToggle(row) {
      this.row = row;
      this.page = 1;
    },
    pageToggle(page) {
      this.page = page;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/coupon-table.scss';
</style>
