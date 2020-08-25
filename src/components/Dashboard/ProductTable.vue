<template>
  <div class="product-table">
    <div class="p-4">
      <ControlPanel />
    </div>
    <div class="d-flex align-items-center px-4 pt-4 pb-1">
      <p class="font-l text-secondary mr-auto ">共 2 樣商品</p>
      <button class="btn btn--primary px-3 py-1">
        <p>
          <span class="mr-1"><font-awesome-icon :icon="['fas', 'plus']"/></span>新增商品
        </p>
      </button>
    </div>
    <div class="p-4">
      <div class="table-responsive">
        <!-- products table -->
        <table class="table text-secondary">
          <thead class="thead">
            <tr class="head">
              <th style="min-width:40px"><input type="checkbox" class="checkbox m-0" /></th>
              <th style="min-width:260px">商品名稱</th>
              <th style="min-width:90px">原價</th>
              <th style="min-width:90px">售價</th>
              <th style="min-width:90px">已售出</th>
              <th style="min-width:90px">庫存數量</th>
              <th style="min-width:90px">商品狀態</th>
              <th style="min-width:120px" class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 2" :key="index">
              <td><input type="checkbox" class="checkbox m-0" /></td>
              <td class="product">
                <div class="product__img"></div>
                <div class="ml-3">
                  <p class="product__name mb-1">ANIBIO德國家醫寵物保健系統-Darm-aktiv整腸保健粉</p>
                  <span class="product__category">寵物戶外用品</span>
                </div>
              </td>
              <td>$2,000</td>
              <td>$1,000</td>
              <td>10</td>
              <td>26</td>
              <td>上架</td>
              <td class="text-center">
                <span class="icon"><font-awesome-icon :icon="['far', 'edit']"/></span>
                <span class="icon ml-3"><font-awesome-icon :icon="['far', 'trash-alt']"/></span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="foot">
              <td colspan="8">
                <div class="d-none justify-content-center">
                  <!-- ... -->
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanel from '@/components/Dashboard/ControlPanel.vue';

export default {
  components: {
    ControlPanel,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/product-table.scss';
</style>
