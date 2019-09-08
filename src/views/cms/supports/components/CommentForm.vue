<template>
  <div class="comment-form">
    <v-textarea v-model="content" solo label="댓글을 입력해주세요." />
    <v-btn @click="handleSubmit">등록</v-btn>
  </div>
</template>
<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      content: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.isValidComment()) {
        this.$emit('submit', this.content);
        this.content = '';
      } else {
        alert('댓글은 1자 이상 255자 이하여야 합니다');
      }
    },
    isValidComment() {
      return this.content.length > 0 && this.content.length < 256;
    }
  }
};
</script>

<style scoped>
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
