<template>
  <v-container>
    <page-header></page-header>
    <h3>게시물 작성</h3>
    <post-create-form @submit="handleSubmit" />
  </v-container>
</template>

<script>
import client from '@/api/cms/supports';
import PageHeader from './PageHeader';
import PostCreateForm from './../components/PostCreateForm';

export default {
  name: 'PostCreatePage',
  components: {
    PageHeader,
    PostCreateForm
  },
  methods: {
    handleSubmit(payload) {
      const { subject, content } = payload;
      client
        .create({
          subject,
          content
        })
        .then(res => {
          alert('게시물이 작성되었습니다.');
          this.$router.push({
            name: 'PostViewPage',
            params: { id: res.data.body.id.toString() }
          });
        })
        .catch(err => {
          console.log(err);
          // TODO: 사용자 인증 확인
          // if (err.response.status === 401) {
          //   alert('로그인이 필요합니다.');
          //   this.$router.push({ name: 'Signin' });
          // } else {
          //   alert(err.response.data.msg);
          // }
        });
    }
  }
};
</script>
