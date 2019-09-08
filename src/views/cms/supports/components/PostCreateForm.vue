<template>
  <v-form>
    <v-text-field v-model="subject" type="text" label="제목을 입력해주세요." required />
    <v-textarea v-model="content" label="내용을 입력해주세요." required></v-textarea>
    <v-btn @click="handleSubmit">작성하기</v-btn>
    <router-link :to="{ name: 'PostListPage' }">
      <v-btn>취소</v-btn>
    </router-link>
  </v-form>
</template>

<script>
export default {
  name: 'PostCreateForm',
  components: {},
  data() {
    return {
      subject: '',
      content: ''
    };
  },
  methods: {
    handleSubmit() {
      const { subject, content } = this;
      if (subject === '' || content === '') {
        alert('제목과 내용을 작성하세요');
        return;
      }

      this.$emit('submit', { subject, content });
    }
  }
};
</script>
