
<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <comment-item :comment="comment" @delete="handleDelete" @edit="handleEdit" />
    </li>
    <li v-if="comments.length <= 0">입력된 댓글이 없습니다.</li>
  </ul>
</template>
<script>
import CommentItem from './CommentItem';
import { createNamespacedHelpers } from 'vuex';
import client from '@/api/cms/supports';
const { mapState, mapActions } = createNamespacedHelpers('cmsSupports');

export default {
  name: 'CommentList',
  components: {
    CommentItem
  },
  props: {
    comments: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(['deleteComment', 'updateComment']),
    handleDelete(commentId) {
      this.deleteComment(commentId)
        .then(res => {
          alert('댓글이 삭제되었습니다.');
          const comment = this.findCommentById(commentId);
        })
        .catch(err => {
          // TODO: 사용자 인증 확인
          // if (err.response.status === 401) {
          //   alert('로그인이 필요');
          // } else {
          //   alert(err.response.data.msg);
          // }
          console.log(err);
        });
    },
    handleEdit({ id, content }) {
      this.updateComment({ commentId: id, content })
        .then(res => {
          alert('댓글이 수정되었습니다.');
        })
        .catch(err => {
          console.log(err);
          // TODO: 사용자 인증 확인
          // if (err.response.status === 401) {
          //   alert('로그인이 필요');
          // } else {
          //   alert(err.response.data.msg);
          // }
        });
    }
  }
};
</script>
