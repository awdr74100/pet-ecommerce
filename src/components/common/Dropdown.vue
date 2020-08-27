<template>
  <div class="dropdown px-3 py-2" @click="dropdownToggle">
    <p>{{ dropdownTarget }} / 每頁</p>
    <span class="icon ml-2" :class="{ 'icon--rotate': dropdownActive }">
      <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" />
    </span>
    <ul class="list py-1" :class="{ 'list--active': dropdownActive }">
      <li class="list__item px-3 py-1" :class="{ 'list__item--active': dropdownTarget === 12 }">
        <p>12</p>
        <span class="icon ml-2" v-if="dropdownTarget === 12">
          <font-awesome-icon :icon="['fas', 'check']" size="sm" />
        </span>
      </li>
      <li class="list__item px-3 py-1" :class="{ 'list__item--active': dropdownTarget === 24 }">
        <p>24</p>
        <span class="icon ml-2" v-if="dropdownTarget === 24">
          <font-awesome-icon :icon="['fas', 'check']" size="sm" />
        </span>
      </li>
      <li class="list__item px-3 py-1" :class="{ 'list__item--active': dropdownTarget === 36 }">
        <p>36</p>
        <span class="icon ml-2" v-if="dropdownTarget === 36">
          <font-awesome-icon :icon="['fas', 'check']" size="sm" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
      dropdownTarget: 12,
    };
  },
  methods: {
    dropdownToggle(e) {
      if (e.target.tagName === 'DIV') {
        this.dropdownActive = !this.dropdownActive;
      }
      if (e.target.tagName === 'LI') {
        this.dropdownTarget = parseInt(e.target.textContent, 10);
        this.dropdownActive = !this.dropdownActive;
        this.rowToggle(this.dropdownTarget);
      }
    },
    rowToggle(row) {
      this.$emit('callRowToggle', row);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/components/common/dropdown.scss';
</style>
