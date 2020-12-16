<template>
  <p class="article-title">{{title}}</p>
</template>

<script>
const unusedVar = 1;
export default {
  props: {
    title: {
      default: 'Component',
    },
  },
};
</script>

<style scoped>
.article-title {
  width: 750px;
  padding: 30px 24px;
  font-size: 28px;
  color: #1d2c41;
  background-color: #f2f3f4;
}
</style>
