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
      @dragover.prevent.stop="dragOver"
      @dragleave.prevent.stop="dragLeave"
      @drop.prevent.stop="drop"
      @click="inputClick"
    >
      <div class="circle"></div>
      <p class="mt-2">拖曳圖片至此</p>
    </div>
    <input ref="file" class="d-none" type="file" @change="inputChange" />
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
    dragOver() {
      this.dragHover = true;
    },
    dragLeave() {
      this.dragHover = false;
    },
    async drop(e) {
      this.dragHover = false;
      const file = e.dataTransfer.files[0];
      const valid = this.checkFile(file);
      if (!valid) return;
      await this.$store.dispatch('image/dataTransfer', { file });
    },
    inputClick() {
      this.$refs.file.click();
    },
    async inputChange(e) {
      const file = e.target.files[0];
      const valid = this.checkFile(file);
      if (!valid) return;
      await this.$store.dispatch('image/dataTransfer', { file });
      this.$refs.file.value = '';
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
