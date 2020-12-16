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
  color: #1D2C41;
  background-color: #F2F3F4;
}
</style>
