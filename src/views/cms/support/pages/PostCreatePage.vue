<template>
  <div>
    <h2>게시글 작성하기</h2>
    <post-create-form @submit="handleSubmit"></post-create-form>
  </div>
</template>

<script>
import client from '@/api/client';
import PostCreateForm from './../components/PostCreateForm';
import { format } from 'date-fns';
export default {
  name: 'PostCreatePage',
  components: {
    PostCreateForm
  },
  methods: {
    handleSubmit(payload) {
      const { title, contents } = payload;
      // api
      //   .post('/posts', { title, contents })
      //   .then(res => {
      //     alert('작성 완료');
      //     this.$router.push({
      //       name: 'PostViewPage',
      //       params: { id: res.data.id.toString() }
      //     });
      //   })
      //   .catch(err => {
      //     if (err.response.status === 401) {
      //       // UnAuthorized
      //       // alert('로그인이 필요합니다.')
      //       // this.$router.push({ name: 'Signin' })
      //     } else {
      //       alert(err.response.data.msg);
      //     }
      //   });

      // const posts = this.$store.state['SupportHistory'].posts;
      // const date = format(new Date(), 'YYYY/MM/DD HH:mm:ss:SSS');
      // const newPost = {
      //   createdAt: date,
      //   updatedAt: date,
      //   id: posts.length + 1,
      //   title: title,
      //   contents: contents,
      //   user: {
      //     id: 1,
      //     email: 'test@test.com',
      //     name: 'Admin',
      //     isAdmin: true
      //   },
      //   comments: {}
      // };

      // this.$store.state['SupportHistory'].posts = posts.concat(newPost);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>