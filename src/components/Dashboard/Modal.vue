<template>
  <div>
    <!-- Add or Edit Product Modal  -->
    <modal
      name="product-add-edit-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="720"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">新增商品</h5>
            <span class="icon ml-auto" @click="closeModal('product-add-edit-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-4 px-4 py-1">
            <label class="modal__label mb-1" for="productImg">* 商品圖片</label>
            <div class="modal__img" v-if="false">
              <span class="delete-icon text-white">
                <font-awesome-icon :icon="['far', 'trash-alt']" />
              </span>
            </div>
            <div class="modal__drag d-flex flex-column align-items-center justify-content-center">
              <div class="circle"></div>
              <p class="mt-2">拖曳圖片至此</p>
            </div>
            <input class="d-none" type="file" />
          </div>
          <div class="col-md-8 px-4 py-1">
            <div class="modal__body">
              <form>
                <label class="modal__label mb-1" for="productTitle">* 商品名稱</label>
                <input
                  class="modal__input mb-3"
                  type="text"
                  id="productTitle"
                  placeholder="請輸入"
                />
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-2 mr-1">
                    <label class="modal__label mb-1" for="productCategory">* 分類</label>
                    <input
                      class="modal__input"
                      type="text"
                      id="productCategory"
                      placeholder="請輸入"
                    />
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productUnit">* 單位</label>
                    <input class="modal__input" type="text" id="productUnit" placeholder="請輸入" />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productOriginPrice">* 原價</label>
                    <input
                      class="modal__input"
                      type="number"
                      id="productOriginPrice"
                      placeholder="請輸入"
                      min="0"
                    />
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productPrice">* 售價</label>
                    <input
                      class="modal__input"
                      type="number"
                      id="productPrice"
                      placeholder="請輸入"
                      min="0"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productStock">* 庫存量</label>
                    <input
                      class="modal__input"
                      type="number"
                      id="productStock"
                      placeholder="請輸入"
                      min="0"
                    />
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productSales">已售出</label>
                    <input class="modal__input" type="number" id="productSales" disabled />
                  </div>
                </div>
                <label class="modal__label mb-1" for="productDescription">* 商品描述</label>
                <textarea
                  class="modal__textarea mb-3"
                  id="productDescription"
                  cols="30"
                  rows="3"
                  placeholder="請輸入"
                >
                </textarea>
                <label class="modal__label mb-1" for="productContent">* 商品內容</label>
                <textarea
                  class="modal__textarea mb-3"
                  id="productContent"
                  cols="30"
                  rows="3"
                  placeholder="請輸入"
                >
                </textarea>
                <div class="d-flex align-items-center">
                  <input class="checkbox m-0" type="checkbox" id="productEnabled" />
                  <label class="cursor-pointer ml-2" for="productEnabled">立即上架商品</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('product-add-edit-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Delete Product Modal -->
    <modal
      name="product-delete-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="500"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">刪除產品</h5>
            <span class="icon ml-auto" @click="closeModal('product-delete-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p>確定刪除這些產品嗎？</p>
            <ul class="modal__list mt-3 px-2">
              <li class="modal__item py-1" v-for="index in 4" :key="index">
                <div class="product-img"></div>
                <p class="product-title ml-3">
                  ANIBIO 德國家醫寵物保健系統 -Darm-aktiv 整腸保健粉
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('product-delete-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Enabled Product Modal -->
    <modal
      name="product-enabled-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="380"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">即將上架 1 個產品</h5>
            <span class="icon ml-auto" @click="closeModal('product-enabled-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p class="mb-4">商品上架後，買家將可以搜尋和購買您的商品。</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('product-enabled-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Add or Edit Coupon Modal -->
    <modal
      name="coupon-add-edit-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="460"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">產生新的優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('coupon-add-edit-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <form>
              <label class="modal__label mb-1" for="couponCode">* 優惠卷代碼</label>
              <input class="modal__input mb-3" type="text" id="couponCode" placeholder="請輸入" />
              <label class="modal__label mb-1" for="couponTitle">* 標題</label>
              <input class="modal__input mb-3" type="text" id="couponTitle" placeholder="請輸入" />
              <label class="modal__label mb-1" for="couponPercent">* 折扣額度 (百分比)</label>
              <input
                class="modal__input mb-3"
                type="number"
                id="couponPercent"
                placeholder="請輸入"
              />
              <label class="modal__label mb-1" for="couponEffectiveDate">* 有效日期</label>
              <div class="mb-3"><date-picker type="date" :range="true" /></div>
              <div class="d-flex align-items-center">
                <input class="checkbox m-0" type="checkbox" id="couponEnabled" />
                <label class="cursor-pointer ml-2" for="couponEnabled">是否啟用</label>
              </div>
            </form>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('coupon-add-edit-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Delete Coupon Modal -->
    <modal
      name="coupon-delete-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="500"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">刪除優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('coupon-delete-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p>確定刪除這些優惠卷嗎？</p>
            <ul class="modal__list mt-3 px-2">
              <li class="modal__item py-1" v-for="index in 4" :key="index">
                <div class="coupon-img">
                  <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x"/></span>
                </div>
                <p class="coupon-title ml-3">
                  ALC55DWD
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('coupon-delete-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Enabled Coupon Modal -->
    <modal
      name="coupon-enabled-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="380"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="beforeClose"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">即將啟用 2 張優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('coupon-enabled-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p class="mb-4">優惠卷啟用後，買家即可套用至結帳清單上。</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button class="btn btn--primary btn--md ml-auto">確認</button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('coupon-enabled-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
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
    beforeClose() {
      this.$store.commit('modal/CLOSEMODAL', { modal: null });
    },
    closeModal(modal) {
      this.$store.commit('modal/CLOSEMODAL', { modal });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/modal.scss';
</style>
