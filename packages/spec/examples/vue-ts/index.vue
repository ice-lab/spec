<template>
  <p class="article-title">{{welcomeMsg}}</p>
</template>

<script lang="ts">
import Vue from 'vue';

const unusedVar = 1;

export interface Data {
  welcomeMsg: string;
  appName: string;
}
export default Vue.extend({
  data(): Data {
    return {
      welcomeMsg: 'Welcome to Your',
      appName: 'Vue.ts App',
    };
  },
});
</script>

<style>
.article-title {
  width: 750px;
  padding: 30px 24px;
  font-size: 28px;
  color: #1d2c41;
  background-color: #f2f3f4;
}
</style>
