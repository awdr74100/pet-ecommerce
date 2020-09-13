<template>
  <div class="product-detail text-secondary">
    <div class="p-3">
      <div class="row">
        <div class="col-md-5">
          <div class="p-3">
            <div class="product-detail__img"></div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="p-3">
            <h1 class="product-detail__title">
              Country Naturals格然斯鄉村時光 雞肉鯡魚2.7kg、成幼貓
            </h1>
            <div class="text-gray d-flex align-items-center mt-2">
              <span><font-awesome-icon :icon="['fas', 'tag']"/></span>
              <p class="ml-1">品牌貓飼料</p>
              <div class="line mx-3"></div>
              <p><span class="text-secondary mr-2">6</span>已售出</p>
            </div>
            <div class="p-4 product-detail__section d-flex align-items-center my-3">
              <p class="product-detail__origin-price text-gray">$1,600</p>
              <p class="product-detail__price text-primary ml-2">$1,400</p>
              <span class="product-detail__percent bg-primary text-white ml-2">8.2折</span>
            </div>
            <p class="product-detail__sub mb-2 text-gray">商品特色：</p>
            <ul class="product-detail__features ml-3 mb-2">
              <li class="item py-1">細火慢燉，口感鮮美有益健康</li>
              <li class="item py-1">包含三種健康優質的動物蛋白質，源自於雞肉、鯡魚、蛋</li>
              <li class="item py-1">DL-蛋氨酸添加，保護泌尿道健康</li>
              <li class="item py-1">有機濃縮海藻促進及加強組織的修復與再生，紓緩皮</li>
            </ul>
            <div class="product-detail__dropdown mb-2" @click="dropdownToggle">
              <div class="d-flex align-items-center cursor-pointer py-2">
                <p class="text-gray">付款與運送</p>
                <span class="icon text-gray ml-auto" :class="{ 'icon--rotate': dropdownActive }">
                  <font-awesome-icon :icon="['fas', 'angle-down']" />
                </span>
              </div>
              <div class="collapse p-3" :class="{ 'collapse--active': dropdownActive }">
                <p class="title mb-2">付款方式</p>
                <ul>
                  <li class="pt-1 pb-2">
                    <p>信用卡一次付清</p>
                  </li>
                  <li class="pt-1">
                    <p>AMT 轉帳</p>
                  </li>
                </ul>
                <p class="title mb-2 mt-3">運送方式</p>
                <ul>
                  <li class="pt-1 pb-2">
                    <div class="d-flex align-items-center mb-2">
                      <p>7-11 純取貨</p>
                      <span class="ml-auto">$60</span>
                    </div>
                    <p class="text-gray date">預計到貨時間9月15日 - 9月17日</p>
                  </li>
                  <li class="pt-1 pb-2">
                    <div class="d-flex align-items-center mb-2">
                      <p>全家純取貨</p>
                      <span class="ml-auto">$60</span>
                    </div>
                    <p class="text-gray date">預計到貨時間9月15日 - 9月17日</p>
                  </li>
                  <li class="pt-1">
                    <div class="d-flex align-items-center mb-2">
                      <p>黑貓宅急便</p>
                      <span class="ml-auto">$120</span>
                    </div>
                    <p class="text-graydate date">預計到貨時間9月15日 - 9月17日</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex align-items-center text-secondary mb-2">
              <button
                class="btn product-detail__btn left"
                :disabled="qty === 0"
                @click.prevent="adjustQty('reduce')"
              >
                <span><font-awesome-icon :icon="['fas', 'minus']"/></span>
              </button>
              <input type="number" class="product-detail__input" min="0" v-model.number="qty" />
              <button class="btn  product-detail__btn right" @click.prevent="adjustQty('add')">
                <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
              </button>
              <span class="product-detail__stock ml-3">還剩 1 件</span>
            </div>
            <div class="d-flex align-items-center mb-5">
              <button class="btn btn--transparent btn--xl">加入購物車</button>
              <button class="btn btn--primary btn--xl ml-3">直接購買</button>
            </div>
            <div class="br"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="p-3">
            <span class="product-detail__tab p-3">商品詳情</span>
            <p class="product-detail__content p-3">
              斯佩爾特小麥、玉米筋質粉、水解動物蛋白、燕麥、動物脂肪、魚油、脫水雞肉、碳酸鈣
              15000IU、維生素D3 900IU、維生素E 900mg、維生素C 150mg、菸鹼酸 38mg、泛酸
              15mg、維生素B2 7.5mg、維生素B6 6mg、維生素B1 4.5mg、生物素 0.4mg、葉酸
              0.45mg、維生素B12 0.06mg、氯化膽鹼 2800mg、β-胡蘿蔔素 1.5mg、胺基酸螯合鋅
              1060mg、胺基酸螯合錳 400mg、胺基酸螯合亞鐵 185mg、胺基酸螯合銅 11mg、硒代甲硫胺酸
              68mg、碘酸鈣 2.4mg、離胺酸 4500mg、DL-甲硫胺酸 6000mg、牛磺酸 4800mg、左旋肉鹼
              650mg、天然維生素E萃取物 10mg(天然抗氧化劑)。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      qty: 1,
    };
  },
  methods: {
    dropdownToggle() {
      this.dropdownActive = !this.dropdownActive;
    },
    adjustQty(action) {
      if (action === 'add') {
        this.qty += 1;
        return;
      }
      if (this.qty - 1 < 0) return;
      this.qty -= 1;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/product-detail.scss';
</style>
