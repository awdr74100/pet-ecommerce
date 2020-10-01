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
      v-if="role === 'admin'"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">{{ cache.id ? '編輯商品' : '新增商品' }}</h5>
            <span class="icon ml-auto" @click="closeModal('add-edit-product-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-4 px-4 py-1">
            <label class="modal__label mb-1" for="productImg">商品圖片</label>
            <div class="modal__drag mb-3">
              <Drag />
            </div>
          </div>
          <div class="col-md-8 px-4 py-1">
            <div class="modal__body">
              <ValidationObserver ref="product-form" slim>
                <form>
                  <label class="modal__label mb-1" for="productTitle">商品名稱</label>
                  <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                    <div class="modal__group">
                      <input
                        class="modal__input"
                        type="text"
                        id="productTitle"
                        placeholder="請輸入"
                        :class="{ 'modal__input--error': failed }"
                        v-model="product.title"
                      />
                      <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                    </div>
                  </ValidationProvider>
                  <div class="d-flex align-items-center">
                    <div class="flex-2 mr-1">
                      <label class="modal__label mb-1" for="productCategory">分類</label>
                      <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                        <div class="modal__group">
                          <input
                            class="modal__input"
                            type="text"
                            id="productCategory"
                            placeholder="請輸入"
                            :class="{ 'modal__input--error': failed }"
                            v-model="product.category"
                          />
                          <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                        </div>
                      </ValidationProvider>
                    </div>
                    <div class="flex-1 ml-1">
                      <label class="modal__label mb-1" for="productUnit">單位</label>
                      <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                        <div class="modal__group">
                          <input
                            class="modal__input"
                            type="text"
                            id="productUnit"
                            placeholder="請輸入"
                            :class="{ 'modal__input--error': failed }"
                            v-model="product.unit"
                          />
                          <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-1 mr-1">
                      <label class="modal__label mb-1" for="productOriginPrice">原價</label>
                      <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                        <div class="modal__group">
                          <input
                            class="modal__input"
                            type="number"
                            id="productOriginPrice"
                            placeholder="請輸入"
                            min="0"
                            :class="{ 'modal__input--error': failed }"
                            v-model.number="product.origin_price"
                          />
                          <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                        </div>
                      </ValidationProvider>
                    </div>
                    <div class="flex-1 ml-1">
                      <label class="modal__label mb-1" for="productPrice">售價</label>
                      <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                        <div class="modal__group">
                          <input
                            class="modal__input"
                            type="number"
                            id="productPrice"
                            placeholder="請輸入"
                            min="0"
                            :class="{ 'modal__input--error': failed }"
                            v-model.number="product.price"
                          />
                          <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-1 mr-1">
                      <label class="modal__label mb-1" for="productStock">庫存量</label>
                      <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                        <div class="modal__group">
                          <input
                            class="modal__input"
                            type="number"
                            id="productStock"
                            placeholder="請輸入"
                            min="0"
                            :class="{ 'modal__input--error': failed }"
                            v-model.number="product.stock"
                          />
                          <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                        </div>
                      </ValidationProvider>
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
              </ValidationObserver>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="validateProduct('add-edit-product-modal')"
            >
              <p>確認</p>
              <span
                class="ml-2"
                v-if="spinner.action === 'addProduct' || spinner.action === 'editProduct'"
              >
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
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
      v-if="role === 'admin'"
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
                <p class="product-title ml-3">{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="deleteProduct('delete-product-modal')"
            >
              <p>確認</p>
              <span class="ml-2" v-if="spinner.action === 'deleteProduct'">
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
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
      v-if="role === 'admin'"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title" v-if="caches[0] === 'enable' && caches[3] === 0">
              即將上架 {{ caches[2].length }} 件商品
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'disable' && caches[3] === 0">
              即將下架 {{ caches[2].length }} 件商品
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'enable' && caches[3] > 0">
              無法被上架
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'disable' && caches[3] > 0">
              無法被下架
            </h5>
            <span class="icon ml-auto" @click="closeModal('change-status-product-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p class="modal__message mb-2" v-if="caches[0] === 'enable' && caches[3] === 0">
              商品上架後，買家將可以搜尋和購買商品。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'disable' && caches[3] === 0">
              商品下架後，買家將無法搜尋和購買商品。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'enable' && caches[3] > 0">
              您已選擇 {{ caches[1] }} 件商品並且其中
              {{ caches[3] }} 件已經上架，點擊確定繼續上架另外 {{ caches[2].length }} 件商品。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'disable' && caches[3] > 0">
              您已選擇 {{ caches[1] }} 件商品並且其中
              {{ caches[3] }} 件已經下架，點擊確定繼續下架另外 {{ caches[2].length }} 件商品。
            </p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="changeProductStatus('change-status-product-modal')"
            >
              <p>確認</p>
              <span class="ml-2" v-if="spinner.action === 'changeProductStatus'">
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
            </button>
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
      v-if="role === 'admin'"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title">{{ cache.id ? '編輯優惠卷' : '產生新的優惠卷' }}</h5>
            <span class="icon ml-auto" @click="closeModal('add-edit-coupon-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <ValidationObserver ref="coupon-form" slim>
              <form>
                <label class="modal__label mb-1" for="couponCode">優惠卷代碼</label>
                <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                  <div class="modal__group">
                    <input
                      class="modal__input"
                      type="text"
                      id="couponCode"
                      placeholder="請輸入"
                      :class="{ 'modal__input--error': failed }"
                      v-model="coupon.code"
                    />
                    <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                  </div>
                </ValidationProvider>
                <label class="modal__label mb-1" for="couponTitle">標題</label>
                <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                  <div class="modal__group">
                    <input
                      class="modal__input"
                      type="text"
                      id="couponTitle"
                      placeholder="請輸入"
                      :class="{ 'modal__input--error': failed }"
                      v-model="coupon.title"
                    />
                    <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                  </div>
                </ValidationProvider>
                <label class="modal__label mb-1" for="couponPercent">折扣額度 (%)</label>
                <ValidationProvider rules="required" v-slot="{ errors, failed }" slim>
                  <div class="modal__group">
                    <vue-slider
                      v-model="coupon.percent"
                      :tooltip="'always'"
                      :tooltip-placement="'bottom'"
                    ></vue-slider>
                    <input type="text" v-model="coupon.percent" v-show="false" />
                    <small class="modal__error" v-if="failed">{{ errors[0] }}</small>
                  </div>
                </ValidationProvider>
                <label class="modal__label mb-1" for="couponEffectiveDate">有效日期</label>
                <div class="modal__group">
                  <date-picker
                    type="date"
                    value-type="timestamp"
                    :range="true"
                    :editable="false"
                    @clear="datePickerClear"
                    v-model="couponRange"
                  />
                </div>
                <div class="d-flex align-items-center">
                  <input
                    class="checkbox m-0"
                    type="checkbox"
                    id="couponEnabled"
                    v-model="coupon.is_enabled"
                  />
                  <label class="cursor-pointer ml-2" for="couponEnabled">是否啟用</label>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="validateCoupon('add-edit-coupon-modal')"
            >
              <p>確認</p>
              <span
                class="ml-2"
                v-if="spinner.action === 'addCoupon' || spinner.action === 'editCoupon'"
              >
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
            </button>
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
      v-if="role === 'admin'"
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
              <li class="modal__item py-1" v-for="(item, index) in caches" :key="index">
                <div class="coupon-img">
                  <span><font-awesome-icon :icon="['fas', 'dollar-sign']" size="2x"/></span>
                </div>
                <p class="coupon-title ml-3">{{ item.code }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="deleteCoupon('delete-coupon-modal')"
            >
              <p>確認</p>
              <span class="ml-2" v-if="spinner.action === 'deleteCoupon'">
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
            </button>
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
      v-if="role === 'admin'"
    >
      <div class="container-fluid modal px-0">
        <div class="row no-gutters">
          <div class="modal__header p-4">
            <h5 class="modal__title" v-if="caches[0] === 'enable' && caches[3] === 0">
              即將啟用 {{ caches[2].length }} 張優惠卷
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'disable' && caches[3] === 0">
              即將禁用 {{ caches[2].length }} 張優惠卷
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'enable' && caches[3] > 0">
              無法被啟用
            </h5>
            <h5 class="modal__title" v-if="caches[0] === 'disable' && caches[3] > 0">
              無法被禁用
            </h5>
            <span class="icon ml-auto" @click="closeModal('change-status-coupon-modal')">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__body px-4 py-1">
            <p class="modal__message mb-2" v-if="caches[0] === 'enable' && caches[3] === 0">
              優惠券啟用後，買家將可以套用至購物車上。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'disable' && caches[3] === 0">
              優惠券禁用後，買家將無法套用至購物車上。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'enable' && caches[3] > 0">
              您已選擇 {{ caches[1] }} 張優惠卷並且其中
              {{ caches[3] }} 張已經啟用，點擊確定繼續啟用另外 {{ caches[2].length }} 張優惠卷。
            </p>
            <p class="modal__message mb-2" v-if="caches[0] === 'disable' && caches[3] > 0">
              您已選擇 {{ caches[1] }} 張優惠卷並且其中
              {{ caches[3] }} 張已經禁用，點擊確定繼續禁用另外 {{ caches[2].length }} 張優惠卷。
            </p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="modal__footer p-4">
            <button
              class="btn btn--primary btn--md ml-auto d-flex align-items-center"
              @click.prevent="changeCouponStatus('change-status-coupon-modal')"
            >
              <p>確認</p>
              <span class="ml-2" v-if="spinner.action === 'changeCouponStatus'">
                <font-awesome-icon :icon="['fas', 'spinner']" spin />
              </span>
            </button>
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
    <!-- Lucky Wheel Modal -->
    <modal
      name="lucky-wheel-modal"
      height="auto"
      :adaptive="true"
      :shiftY="0.4"
      :width="340"
      :maxWidth="maxWidth"
      @before-open="beforeOpen"
      @before-close="closeModal(null)"
    >
      <div class="container-fluid modal px-0">
        <template v-if="cache.code">
          <div class="row no-gutters">
            <div class="modal__body px-4 py-1">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <div class="celebrate-img mt-3"></div>
                <p class="mt-4 font-l font-weight-semi-bold">恭喜獲得</p>
                <span class="mt-2">{{ cache.discount }} 折優惠卷一張</span>
                <div class="bg-danger text-white px-4 py-2 mt-2">
                  <span>{{ cache.code }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="modal__footer justify-content-center px-4 py-3">
              <button
                class="btn btn--primary btn--md d-flex align-items-center mr-3"
                v-if="cart.length > 0"
                @click.prevent="applyCoupon('lucky-wheel-modal')"
              >
                <p>立即套用</p>
                <span class="ml-2" v-if="spinner.action === 'applyCoupon'">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin />
                </span>
              </button>
              <button
                class="btn btn--transparent btn--md"
                @click.prevent="closeModal('lucky-wheel-modal')"
              >
                再轉一次
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row no-gutters">
            <div class="modal__body px-4 py-1">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <div class="disappointed-img mt-3"></div>
                <p class="mt-4 font-l font-weight-semi-bold">很遺憾！未能中獎</p>
                <span class="mt-2">要不再試一次看看吧？</span>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="modal__footer justify-content-center px-4 py-3">
              <button
                class="btn btn--transparent btn--md"
                @click.prevent="closeModal('lucky-wheel-modal')"
              >
                再轉一次
              </button>
            </div>
          </div>
        </template>
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
      couponRange: [
        new Date(new Date().toDateString()).getTime(),
        new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).toDateString()).getTime(),
      ],
      spinner: { id: '', action: '' },
    };
  },
  methods: {
    // 開啟前處理
    beforeOpen({ name }) {
      this.maxWidth = window.innerWidth - 30;
      if (this.role !== 'admin') return;
      this[name.split('-')[2]] = { ...this.cache }; // product or coupon
      if (this.cache.imgUrl) this.$store.commit('image/URLSAVE', this.cache.imgUrl);
      if (this.cache.effective_date) {
        this.couponRange = [this.cache.effective_date, this.cache.due_date];
      }
    },
    // 關閉前處理
    closeModal(modal) {
      this.$store.commit('modal/CLOSEMODAL', { modal });
      this.$store.commit('image/DATACLEAR');
    },
    // 驗證表單 - Product
    async validateProduct(modal) {
      const valid = await this.$refs['product-form'].validate();
      if (!valid) return;
      if (this.cache.id) {
        this.editProduct(modal);
      } else {
        this.addProduct(modal);
      }
    },
    // 新增商品
    async addProduct(modal) {
      if (!this.file) {
        const message = '請先上傳圖片';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return;
      }
      this.spinner = { id: '', action: 'addProduct' };
      await this.$store.dispatch('image/uploadImage', { file: this.file });
      const productData = { ...this.product, imgUrl: this.imgUrl };
      await this.$store.dispatch('products/addProduct', { productData });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 編輯商品
    async editProduct(modal) {
      if (this.file) {
        await this.$store.dispatch('image/uploadImage', { file: this.file });
      }
      const productId = this.product.id;
      const productData = { ...this.product, imgUrl: this.imgUrl };
      delete productData.id;
      this.spinner = { id: '', action: 'editProduct' };
      await this.$store.dispatch('products/editProduct', { productId, productData });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 刪除商品
    async deleteProduct(modal) {
      const ids = this.caches.map((item) => item.id).join(',');
      this.spinner = { id: '', action: 'deleteProduct' };
      await this.$store.dispatch('products/deleteProduct', { productId: ids });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 更改商品狀態
    async changeProductStatus(modal) {
      const ids = this.caches[2].map((item) => item.id).join(',');
      const status = this.caches[0] === 'enable';
      this.spinner = { id: '', action: 'changeProductStatus' };
      await this.$store.dispatch('products/changeProductStatus', { productId: ids, status });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 驗證表單 - Coupon
    async validateCoupon(modal) {
      const valid = await this.$refs['coupon-form'].validate();
      if (!valid) return;
      if (this.cache.id) {
        this.editCoupon(modal);
      } else {
        this.addCoupon(modal);
      }
    },
    // 產生新的優惠卷
    async addCoupon(modal) {
      const couponData = {
        ...this.coupon,
        effective_date: this.couponRange[0],
        due_date: this.couponRange[1],
      };
      this.spinner = { id: '', action: 'addCoupon' };
      await this.$store.dispatch('coupons/addCoupon', { couponData });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 編輯優惠卷
    async editCoupon(modal) {
      const couponId = this.coupon.id;
      const couponData = {
        ...this.coupon,
        effective_date: this.couponRange[0],
        due_date: this.couponRange[1],
      };
      delete couponData.id;
      this.spinner = { id: '', action: 'editCoupon' };
      await this.$store.dispatch('coupons/editCoupon', { couponId, couponData });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 刪除優惠卷
    async deleteCoupon(modal) {
      const ids = this.caches.map((item) => item.id).join(',');
      this.spinner = { id: '', action: 'deleteCoupon' };
      await this.$store.dispatch('coupons/deleteCoupon', { couponId: ids });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 更改優惠卷狀態
    async changeCouponStatus(modal) {
      const ids = this.caches[2].map((item) => item.id).join(',');
      const status = this.caches[0] === 'enable';
      this.spinner = { id: '', action: 'changeCouponStatus' };
      await this.$store.dispatch('coupons/changeCouponStatus', { couponId: ids, status });
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
    // 重置日期
    datePickerClear() {
      if (this.cache.effective_date) {
        this.couponRange = [this.cache.effective_date, this.cache.due_date];
        return;
      }
      this.couponRange = [
        new Date(new Date().toDateString()).getTime(),
        new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).toDateString()).getTime(),
      ];
    },
    // 立即套用優惠卷
    async applyCoupon(modal) {
      this.spinner = { id: '', action: 'applyCoupon' };
      await this.$store.dispatch('coupons/applyCoupon', { code: this.cache.code });
      await this.$store.dispatch('cart/getCart');
      this.spinner = { id: '', action: '' };
      this.closeModal(modal);
    },
  },
  computed: {
    role() {
      return this.$route.meta.role;
    },
    ...mapState('image', ['file', 'imgUrl']),
    ...mapState('modal', ['cache', 'caches']),
    ...mapState('cart', ['cart']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/modal.scss';
</style>
