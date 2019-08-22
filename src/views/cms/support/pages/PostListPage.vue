<template>
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
</template>

<script>
import { BuxButton, BuxInput } from 'constantine-bux';
import { createNamespacedHelpers } from 'vuex';
import PageList from './../components/PostList';
const { mapState, mapActions } = createNamespacedHelpers('SupportHistory');

export default {
  components: {
    PageList,
    BuxButton,
    BuxInput
  },
  computed: {
    ...mapState(['posts'])
  },
  mounted() {
    this.fetchPostList();
  },
  methods: {
    ...mapActions(['fetchPostList']),
    handleClick() {
      this.$router.push({ name: 'PostCreatePage' });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>