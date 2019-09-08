<template>
  <v-container>
    <page-header></page-header>
    <v-input type="text" v-model="searchText" :placeholder="'검색어를 입력해주세요.'" />
    <v-btn @click="handleClick">작성</v-btn>
    <page-list :posts="filteredItems"></page-list>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import PageHeader from './PageHeader';
import PageList from './../components/PostList';
const { mapState, mapActions } = createNamespacedHelpers('cmsSupports');

export default {
  components: {
    PageHeader,
    PageList
  },
  data() {
    return {
      searchText: ''
    };
  },
  computed: {
    ...mapState(['posts']),
    filteredItems() {
      return this.searchText
        ? this.posts.filter(item => item.subject.includes(this.searchText))
        : this.posts;
    }
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