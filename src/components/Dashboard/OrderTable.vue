<template>
  <div class="order-table w-100">
    <!-- panel -->
    <div class="p-4">
      <OrderPanel @callSearch="search" @callSearchReset="searchReset" />
    </div>
    <!-- info -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l font-weight-semi-bold text-secondary mr-auto ">
        {{ filterOrders.length }} 筆訂單
      </p>
    </div>
    <!-- table -->
    <div class="p-4">
      <!-- table(header) -->
      <div class="table-header">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:300px;width:100%">
                商品
              </th>
              <th style="min-width:120px;max-width:140px" class="text-center">運送方式</th>
              <th style="min-width:120px;max-width:140px" class="text-center">買家應付金額</th>
              <th style="min-width:215px">買家資料</th>
              <th style="min-width:215px">
                <div class="d-flex align-items-center">
                  <p>狀態</p>
                  <span class="line mx-1"></span>
                  <p>時間</p>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <!-- table(list) - (骨架屏) -->
      <template v-if="skeletonTarget === 'orders'">
        <div class="table-responsive mt-3" v-for="index in 3" :key="index + 300">
          <table class="table text-secondary">
            <thead class="thead">
              <tr>
                <th style="min-width:300px;width:100%">
                  <div class="d-flex align-items-center">
                    <span class="avatar" style="opacity:0">
                      <font-awesome-icon :icon="['fas', 'user-circle']" />
                    </span>
                    <p class="ml-2 flex-1" style="max-width:140px"><PuSkeleton /></p>
                  </div>
                </th>
                <th style="min-width:120px;max-width:140px" class="text-center"></th>
                <th style="min-width:120px;max-width:140px" class="text-center"></th>
                <th style="min-width:430px" colspan="2">
                  <div class="d-flex align-items-center justify-content-end">
                    <p class="ml-1 flex-1" style="max-width:240px"><PuSkeleton /></p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in 3" :key="index">
                <td>
                  <div class="product">
                    <div style="flex: 0 0 56px"><PuSkeleton height="56px" /></div>
                    <div class="product__content text-gray ml-3 mr-2">
                      <p class="product__title"><PuSkeleton /></p>
                    </div>
                    <div class="product__qty flex-1 ml-auto" style="max-width:14px">
                      <PuSkeleton />
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <template v-if="index === 1">
                    <p class="text-gray mt-1"><PuSkeleton /></p>
                  </template>
                </td>
                <td class="text-center">
                  <template v-if="index === 1">
                    <p class="text-gray mt-1"><PuSkeleton /></p>
                  </template>
                </td>
                <td style="min-width:215px">
                  <template v-if="index === 1">
                    <p class="text-gray mt-1"><PuSkeleton /></p>
                  </template>
                </td>
                <td style="min-width:215px">
                  <template v-if="index === 1">
                    <p class="text-gray mt-1"><PuSkeleton /></p>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <!-- table(list) - (實體) -->
      <template v-else>
        <div class="table-responsive mt-3" v-for="item in sortAndSliceOrders" :key="item.id">
          <table class="table text-secondary">
            <thead class="thead">
              <tr>
                <th style="min-width:300px;width:100%">
                  <div class="d-flex align-items-center">
                    <span class="avatar"><font-awesome-icon :icon="['fas', 'user-circle']"/></span>
                    <p class="ml-2">{{ item.username }}</p>
                  </div>
                </th>
                <th style="min-width:120px;max-width:140px" class="text-center"></th>
                <th style="min-width:120px;max-width:140px" class="text-center"></th>
                <th style="min-width:430px" colspan="2">
                  <div class="d-flex align-items-center justify-content-end">
                    <span class="orderId">訂單編號</span>
                    <p class="ml-1">{{ item.id }}</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cartItem, index) in item.cart" :key="index">
                <td>
                  <div class="product">
                    <div
                      class="product__img"
                      :style="{ 'background-image': `url('${cartItem.product.imgUrl}')` }"
                    ></div>
                    <div class="product__content text-gray ml-3 mr-2">
                      <p class="product__title">{{ cartItem.product.title }}</p>
                      <div class="d-flex align-items-end mt-auto">
                        <template v-if="cartItem.coupon">
                          <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                          <p class="ml-1">{{ cartItem.coupon.percent / 10 }} 折</p>
                        </template>
                        <p class="ml-auto text-primary">
                          $<span class="product__total">{{ cartItem.final_total | currency }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="product__qty ml-auto">x{{ cartItem.qty }}</div>
                  </div>
                </td>
                <td class="text-center">
                  <template v-if="index === 0">
                    <p>+{{ item.shipping_method | shippingFee | currency | dollar }}</p>
                    <p class="text-gray mt-1">{{ item.shipping_method | translate }}</p>
                  </template>
                </td>
                <td class="text-center">
                  <template v-if="index === 0">
                    <p>
                      {{
                        ((item.shipping_method !== 't-cat' ? 60 : 120) + item.final_total)
                          | currency
                          | dollar
                      }}
                    </p>
                    <p class="text-gray mt-1">{{ item.payment_method | translate }}</p>
                  </template>
                </td>
                <td style="min-width:215px">
                  <template v-if="index === 0">
                    <ul class="info">
                      <li>
                        <p>購買人</p>
                        <span class="info__data">{{ item.user.name }}</span>
                      </li>
                      <li class="mt-2">
                        <p>收件地址</p>
                        <span class="info__data">{{ item.user.address }}</span>
                      </li>
                      <li class="mt-2">
                        <p>連絡電話</p>
                        <span class="info__data">{{ item.user.tel }}</span>
                      </li>
                      <li class="mt-2">
                        <p>電子信箱</p>
                        <span class="info__data">{{ item.user.email }}</span>
                      </li>
                      <li class="mt-2">
                        <p>備註</p>
                        <span class="info__data">{{ item.message }}</span>
                      </li>
                    </ul>
                  </template>
                </td>
                <td style="min-width:215px">
                  <template v-if="index === 0">
                    <ul class="timeline ml-4">
                      <li
                        class="timeline__item"
                        :class="{ 'timeline__item--active': item.status === 'unpaid' }"
                      >
                        <p>新訂單</p>
                        <span class="datetime">{{ item.created_at | datetime }}</span>
                      </li>
                      <li
                        class="timeline__item mt-2"
                        :class="{ 'timeline__item--cancel': item.status === 'cancelled' }"
                        v-if="item.cancel_date"
                      >
                        <p>訂單已取消</p>
                        <span class="datetime">{{ item.cancel_date | datetime }}</span>
                      </li>
                      <li
                        class="timeline__item mt-2"
                        :class="{ 'timeline__item--active': item.status === 'toship' }"
                        v-if="item.paid_date"
                      >
                        <p>買家已完成付款</p>
                        <span class="datetime">{{ item.paid_date | datetime }}</span>
                      </li>
                      <li class="timeline__item mt-2" v-if="item.status === 'toship'">
                        <div class="d-flex align-items-center">
                          <p>完成出貨</p>
                          <button
                            class="btn btn--primary py-0 px-1 ml-2 d-flex align-items-center"
                            @click.prevent="shipOrder(item.uid, item.id)"
                          >
                            <p>確定</p>
                            <span
                              class="ml-1 font-xxs"
                              v-if="spinner.id === item.id && spinner.action === 'ship'"
                            >
                              <font-awesome-icon :icon="['fas', 'spinner']" spin />
                            </span>
                          </button>
                        </div>
                      </li>
                      <li
                        class="timeline__item mt-2"
                        :class="{ 'timeline__item--active': item.status === 'shipping' }"
                        v-if="item.shipping_date"
                      >
                        <p>賣家已完成出貨</p>
                        <span class="datetime">{{ item.shipping_date | datetime }}</span>
                      </li>
                      <li
                        class="timeline__item mt-2"
                        :class="{ 'timeline__item--active': item.status === 'arrived' }"
                        v-if="item.arrival_date"
                      >
                        <p>商品以送達</p>
                        <span class="datetime">{{ item.arrival_date | datetime }}</span>
                      </li>
                      <li
                        class="timeline__item mt-2"
                        :class="{ 'timeline__item--active': item.status === 'completed' }"
                        v-if="item.complete_date"
                      >
                        <p>訂單已完成</p>
                        <span class="datetime">{{ item.complete_date | datetime }}</span>
                      </li>
                    </ul>
                  </template>
                </td>
              </tr>
              <!-- fill -->
              <tr v-if="item.cart.length <= 2">
                <td>
                  <div style="height:56px"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <!-- table(footer) -->
      <div class="table-footer d-flex align-items-center justify-content-end px-3 py-2 mt-3">
        <!-- dropdown -->
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <!-- pagination -->
        <div class="ml-3">
          <Pagination
            :length="filterOrders.length"
            :row="row"
            :forceResetKey="forceResetKey"
            @callPageToggle="pageToggle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import OrderPanel from '@/components/Dashboard/OrderPanel.vue';
import Dropdown from '@/components/common/Dropdown.vue';
import Pagination from '@/components/common/Pagination.vue';

export default {
  components: {
    OrderPanel,
    Dropdown,
    Pagination,
  },
  data() {
    return {
      row: 12,
      page: 1,
      sortMode: 'down',
      sortTarget: 'created_at',
      searchTarget: '',
      searchTargetValue: '',
      searchDateRange: [],
      forceResetKey: Date.now(),
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    rowToggle(row) {
      this.row = row;
      this.page = 1;
    },
    pageToggle(page) {
      this.page = page;
    },
    search(input) {
      this.searchTarget = input.searchTarget;
      this.searchTargetValue = input.searchTargetValue;
      this.searchDateRange = input.searchDateRange;
    },
    searchReset() {
      this.searchTarget = '';
      this.searchTargetValue = '';
      this.searchDateRange = [];
    },
    paginationReset() {
      this.forceResetKey = Date.now();
      this.page = 1;
    },
    async shipOrder(uid, orderId) {
      this.spinner = { id: orderId, action: 'ship' };
      await this.$store.dispatch('orders/shipOrder', { uid, orderId });
      this.spinner = { id: '', action: '' };
    },
  },
  computed: {
    filterOrders() {
      const vm = this;
      vm.paginationReset(); // reset pagination page
      const { tab } = vm.$route.params;
      const orders = [...vm.orders]; // fix call by reference
      const needFilter = vm.searchTargetValue || vm.searchDateRange.length > 0;
      const statusFilter = orders.filter((item) => {
        if (tab === 'unpaid') return item.status === 'unpaid';
        if (tab === 'toship') return item.status === 'toship';
        if (tab === 'shipping') return item.status === 'shipping' || item.status === 'arrived';
        if (tab === 'completed') return item.status === 'completed';
        if (tab === 'cancelled') return item.status === 'cancelled';
        return item;
      });
      if (needFilter) {
        return statusFilter
          .filter((item) => {
            if (vm.searchTargetValue) {
              const [key, value] = [vm.searchTarget, vm.searchTargetValue];
              return item[key === '訂單編號' ? 'id' : 'username'].match(value);
            }
            return item;
          })
          .filter((item) => {
            if (vm.searchDateRange.length > 0) {
              const [start, end] = [vm.searchDateRange[0], vm.searchDateRange[1]];
              return item.created_at >= start && item.created_at <= end;
            }
            return item;
          });
      }
      return statusFilter;
    },
    sortAndSliceOrders() {
      const vm = this;
      const orders = [...vm.filterOrders]; // fix call by reference
      const [sortA, sortB] = vm.sortMode === 'down' ? [-1, 1] : [1, -1];
      const [startItem, endItem] = [(vm.page - 1) * vm.row, vm.page * vm.row];
      return orders
        .sort((a, b) => (a[vm.sortTarget] > b[vm.sortTarget] ? sortA : sortB))
        .slice(startItem, endItem);
    },
    ...mapState('orders', ['orders']),
    ...mapState(['skeletonTarget']),
  },
  filters: {
    shippingFee(value) {
      if (value === '7-11') return 60;
      if (value === 'family') return 60;
      return 120;
    },
    translate(value) {
      if (value === '7-11') return '7-11 純取貨';
      if (value === 'family') return '全家純取貨';
      if (value === 't-cat') return '黑貓宅急便';
      if (value === 'atm') return 'ATM 轉帳';
      if (value === 'credit_card') return '信用卡一次付清';
      return value;
    },
  },
  created() {
    this.$store.dispatch('orders/getOrders', { role: 'admin' });
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-table.scss';
</style>
