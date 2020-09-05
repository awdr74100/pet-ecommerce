<template>
  <div>
    <!-- Add or Edit Product Modal  -->
    <modal
      name="add-edit-product-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="720"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">{{ action === 'add' ? '新增商品' : '編輯商品' }}</h5>
            <span class="icon ml-auto" @click="closeModal('add-edit-product-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-4 px-4 py-1">
            <label class="modal__label mb-1" for="productImg">商品圖片</label>
            <div class="modal__drag">
              <Drag />
            </div>
          </div>
          <div class="col-md-8 px-4 py-1">
            <div class="modal__body">
              <form>
                <label class="modal__label mb-1" for="productTitle">商品名稱</label>
                <div class="modal__group">
                  <input
                    class="modal__input"
                    type="text"
                    id="productTitle"
                    placeholder="請輸入"
                    v-model="product.title"
                  />
                  <small class="modal__error" v-if="false">此欄位不可空白</small>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-2 mr-1">
                    <label class="modal__label mb-1" for="productCategory">分類</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="text"
                        id="productCategory"
                        placeholder="請輸入"
                        v-model="product.category"
                      />
                      <small class="modal__error" v-if="false">此欄位不可空白</small>
                    </div>
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productUnit">單位</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="text"
                        id="productUnit"
                        placeholder="請輸入"
                        v-model="product.unit"
                      />
                      <small class="modal__error" v-if="false">此欄位不可空白</small>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productOriginPrice">原價</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="number"
                        id="productOriginPrice"
                        placeholder="請輸入"
                        min="0"
                        v-model.number="product.origin_price"
                      />
                      <small class="modal__error" v-if="false">此欄位不可空白</small>
                    </div>
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productPrice">售價</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="number"
                        id="productPrice"
                        placeholder="請輸入"
                        min="0"
                        v-model.number="product.price"
                      />
                      <small class="modal__error" v-if="false">此欄位不可空白</small>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-1 mr-1">
                    <label class="modal__label mb-1" for="productStock">庫存量</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="number"
                        id="productStock"
                        placeholder="請輸入"
                        min="0"
                        v-model.number="product.stock"
                      />
                      <small class="modal__error" v-if="false">此欄位不可空白</small>
                    </div>
                  </div>
                  <div class="flex-1 ml-1">
                    <label class="modal__label mb-1" for="productSales">已售出</label>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="number"
                        id="productSales"
                        disabled
                        v-model.number="product.sales"
                      />
                    </div>
                  </div>
                </div>
                <label class="modal__label mb-1" for="productDescription">商品描述</label>
                <textarea
                  class="modal__textarea mb-3"
                  id="productDescription"
                  cols="30"
                  rows="3"
                  placeholder="請輸入"
                  v-model="product.description"
                >
                </textarea>
                <label class="modal__label mb-1" for="productContent">商品內容</label>
                <textarea
                  class="modal__textarea mb-3"
                  id="productContent"
                  cols="30"
                  rows="3"
                  placeholder="請輸入"
                  v-model="product.content"
                >
                </textarea>
                <div class="d-flex align-items-center">
                  <input
                    class="checkbox m-0"
                    type="checkbox"
                    id="productEnabled"
                    v-model="product.is_enabled"
                  />
                  <label class="cursor-pointer ml-2" for="productEnabled">立即上架商品</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto"
              @click="addOrEditProduct('add-edit-product-modal')"
            >
              確認
            </button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('add-edit-product-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Delete Product Modal -->
    <modal
      name="delete-product-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="500"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">刪除產品</h5>
            <span class="icon ml-auto" @click="closeModal('delete-product-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p>確定刪除這些產品嗎？</p>
            <ul class="modal__list mt-3 px-2">
              <li class="modal__item py-1" v-for="(item, index) in caches" :key="index">
                <div
                  class="product-img"
                  :style="{ 'background-image': `url('${item.imgUrl}')` }"
                ></div>
                <p class="product-title ml-3">
                  {{ item.title }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto"
              @click="deleteProduct('delete-product-modal')"
            >
              確認
            </button>
            <button
              class="btn btn--transparent btn--md ml-3"
              @click.prevent="closeModal('delete-product-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Change Status (enable/disbale) Product Modal -->
    <modal
      name="change-status-product-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="380"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">即將上架 1 個產品</h5>
            <span class="icon ml-auto" @click="closeModal('change-status-product-modal')">
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
              @click.prevent="closeModal('change-status-product-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Add or Edit Coupon Modal -->
    <modal
      name="add-edit-coupon-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="460"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">產生新的優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('add-edit-coupon-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <form>
              <label class="modal__label mb-1" for="couponCode">優惠卷代碼</label>
              <div class="modal__group">
                <input class="modal__input" type="text" id="couponCode" placeholder="請輸入" />
                <small class="modal__error" v-if="false">此欄位不可空白</small>
              </div>
              <label class="modal__label mb-1" for="couponTitle">標題</label>
              <div class="modal__group">
                <input class="modal__input" type="text" id="couponTitle" placeholder="請輸入" />
                <small class="modal__error" v-if="false">此欄位不可空白</small>
              </div>
              <label class="modal__label mb-1" for="couponPercent">折扣額度 (百分比)</label>
              <div class="modal__group">
                <input class="modal__input" type="number" id="couponPercent" placeholder="請輸入" />
                <small class="modal__error" v-if="false">此欄位不可空白</small>
              </div>
              <label class="modal__label mb-1" for="couponEffectiveDate">有效日期</label>
              <div class="modal__group">
                <date-picker type="date" :range="true" />
                <small class="modal__error" v-if="false">此欄位不可空白</small>
              </div>
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
              @click.prevent="closeModal('add-edit-coupon-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Delete Coupon Modal -->
    <modal
      name="delete-coupon-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="500"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">刪除優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('delete-coupon-modal')">
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
              @click.prevent="closeModal('delete-coupon-modal')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </modal>
    <!-- Change Status (enable/disbale) Coupon Modal -->
    <modal
      name="change-status-coupon-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.2"
      :width="380"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">即將啟用 2 張優惠卷</h5>
            <span class="icon ml-auto" @click="closeModal('change-status-coupon-modal')">
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
              @click.prevent="closeModal('change-status-coupon-modal')"
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
import { mapState } from 'vuex';

import Drag from '@/components/common/Drag.vue';

export default {
  components: {
    Drag,
  },
  data() {
    return {
      maxWidth: 0,
      product: {},
      coupon: {},
    };
  },
  methods: {
    beforeOpen({ name }) {
      this.maxWidth = window.innerWidth - 30;
      const target = name.split('-')[2];
      this[target] = { ...this.cache };
      if (this.cache.imgUrl) this.$store.commit('image/URLSAVE', this.cache.imgUrl);
    },
    closeModal(modal) {
      this.$store.commit('modal/CLOSEMODAL', { modal });
      this.$store.commit('image/DATACLEAR');
    },
    async addOrEditProduct(modal) {
      if (this.action === 'add') {
        if (!this.file) {
          this.$store.dispatch('notification/updateMessage', {
            message: '請先上傳圖片',
            status: 'danger',
          });
          return;
        }
        await this.$store.dispatch('image/uploadImage', { file: this.file });
        this.product.imgUrl = this.imgUrl;
        await this.$store.dispatch('products/addProduct', { productData: this.product });
        this.closeModal(modal);
      }
      if (this.action === 'edit') {
        if (this.file) {
          await this.$store.dispatch('image/uploadImage', { file: this.file });
          this.product.imgUrl = this.imgUrl;
        }
        await this.$store.dispatch('products/editProduct', {
          productId: this.product.id,
          productData: this.product,
        });
        this.closeModal(modal);
      }
    },
    async deleteProduct(modal) {
      const ids = this.caches.map((item) => item.id).join(',');
      await this.$store.dispatch('products/deleteProduct', { productId: ids });
      this.closeModal(modal);
    },
  },
  computed: {
    ...mapState('image', ['file', 'imgUrl']),
    ...mapState('modal', ['action', 'cache', 'caches']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Dashboard/modal.scss';
</style>
