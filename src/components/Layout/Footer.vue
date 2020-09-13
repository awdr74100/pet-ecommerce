<template>
  <footer class="footer text-secondary py-3">
    <div class="d-flex align-items-center justify-content-center">
      <a href="https://github.com/awdr74100" target="_blank" class="footer__link text-secondary">
        <span class="icon"><font-awesome-icon :icon="['fab', 'github']"/></span>
      </a>
      <a
        href="https://awdr74100.github.io/"
        target="_blank"
        class="footer__link text-secondary ml-5"
      >
        <span class="icon"><font-awesome-icon :icon="['fab', 'blogger-b']"/></span>
      </a>
    </div>
    <div class="text-center mt-3">
      <p>資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/Layout/footer.scss';
</style>
