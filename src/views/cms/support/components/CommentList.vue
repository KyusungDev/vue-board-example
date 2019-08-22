<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <comment-item :comment="comment" @delete="onDelete" @edit="onEdit" />
    </li>
    <li v-if="comments.length <= 0">입력된 댓글이 없습니다.</li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import CommentItem from './../components/CommentItem';
const { mapActions } = createNamespacedHelpers('SupportHistory');

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
    onDelete() {},
    onEdit() {}
  }
};
</script>

<style lang="scss" scoped>
</style>