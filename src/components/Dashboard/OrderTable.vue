<template>
  <div class="order-table">
    <!-- order panel -->
    <div class="p-4">
      <OrderPanel />
    </div>
    <!-- section -->
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">2 訂單</p>
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
              <th style="min-width:120px;max-width:140px">買家應付金額</th>
              <th style="min-width:120px;max-width:140px">運送方式</th>
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
      <div class="table-responsive mt-3">
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:300px">
                <div class="d-flex align-items-center">
                  <span class="user-img"><font-awesome-icon :icon="['fas', 'user-circle']"/></span>
                  <p class="ml-2">Apenny7066</p>
                </div>
              </th>
              <th style="min-width:120px;max-width:140px"></th>
              <th style="min-width:120px;max-width:140px"></th>
              <th style="min-width:430px" colspan="2">
                <div class="d-flex align-items-center justify-content-end">
                  <span class="orderId">訂單編號</span>
                  <p class="ml-1">-MFWAgr96vQtLw8YH9dG</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="ml-3">
                    <p class="product__title mb-1">
                      ANIBIO 德國家醫寵物保健系統 -Darm-aktiv 整腸保健粉
                    </p>
                    <span class="product__category">寵物戶外用品</span>
                  </div>
                  <span class="ml-3">x1</span>
                </div>
              </td>
              <td>b</td>
              <td>c</td>
              <td style="min-width:215px">d</td>
              <td style="min-width:215px">d</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import OrderPanel from '@/components/Dashboard/OrderPanel.vue';

export default {
  components: {
    OrderPanel,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/order-table.scss';
</style>
