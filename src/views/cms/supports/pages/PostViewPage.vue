<template>
  <v-container>
    <page-header></page-header>
    <post-view v-if="post" :post="post" />
    <p v-else>게시글 불러오는 중...</p>
    <div>
      <router-link :to="{ name: 'PostEditPage', params: { id } }">
        <v-btn>수정</v-btn>
      </router-link>
      <v-btn @click="handleDelete">삭제</v-btn>
      <router-link :to="{ name: 'PostListPage' }">
        <v-btn>목록</v-btn>
      </router-link>
      <br />
      <br />
      <comment-list v-if="post" :comments="post.comments"></comment-list>
      <v-divider></v-divider>
      <comment-form @submit="handleCommentSubmit" />
    </div>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import PostView from './../components/PostView';
import PageHeader from './PageHeader';
import CommentList from './../components/CommentList';
import CommentForm from './../components/CommentForm';
import client from '@/api/cms/supports';
const { mapState, mapActions } = createNamespacedHelpers('cmsSupports');

export default {
  name: 'PostViewPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PageHeader,
    PostView,
    CommentList,
    CommentForm
  },
  computed: {
    ...mapState(['post'])
  },
  created() {
    this.fetchPost(this.id);
  },
  methods: {
    ...mapActions(['fetchPost', 'createComment']),
    handleDelete() {
      const { id } = this.post;
      client
        .delete(id)
        .then(res => {
          alert('게시물이 삭제되었습니다.');
          this.$router.push({ name: 'PostListPage' });
        })
        .catch(err => {
          console.log(err);
          // TODO: 사용자 인증 확인
          // if (err.response.status === 401) {
          //   alert('로그인이 필요')
          //   this.$router.push({name: 'Login'})
          // } else {
          //   alert(err.response.data.msg)
          // }
        });
    },
    handleCommentSubmit(content) {
      // TODO: 사용자 인증 확인
      //  if (!this.isAuthorized) {
      //   alert('로그인이 필요합니다!')
      //   this.$router.push({ name: 'Signin' })
      // }

      const { id } = this.post;
      this.createComment(content)
        .then(() => {
          alert('댓글이 작성되었습니다.');
        })
        .catch(err => {
          alert(err.response.data.msg);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>