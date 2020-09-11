<template>
  <div class="order-table">
    <!-- order panel -->
    <div class="p-4">
      <OrderPanel @callSearch="search" @callSearchReset="searchReset" />
    </div>
    <!-- section -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 筆訂單</p>
    </div>
    <!-- table section -->
    <div class="p-4">
      <!-- table header -->
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
      <!-- table list -->
      <div class="table-responsive mt-3" :class="{ 'table-responsive--active': true }">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:300px;width:100%">
                <div class="d-flex align-items-center">
                  <span class="avatar"><font-awesome-icon :icon="['fas', 'user-circle']"/></span>
                  <p class="ml-2">Apenny7066</p>
                </div>
              </th>
              <th style="min-width:120px;max-width:140px" class="text-center"></th>
              <th style="min-width:120px;max-width:140px" class="text-center"></th>
              <th style="min-width:430px" colspan="2">
                <div class="d-flex align-items-center justify-content-end">
                  <span class="orderId">訂單編號</span>
                  <p class="ml-1">-MFWAgr96vQtLw8YH9dG</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 2" :key="index">
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="product__content text-gray ml-3 mr-2">
                    <p class="product__title">
                      Moshi Helios Mini 時尚雙肩迷你後背包（都會遊獵系列，2018
                      SS，橄欖綠）13吋電腦包 筆電
                    </p>
                    <div class="d-flex align-items-end mt-auto">
                      <template>
                        <span><font-awesome-icon :icon="['fas', 'tag']" size="sm"/></span>
                        <p class="ml-1">3.6 折</p>
                      </template>
                      <p class="ml-auto text-primary">$<span class="product__total">2,400</span></p>
                    </div>
                  </div>
                  <div class="product__qty ml-auto">x2</div>
                </div>
              </td>
              <td class="text-center">
                <template v-if="index === 1">
                  <p>+$60</p>
                  <p class="text-gray mt-1">黑貓宅急便</p>
                </template>
              </td>
              <td class="text-center">
                <template v-if="index === 1">
                  <p>$3,500</p>
                  <p class="text-gray mt-1">信用卡</p>
                </template>
              </td>
              <td style="min-width:215px">
                <template v-if="index === 1">
                  <ul class="info">
                    <li class="info__item">
                      <p>購買人</p>
                      <span>藍奕濡</span>
                    </li>
                    <li class="info__item mt-2">
                      <p>收件地址</p>
                      <span>台南市永康區中正南路592巷38弄14號</span>
                    </li>
                    <li class="info__item mt-2">
                      <p>連絡電話</p>
                      <span>0972791303</span>
                    </li>
                    <li class="info__item mt-2">
                      <p>電子信箱</p>
                      <span>4a6g0068@stust.edu.tw</span>
                    </li>
                    <li class="info__item mt-2">
                      <p>備註</p>
                      <span>請使用紙箱將其包裝</span>
                    </li>
                  </ul>
                </template>
              </td>
              <td style="min-width:215px">
                <template v-if="index === 1">
                  <ul class="timeline ml-4">
                    <li class="timeline__item">
                      <p>新訂單</p>
                      <span>2020-03-14 15:27</span>
                    </li>
                    <!-- <li class="timeline__item mt-2">
                      <p>訂單已取消</p>
                      <span>2020-03-19 01:36</span>
                    </li> -->
                    <li class="timeline__item mt-2">
                      <p>買家已完成付款</p>
                      <span>2020-03-19 01:36</span>
                    </li>
                    <li class="timeline__item mt-2">
                      <div class="d-flex align-items-center">
                        <p>完成出貨</p>
                        <button class="btn btn--primary py-0 px-1 ml-2">ok</button>
                      </div>
                    </li>
                    <li class="timeline__item mt-2">
                      <p>賣家已完成出貨</p>
                      <span>2020-03-19 01:36</span>
                    </li>
                    <li class="timeline__item mt-2">
                      <p>商品以送達</p>
                      <span>2020-03-19 01:36</span>
                    </li>
                    <li class="timeline__item timeline__item--active mt-2">
                      <p>訂單已完成</p>
                      <span>2020-03-19 01:36</span>
                    </li>
                  </ul>
                </template>
              </td>
            </tr>
            <!-- fill -->
            <tr>
              <td>
                <div style="height:56px"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- table footer -->
      <div class="table-footer d-flex align-items-center justify-content-end px-3 py-2 mt-3">
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
  </div>
</template>

<script>
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
      searchTarget: '',
      searchTargetValue: '',
      searchDateRange: [],
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
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-table.scss';
</style>
