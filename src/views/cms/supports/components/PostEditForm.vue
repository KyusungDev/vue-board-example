
<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field v-model="subject" type="text" label="제목을 입력해주세요." required />
    <v-textarea v-model="content" label="내용을 입력해주세요." required></v-textarea>
    <span>{{ post.creator }} / {{ post.created | formatDate }}</span>
    <br />
    <br />
    <v-btn @click="handleSubmit">수정하기</v-btn>
    <router-link :to="{ name: 'PostViewPage', params: { postId: post.id } }">
      <v-btn>취소</v-btn>
    </router-link>
  </v-form>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'PostEditForm',
  props: {
    post: {
      type: Object,
      required: true,
      validator(post) {
        const isValidPostId = typeof post.id === 'number';
        const isValidSubject = !!post.subject && post.subject.length;
        const isValidContent = post.content && post.content.length;
        return isValidPostId && isValidSubject && isValidContent;
      }
    }
  },
  data() {
    return {
      subject: '',
      content: ''
    };
  },
  methods: {
    handleSubmit() {
      const { subject, content } = this;
      this.$emit('submit', { subject, content });
    }
  },
  created() {
    this.subject = this.post.subject;
    this.content = this.post.content;
  }
};
</script>

<style scoped>
</style>