<template>
  <div class="notification">
    <ul class="list">
      <li
        class="list__item mt-2 text-white"
        :class="`list__item--${item.status}`"
        v-for="(item, index) in messages"
        :key="index"
      >
        <div class="icon">
          <span>
            <font-awesome-icon :icon="['fas', 'check']" v-if="item.status === 'success'" />
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'times']" v-if="item.status === 'danger'" />
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'exclamation']" v-if="item.status === 'warning'" />
          </span>
        </div>
        <p class="message mr-3">{{ item.message }}</p>
        <span class="close mx-3" @click="removeMessage(index)"></span>
        <div class="progress-wrap">
          <div class="progress"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  methods: mapMutations('notification', {
    removeMessage: 'REMOVEMESSAGE',
  }),
  computed: mapState('notification', ['messages']),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/notification.scss';
</style>
