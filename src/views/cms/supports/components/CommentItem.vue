<template>
  <div class="comment-item">
    <div>
      <strong>{{ comment.creator }}</strong>
      <span class="comment-item-date">{{ comment.created | formatDate }}</span>
      <span v-if="isMyComment">
        <v-btn @click="handleEditModeToggle" small>{{ editButtonText }}</v-btn>
        <v-btn @click="handleDelete" small>삭제</v-btn>
      </span>
    </div>
    <div v-if="isEditing">
      <textarea class="comment-area" v-model="editMessage" rows="2"></textarea>
      <v-btn @click="handleEdit" small>수정 완료</v-btn>
    </div>
    <div v-else>{{ comment.content }}</div>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';

export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
      validator(comment) {
        const isValidCommentId = typeof comment.id === 'number';
        const isValidContent = comment.content && comment.content.length;
        const isValidUser = !!comment.creator;
        return isValidCommentId && isValidContent && isValidUser;
      }
    }
  },

  data() {
    return {
      isEditing: false,
      editMessage: ''
    };
  },
  computed: {
    // ...mapState(['me']),
    // ...mapGetters(['isAuthorized'])
    isMyComment() {
      // return this.isAuthorized && this.comment.user.id === this.me.id;
      return true;
    },
    editButtonText() {
      return this.isEditing ? '수정 취소' : '수정';
    },
    isValidComment() {
      return this.editMessage.length > 0 && this.editMessage.length < 256;
    }
  },
  methods: {
    handleEditModeToggle() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.editMessage = this.comment.content;
      }
    },
    handleDelete() {
      console.log(this.comment);
      const { id } = this.comment;
      console.log('id', id);
      this.$emit('delete', id);
    },
    handleEdit() {
      if (this.isValidComment) {
        this.isEditing = false;
        const { id } = this.comment;
        this.$emit('edit', { id, content: this.editMessage });
      } else {
        alert('댓글은 1자 이상 255자 이하여야 합니다');
      }
    }
  }
};
</script>

<style scoped>
.comment-item {
  border-top: 1px solid #eee;
  margin: 5px 0px 5px 0px;
}

.comment-item-date {
  margin-left: 10px;
  font-size: 0.5em;
}

.comment-area {
  position: relative;
  width: 100%;
  font-size: 1em;
  border: 1px solid #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  resize: none;
}
</style>
