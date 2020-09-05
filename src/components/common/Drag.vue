<template>
  <div class="drag">
    <!-- 預覽圖片 -->
    <div class="drag__img" v-if="base64" :style="{ 'background-image': `url('${base64}')` }">
      <span class="icon icon--delete text-white" @click="dataClear">
        <font-awesome-icon :icon="['far', 'trash-alt']" />
      </span>
    </div>
    <!-- 網址圖片 -->
    <div
      class="drag__img"
      v-else-if="imgUrl && !changeImg"
      :style="{ 'background-image': `url('${imgUrl}')` }"
    >
      <span class="icon icon--change text-white" @click="changeImg = !changeImg">
        <font-awesome-icon :icon="['fas', 'exchange-alt']" />
      </span>
    </div>
    <!-- 拖曳區域 -->
    <div
      class="drag__section"
      :class="{ 'drag__section--hover': dragHover }"
      v-else
      @dragover="dragOver"
      @dragleave="dragLeave"
      @drop="drop"
      @click="inputClick"
    >
      <div class="circle"></div>
      <p class="mt-2">拖曳圖片至此</p>
    </div>
    <input class="file-input d-none" type="file" @change="inputChange" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      dragHover: false,
      changeImg: false,
    };
  },
  methods: {
    dragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      this.dragHover = true;
    },
    dragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      this.dragHover = false;
    },
    async drop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.dragHover = false;
      const file = e.dataTransfer.files[0];
      const valid = this.checkFile(file);
      if (!valid) return;
      await this.$store.dispatch('image/dataTransfer', { file });
    },
    inputClick() {
      document.querySelector('.file-input').click();
    },
    async inputChange(e) {
      const file = e.target.files[0];
      const valid = this.checkFile(file);
      if (!valid) return;
      await this.$store.dispatch('image/dataTransfer', { file });
      document.querySelector('.file-input').value = '';
    },
    checkFile(file) {
      const regex = /\.(gif|jpe?g|png)$/i;
      if (!regex.test(file.name)) {
        const message = '不支援的檔案格式';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return false;
      }
      if (file.size > 1024 * 1024) {
        const message = '超過圖片限制大小';
        this.$store.dispatch('notification/updateMessage', { message, status: 'danger' });
        return false;
      }
      return true;
    },
    ...mapMutations('image', {
      dataClear: 'DATACLEAR',
    }),
  },
  computed: {
    ...mapState('image', ['base64', 'imgUrl']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/drag.scss';
</style>
