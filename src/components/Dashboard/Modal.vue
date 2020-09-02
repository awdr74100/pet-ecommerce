<template>
  <div>
    <!-- Add or Edit Product Modal  -->
    <modal
      height="auto"
      name="product-add-edit-modal"
      :adaptive="true"
      :shiftY="0.2"
      :width="720"
      :max-width="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header bg-primary text-white p-3">
            <h5>新增產品</h5>
            <span class="ml-auto">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row p-3">
          <div class="col-md-4">
            <div class="modal__side">
              <label class="modal__label mb-1" for="productImg">* 商品圖片</label>
              <div class="modal__drag">
                <div class="text-center">
                  <span>
                    <font-awesome-icon :icon="['far', 'image']" size="3x" />
                  </span>
                  <p class="mt-1">將圖片拖放至此</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="modal__body">
              <form>
                <label class="modal__label mb-1" for="productTitle">* 商品名稱</label>
                <input class="modal__input mb-2" type="text" id="productTitle" />
                <div class="d-flex align-items-center mb-2">
                  <div class="flex-2 mr-1">
                    <label class="modal__label mb-1" for="productCategory">* 分類</label>
                    <input class="modal__input" type="text" id="productCategory" />
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productUnit">* 單位</label>
                    <input class="modal__input" type="text" id="productUnit" />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productOriginPrice">* 原價</label>
                    <input class="modal__input" type="number" id="productOriginPrice" />
                  </div>
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productPrice">* 售價</label>
                    <input class="modal__input" type="number" id="productPrice" />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productStock">* 庫存量</label>
                    <input class="modal__input" type="number" id="productStock" />
                  </div>
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productSales">* 已售出</label>
                    <input class="modal__input" type="number" id="productSales" />
                  </div>
                </div>
                <label class="modal__label mb-1" for="productDescription">* 商品描述</label>
                <textarea class="modal__textarea mb-2" id="productDescription" cols="30" rows="3">
                </textarea>
                <label class="modal__label mb-1" for="productContent">* 商品內容</label>
                <textarea class="modal__textarea mb-2" id="productContent" cols="30" rows="3">
                </textarea>
                <div class="d-flex align-items-center">
                  <input class="checkbox m-0" type="checkbox" id="is_enabled" />
                  <label class="cursor-pointer ml-2" for="is_enabled">立即上架商品</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-3">
            <button class="btn btn--primary btn--md ml-auto">新增</button>
            <button class="btn btn--transparent btn--md ml-3">取消</button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Delete Product Modal -->
    <modal name="product-delete-modal">
      <p class="aaa">456</p>
    </modal>
    <!-- Add or Edit Coupon Modal -->
    <modal name="coupon-add-edit-modal">
      <p class="aaa">789</p>
    </modal>
    <!-- Delete Coupon Modal -->
    <modal name="coupon-delete-modal">
      <p class="aaa">456</p>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxWidth: 0,
    };
  },
  methods: {
    beforeOpen() {
      this.maxWidth = window.innerWidth - 30;
    },
    beforeClose({ name }) {
      this.$store.commit('modal/CLOSEMODAL', name);
    },
    closeModal(modal) {
      this.$store.commit('modal/CLOSEMODAL', modal);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/modal.scss';
</style>
