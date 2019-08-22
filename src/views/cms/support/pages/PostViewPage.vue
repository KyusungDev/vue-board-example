<template>
  <div>
    <post-view v-if="post" :post="post" />
    <p v-else>게시글 불러오는 중...</p>
    <router-link :to="{ name: 'PostEditPage', params: { id } }">
      <button>수정</button>
    </router-link>
    <button>삭제</button>
    <router-link :to="{ name: 'PostListPage' }">
      <button>목록</button>
    </router-link>
    <comment-list v-if="post" :comments="post.comments"></comment-list>
    <comment-form @submit="onCommentSubmit" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import PostView from './../components/PostView';
import CommentList from './../components/CommentList';
import CommentForm from './../components/CommentForm';
const { mapState, mapActions } = createNamespacedHelpers('SupportHistory');

export default {
  name: 'PostViewPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PostView,
    CommentList,
    CommentForm
  },
  computed: {
    ...mapState(['post'])
  },
  created() {
    this.fetchPost(this.postId).catch(err => {
      // alert(err.response.data.msg);
      this.$router.back();
    });
  },
  methods: {
    ...mapActions(['fetchPost']),
    onCommentSubmit() {}
  }
};
</script>

<style lang="scss" scoped>
</style>