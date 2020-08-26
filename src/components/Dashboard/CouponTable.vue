<template>
  <div class="coupon-table">
    <div class="d-flex align-items-center p-4 pb-1">
      <p class="font-l text-secondary mr-auto ">共 2 張優惠卷</p>
      <button class="btn btn--primary px-3 py-1">
        <p>
          <span class="mr-1"><font-awesome-icon :icon="['fas', 'plus']"/></span>產生新的優惠卷
        </p>
      </button>
    </div>
    <div class="p-4">
      <!-- table (head, body) -->
      <div class="table-responsive">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <td><input type="checkbox" class="checkbox m-0" /></td>
              <td style="min-width:260px">
                <div class="d-flex align-items-center">
                  <p>優惠卷代碼</p>
                  <span class="line mx-1"></span>
                  <p>優惠卷名稱</p>
                </div>
              </td>
              <td style="min-width:100px">折扣類型</td>
              <td style="min-width:150px ">折扣額度 (百分比)</td>
              <td style="min-width:90px">是否啟用</td>
              <td style="min-width:205px">
                <div class="d-flex align-items-center">
                  <p>狀態</p>
                  <span class="line mx-1"></span>
                  <p>期間</p>
                </div>
              </td>
              <td style="min-width:90px" class="text-center">操作</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" class="checkbox m-0" /></td>
              <td class="coupon">
                <div class="coupon__img">
                  <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x"/></span>
                </div>
                <div class="ml-3">
                  <p class="coupon__code mb-1">ALC55DWD</p>
                  <span class="coupon__title">周年慶，全館商品 95 折</span>
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
                <span class="icon"><font-awesome-icon :icon="['far', 'edit']"/></span>
                <span class="icon ml-3"><font-awesome-icon :icon="['far', 'trash-alt']"/></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- table (tfoot) -->
      <div class="tfoot d-flex align-items-center justify-content-end p-3">
        <div>
          <Dropdown @callRowToggle="rowToggle" />
        </div>
        <div class="ml-3">
          <Pagination />
        </div>
      </div>
    </div>
    <!-- action -->
    <div class="p-4 pt-5">
      <div class="d-flex align-items-center text-secondary">
        <div class="d-flex align-items-center ml-2">
          <input type="checkbox" class="checkbox m-0" id="selectAll" />
          <label for="selectAll" class="ml-3">選擇本頁全部優惠卷</label>
        </div>
        <div class="d-flex align-items-center ml-auto">
          <p>已選擇 1 張優惠卷</p>
          <button class="btn btn--danger px-3 py-1 mx-3">刪除</button>
          <button class="btn btn--transparent px-3 py-1">禁用</button>
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
      row: 8,
      page: 1,
      selectTarget: [],
    };
  },
  methods: {
    rowToggle(row) {
      this.row = row;
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
