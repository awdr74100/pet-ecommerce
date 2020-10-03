<div align="center">
   <a href="https://jmaker-ac.netlify.app" title="JammeryHQ" target="_blank">
      <img src="https://raw.githubusercontent.com/awdr74100/pet-ecommerce/master/src/assets/img/logo-s.png" alt="PetShop" width="100">
   </a>
   <h2>Pet eCommerce 寵物電商網站</h2>
</div>

Pet eCommerce 是一個基於 Vue.js、Express.js、Firebase、JWT 建構而成的電子商務網站，支援 PWA 及 RWD，UI 皆以 SCSS 並遵循 OOCSS 手刻而成，強調樣式的模組化及可擴充性，平台使用者主要可分為管理員 (Admin)、消費者 (Visitor) 兩種身分，顧者可透過實際註冊帳號使之成為消費者進行購物、優惠卷取用、訂單管理等行為。

[![Netlify Status](https://api.netlify.com/api/v1/badges/a3ffdf45-d9e5-4988-bbd4-15a943128e16/deploy-status)](https://app.netlify.com/sites/pet-ecommerce/deploys)

## 線上演示

- Demo：https://pet-ecommerce.netlify.app/
- API Doc：https://github.com/awdr74100/pet-ecommerce-api/wiki

## 更新日誌

- 2020/10/04：修復 Chrome 80+ 針對跨域 Cookie 的規則調整 (SameSite 必須從預設 Lax 改為 None 同時加上 Secure 屬性)
- 2020/10/04：修復 IOS 裝置中 Chrome 與 Safari 樣式兼容問題

## 設計說明

- 待補充

## 系統功能

- 基於 Token 的身分驗證機制 (JWT)
- 自製 Grid System 與 Spacing 完成響應式設計
- 使用 Firebase Authentication 實作用戶管理
- 使用 Firebase Realtime Database 實作資料庫操作
- 使用 Firebase Storage 實作圖片上傳
- 使用 Vuex 管理狀態
- 購物車 (CRUD)
- 商品管理 (CRUD)
- 優惠卷管理 (CRUD)
- 訂單管理 (CRUD)
- 發送密碼重製郵件
- 模擬訂單週期事件
- 轉盤遊戲
- 骨架屏載入

## 使用技術

1. 前端

   - Vue.js / Vuex / Vue Router / Vue CLI 4
   - Webpack
   - JavaScript (ES6+)
   - AJAX / Axios
   - OOCSS / BEM / 7-1 Pattern
   - SCSS
   - RWD
   - PWA
   - Web APIs (FileRender、FormData、DragEvent、Web Storage)
   - Netlify Deployment

2. 後端

   - Node.js / Express.js
   - Firebase
   - JWT / Cookie
   - RESTful API
   - Vercel Deployment

3. 代碼風格

   - ESLint (Airbnb)
   - Prettier

4. 額外插件

   - vue-axios
   - vue-meta
   - vue-fontawesome
   - vue-js-modal
   - vue-luck-draw
   - vue-awesome-swiper
   - vue-loading-skeleton
   - vue-slider-component
   - vue-progressbar
   - vee-validate
   - vue2-datepicker

5. 其他
   - Responsive Grid System
   - Responsive Spacing
   - Theme Color

## 應用介面
