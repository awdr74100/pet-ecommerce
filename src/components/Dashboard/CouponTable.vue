<template>
  <div class="coupon-table w-100">
    <!-- section -->
    <div class="d-flex align-items-center p-4 pb-1">
      <p class="font-l text-secondary mr-auto">{{ filterCoupons.length }} 張優惠卷</p>
      <button
        class="btn btn--primary btn--lg"
        @click.prevent="openModal('add-edit-coupon-modal', undefined, undefined, undefined)"
      >
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
                <input
                  type="checkbox"
                  class="checkbox m-0"
                  v-model="selectAll"
                  :disabled="sortAndSliceCoupons.length === 0"
                />
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
            <!-- 骨架屏 -->
            <template v-if="skeletonTarget === 'coupons'">
              <tr v-for="index in row" :key="index">
                <td><PuSkeleton height="16px" /></td>
                <td class="d-flex align-items-center">
                  <div style="flex: 0 0 56px"><PuSkeleton height="56px" /></div>
                  <div class="ml-3" style="width:100%">
                    <p class="mb-1" style="max-width:160px"><PuSkeleton /></p>
                    <p><PuSkeleton /></p>
                  </div>
                </td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td><PuSkeleton /></td>
                <td>
                  <p class="mb-1"><PuSkeleton width="60px" /></p>
                  <p><PuSkeleton /></p>
                </td>
                <td><PuSkeleton /></td>
              </tr>
            </template>
            <!-- 實體 -->
            <template v-else>
              <tr v-for="(item, index) in sortAndSliceCoupons" :key="index">
                <td>
                  <input type="checkbox" class="checkbox m-0" :value="item" v-model="selected" />
                </td>
                <td>
                  <div class="coupon">
                    <div class="coupon__img">
                      <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x"/></span>
                    </div>
                    <div class="coupon__overlay" v-if="!item.is_enabled">
                      <span class="text-white">
                        <font-awesome-icon :icon="['fas', 'ban']" size="lg" />
                      </span>
                    </div>
                    <div class="ml-3">
                      <p class="coupon__code mb-1">{{ item.code }}</p>
                      <span class="coupon__title">{{ item.title }}</span>
                    </div>
                  </div>
                </td>
                <td>賣場折扣卷</td>
                <td>{{ item.percent }}%</td>
                <td class="text-success" v-if="item.is_enabled">啟用</td>
                <td class="text-danger" v-else>禁用</td>
                <td>
                  <div class="d-flex flex-column align-items-start">
                    <p
                      class="target target--scheduled mb-1"
                      v-if="item.effective_date > Date.now()"
                    >
                      即將開始
                    </p>
                    <p
                      class="target target--underway mb-1"
                      v-else-if="item.effective_date <= Date.now() && item.due_date >= Date.now()"
                    >
                      進行中
                    </p>
                    <p class="target target--over mb-1" v-else>已結束</p>
                    <p>{{ item.effective_date | datetime }} 至 {{ item.due_date | datetime }}</p>
                  </div>
                </td>
                <td class="text-center">
                  <span
                    class="icon"
                    @click.prevent="openModal('add-edit-coupon-modal', item, undefined, undefined)"
                  >
                    <font-awesome-icon :icon="['far', 'edit']" />
                  </span>
                  <span
                    class="icon ml-3"
                    @click="openModal('delete-coupon-modal', undefined, [{ ...item }], undefined)"
                  >
                    <font-awesome-icon :icon="['far', 'trash-alt']" />
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!-- (foot) - fix scroll problem -->
      <div class="tfoot d-flex align-items-center justify-content-end px-3 py-2">
        <!-- dropdown component -->
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <!-- pagination component -->
        <div class="ml-3">
          <Pagination
            :length="filterCoupons.length"
            :row="row"
            :resetKey="resetKey"
            @callPageToggle="pageToggle"
          />
        </div>
      </div>
    </div>
    <!-- batch action -->
    <div class="batch mt-3" v-if="showBatchAction">
      <div class="d-flex align-items-center text-secondary">
        <div class="d-flex align-items-center ml-3">
          <input type="checkbox" class="checkbox m-0" id="selectAll" v-model="selectAll" />
          <label for="selectAll" class="pl-3 cursor-pointer d-md-inline d-none"
            >選擇本頁全部優惠卷</label
          >
          <label for="selectAll" class="pl-3 cursor-pointer d-md-none d-inline">全選</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p class="d-md-inline d-none">已選擇 {{ selected.length }} 張優惠卷</p>
          <button
            class="btn btn--transparent btn--sm ml-3"
            @click.prevent="openModal('delete-coupon-modal', undefined, selected, undefined)"
          >
            刪除
          </button>
          <button
            class="btn btn--transparent btn--sm ml-3"
            v-if="showDisableButton"
            @click.prevent="openModal('change-status-coupon-modal', undefined, selected, false)"
          >
            禁用
          </button>
          <button
            class="btn btn--primary btn--sm ml-3"
            v-if="showEnableButton"
            @click.prevent="openModal('change-status-coupon-modal', undefined, selected, true)"
          >
            啟用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
      selected: [],
      resetKey: Date.now(),
    };
  },
  methods: {
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
    selectReset() {
      this.selected = [];
    },
    paginationReset() {
      this.resetKey = Date.now();
      this.page = 1;
    },
    openModal(modal, cache = {}, caches = [], isEnabled) {
      const cachesFilter = [];
      if (isEnabled !== undefined) {
        cachesFilter[0] = isEnabled ? 'enable' : 'disable';
        cachesFilter[1] = caches.length;
        cachesFilter[2] = caches.filter((item) => isEnabled !== item.is_enabled);
        cachesFilter[3] = cachesFilter[1] - cachesFilter[2].length;
      }
      this.$store.commit('modal/OPENMODAL', {
        modal,
        cache,
        caches: cachesFilter.length > 0 ? cachesFilter : caches,
      });
    },
    ...mapActions('coupons', ['getCoupons']),
  },
  computed: {
    selectAll: {
      get() {
        return this.sortAndSliceCoupons.length > 0
          ? this.selected.length === this.sortAndSliceCoupons.length
          : false;
      },
      set(value) {
        if (value) {
          this.selected = this.sortAndSliceCoupons;
        } else {
          this.selected = [];
        }
      },
    },
    showBatchAction() {
      return this.selected.length > 0;
    },
    showEnableButton() {
      return this.selected.filter((item) => !item.is_enabled).length > 0;
    },
    showDisableButton() {
      return this.selected.filter((item) => item.is_enabled).length > 0;
    },
    filterCoupons() {
      const vm = this;
      vm.selectReset(); // reset this.selected
      vm.paginationReset(); // reset pagination page
      const { tab } = vm.$route.params;
      const coupons = [...vm.coupons]; // fix call by reference
      return coupons.filter((item) => {
        if (tab === 'scheduled') return item.effective_date > Date.now();
        if (tab === 'underway') {
          const now = Date.now();
          return item.effective_date <= now && item.due_date >= now;
        }
        if (tab === 'over') return item.due_date < Date.now();
        if (tab === 'not_enabled') return !item.is_enabled;
        return item;
      });
    },
    sortAndSliceCoupons() {
      const vm = this;
      vm.selectReset(); // reset this.selected
      const coupons = [...vm.filterCoupons]; // fix call by reference
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      const [startItem, endItem] = [(vm.page - 1) * vm.row, vm.page * vm.row];
      if (vm.sortTarget) {
        return coupons
          .sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB))
          .slice(startItem, endItem);
      }
      return coupons.slice(startItem, endItem);
    },
    ...mapState('coupons', ['coupons']),
    ...mapState(['skeletonTarget']),
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/coupon-table.scss';
</style>
