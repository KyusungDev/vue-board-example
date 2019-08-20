<template>
  <div style="margin: 50px">
    <h2>기술 지원 이력</h2>
    <div>
      <div class="container_grid">
        <div class="row">
          <div class="bux-col-l-4">
            <div class="bux-grid-content">
              <bux-input type="text" text="검색" placeholder="검색" />
            </div>
          </div>
          <div class="bux-col-l-2">
            <div class="bux-grid-content">
              <bux-button @click="handleClick" text="글쓰기"></bux-button>
            </div>
          </div>
        </div>
      </div>
      <page-list :posts="posts"></page-list>
    </div>
  </div>
</template>

<script>
import { BuxButton, BuxInput } from 'constantine-bux';
import PageList from './components/PostList';
import APISupportHistory from '@/api/cms/support';

export default {
  components: {
    PageList,
    BuxButton,
    BuxInput
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    const res = APISupportHistory.get();
    this.posts = res.data.map((item, index) => ({
      ...item,
      index: index + 1
    }));
    console.log(this.posts);
  },
  methods: {
    handleClick() {
      this.$router.push({ name: 'PostCreatePage' });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>