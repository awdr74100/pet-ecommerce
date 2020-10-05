<div align="center">
   <a href="https://jmaker-ac.netlify.app" title="JammeryHQ" target="_blank">
      <img src="https://raw.githubusercontent.com/awdr74100/pet-ecommerce/master/src/assets/img/logo-s.png" alt="PetShop" width="100">
   </a>
   <h2>Pet eCommerce 寵物電商網站</h2>
</div>

Pet eCommerce 是一個基於 Vue.js、Express.js、Firebase、JWT 建構而成的電子商務網站，支援 PWA 及 RWD，UI 皆以 SCSS 並遵循 OOCSS 手刻而成，強調樣式的模組化及可重用性，平台使用者主要可分為管理員 (admin)、會員 (member) 兩種身分，管理員可依造主題快速擴展商店，會員可透過前台購物功能進行消費等行為。

[![Netlify Status](https://api.netlify.com/api/v1/badges/a3ffdf45-d9e5-4988-bbd4-15a943128e16/deploy-status)](https://app.netlify.com/sites/pet-ecommerce/deploys)

## 線上演示

- Demo：https://pet-ecommerce.netlify.app/
- API Doc：https://github.com/awdr74100/pet-ecommerce-api

## 更新日誌

- 2020/10/04：修復 Chrome 80+ 針對跨域 Cookie 的規則調整 (SameSite 必須從預設 Lax 改為 None 同時加上 Secure 屬性)
- 2020/10/04：修復 IOS 裝置中 Chrome 與 Safari 樣式兼容問題

## 設計說明

此專案為 [PetStore](https://github.com/awdr74100/petStore) 的重製版本，主要改善一些重大錯誤及導入 Vuex 管理狀態等，包含 UI、UX 也全部打掉重練，這次嘗試從後端的建立與部署到前端的切版與串接全部跑過一遍，學習建構一個完整的全端專案。此專案支援 RWD、SPA、PWA，意即在手機上使用也不會有體驗低落的問題。

- 管理員後台功能 (商品管理、優惠卷管理、訂單管理) ✔
- 會員前台購物功能 (購物車、訂單管理、結帳付款、轉盤遊戲) ✔
- 優化後台圖片上傳 (改使用 Base64 預覽圖片) ✔
- 將 icon 改為 SVG 格式並使用 mask-image 改變顏色 ✔
- 使用 Prerender SPA 預渲染應用 ✔
- 單元測試 (習得後完成)
- 串接金流 (習得後完成)
- 更新為 Vue 3.0 (進入測試)

## 專案功能

- 基於 Token 的身分驗證機制 (JWT)
- 自製 Grid System 與 Spacing 完成響應式設計
- 使用 Firebase Authentication 管理用戶
- 使用 Firebase Realtime Database 操作資料庫
- 使用 Firebase Storage 上傳圖片
- 使用 Vuex 管理狀態
- 購物車 (CRUD)
- 商品管理 (CRUD)
- 優惠卷管理 (CRUD)
- 訂單管理 (CRUD)
- 發送密碼重製郵件
- 模擬訂單週期各事件
- 轉盤遊戲
- 骨架屏載入

## 使用技術

1. 前端

   - Vue.js / Vuex / Vue Router / Vue CLI 4
   - Webpack / Prerender SPA
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

- 前台購物 - 首頁

![前台購物(首頁)](https://i.imgur.com/QdSFyEn.png)

- 前台購物 - 關於我們

![前台購物(關於我們)](https://i.imgur.com/gbWmoRh.png)

- 前台購物 - 最新消息

![前台購物(最新消息)](https://i.imgur.com/VCmk9ff.png)

- 前台購物 - 熱銷商品

![前台購物(熱銷商品)](https://i.imgur.com/xLR4ex7.png)

- 前台購物 - 商品資訊

![前台購物(商品資訊)](https://i.imgur.com/cwTjRNp.png)

- 前台購物 - 優惠活動

![前台購物(優惠活動)](https://i.imgur.com/iHYRBH6.png)

- 前台購物 - 領養專區

![前台購物(領養專區)](https://i.imgur.com/1tUKpkY.png)

- 前台購物 - 聯絡我們

![前台購物(聯絡我們)](https://i.imgur.com/fm7TvLy.png)

- 前台購物 - 登入/註冊會員

![前台購物(登入註冊會員)](https://i.imgur.com/blpEejL.png)

- 會員功能 - 最近加入商品

![會員功能(最近加入商品)](https://i.imgur.com/HbIxdv9.png)

- 會員功能 - 購物車

![會員功能(購物車)](https://i.imgur.com/cizpxii.png)

- 會員功能 - 結帳付款(1)

![會員功能(結帳付款1)](https://i.imgur.com/F4XfUyN.png)

- 會員功能 - 結帳付款(2)

![會員功能(結帳付款2)](https://i.imgur.com/XiAE13y.png)

- 會員功能 - 結帳付款(3)

![會員功能(結帳付款3)](https://i.imgur.com/F36s43H.png)

- 會員功能 - 訂單管理

![會員功能(訂單管理)](https://i.imgur.com/5qZZvvw.png)

- 後台管理 - 商品管理

![後台管理(商品管理)](https://i.imgur.com/vCpJIyD.png)

- 後台管理 - 優惠卷管理

![後台管理(優惠卷管理)](https://i.imgur.com/COZae7a.png)

- 後台管理 - 訂單管理

![後台管理(訂單管理)](https://i.imgur.com/PZRlFfs.png)

- 互動視窗 - 轉盤遊戲

![互動視窗(轉盤遊戲)](https://i.imgur.com/BsD1r6M.png)

- 互動視窗 - 新增商品

![互動視窗(新增商品)](https://i.imgur.com/r41a5vY.png)

- 互動視窗 - 上下架商品

![互動視窗(上下架商品)](https://i.imgur.com/JcxC7WJ.png)

- 互動視窗 - 刪除商品

![互動視窗(刪除商品)](https://i.imgur.com/pOFNFcE.png)

- 互動視窗 - 產生新的優惠卷

![互動視窗(產生新的優惠卷)](https://i.imgur.com/MP0box7.png)

- 互動視窗 - 啟禁用優惠卷

![互動視窗(啟禁用優惠卷)](https://i.imgur.com/3ylq3Ve.png)

- 互動視窗 - 刪除優惠卷

![互動視窗(刪除優惠卷)](https://i.imgur.com/X5ihys0.png)

- 骨架屏 - 商品列表

![骨架屏(商品列表)](https://i.imgur.com/WaytMmu.png)

- 骨架屏 - 商品資訊

![骨架屏(商品資訊)](https://i.imgur.com/ixh7y1y.png)

- 骨架屏 - 購物車

![骨架屏(購物車)](https://i.imgur.com/HZimfTw.png)

- 骨架屏 - 商品管理、優惠卷管理、訂單管理

![骨架屏(商品管理)](https://i.imgur.com/BCF1GeY.png)

## 圖片引用來源

- [東森寵物雲](https://www.etpet.com.tw/)

## 聲明

- 本作品內圖片、內容等，純粹為個人練習前端使用，不做任何商業用途。
