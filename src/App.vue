<template>
  <div id="app">
    <input type="text" v-model="path" @keypress.enter="go"/>
    <!-- <button @click.prevent="">按鈕</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '',
    };
  },
  methods: {
    go() {
      this.$router.push({
        path: this.path,
      });
    },
  },
};
</script>

<style lang="scss"></style>
