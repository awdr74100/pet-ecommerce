<template>
  <div class="data-table">
    <div class="p-4">
      <ControlPanel />
    </div>
    <div class="p-4">
      <div class="table-responsive">
        <!-- products -->
        <table class="table text-secondary">
          <thead class="thead">
            <tr>
              <th style="min-width:320px">商品名稱</th>
              <th style="min-width:100px">原價</th>
              <th style="min-width:100px">售價</th>
              <th style="min-width:100px">已售出</th>
              <th style="min-width:100px">庫存數量</th>
              <th style="min-width:100px">商品狀態</th>
              <th style="min-width:120px" class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="product__content ml-3">
                    <p class="name">
                      ANIBIO德國家醫寵物保健系統-Darm-aktiv整腸保健粉
                    </p>
                    <span class="category mt-1">寵物戶外用品</span>
                  </div>
                </div>
              </td>
              <td>$1,200</td>
              <td>$1,000</td>
              <td>10</td>
              <td>26</td>
              <td>上架</td>
              <td class="text-center">
                <span class="icon"><font-awesome-icon :icon="['far', 'edit']"/></span>
                <span class="icon ml-3"><font-awesome-icon :icon="['far', 'trash-alt']"/></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="product">
                  <div class="product__img"></div>
                  <div class="product__content ml-3">
                    <p class="name">
                      IRIS《大玉除臭貓砂》一個月免替換 TIO-4L 5入
                    </p>
                    <span class="category ">寵物戶外用品</span>
                  </div>
                </div>
              </td>
              <td>$1,200</td>
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
            <p class="p-4">123</p>
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
@import '~@/assets/scss-scoped/components/Dashboard/data-table.scss';
</style>
