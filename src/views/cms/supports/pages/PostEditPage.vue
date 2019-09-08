<template>
  <v-container>
    <page-header></page-header>
    <h3>게시글 수정</h3>
    <post-edit-form v-if="post" :post="post" @submit="handleSubmit" />
    <p v-else>게시물 불러오는 중...</p>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import client from '@/api/cms/supports';
import PageHeader from './PageHeader';
import PostEditForm from './../components/PostEditForm';
const { mapState, mapActions } = createNamespacedHelpers('cmsSupports');

export default {
  name: 'PostEditPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PageHeader,
    PostEditForm
  },
  computed: {
    ...mapState(['post'])
  },
  methods: {
    handleSubmit(payload) {
      const { subject, content } = payload;
      client
        .update(this.id, { subject, content })
        .then(res => {
          alert('게시물이 수정되었습니다.');
          this.$router.push({
            name: 'PostViewPage',
            params: { id: res.data.body.id.toString() }
          });
        })
        .catch(err => {
          console.log(err);
          // TODO: 사용자 인증 확인
          // if (err.response.status === 401) {
          //   // alert('로그인이 필요합니다.');
          //   // this.$router.push({ name: 'Signin' });
          // } else if (err.response.status === 403) {
          //   // 남의 게시물 수정 시도
          //   alert(err.response.data.msg);
          //   this.$router.back();
          // } else {
          //   alert(err.response.data.msg);
          // }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>