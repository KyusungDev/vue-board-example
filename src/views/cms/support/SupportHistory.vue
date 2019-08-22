<template>
  <div style="margin: 50px">
    <h2>기술 지원 이력</h2>
    <post-list-page></post-list-page>
  </div>
</template>

<script>
import PostListPage from './pages/PostListPage';

export default {
  name: 'SupportHistory',
  components: {
    PostListPage
  }
};
</script>

<style lang="scss" scoped>
</style>