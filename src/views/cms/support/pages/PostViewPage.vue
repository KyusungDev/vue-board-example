<template>
  <div>
    <div>
      <h1>{{ post.title }}</h1>
      <hr />
      <div>내용</div>
      <div style="height: 300px; width: 300px; border: 1px solid gray;">{{ post.contents }}</div>
      <div>
        <router-link :to="{ name: 'PostEditPage', params: {id: id} }">수정</router-link>
        {{ ` | `}}
        <router-link :to="{ name: 'SupportHistory' }">목록</router-link>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import APISupportHistory from '@/api/cms/support';

export default {
  name: 'PostViewPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      post: {}
    };
  },
  computed: {},
  created() {
    APISupportHistory.getPost(this.id)
      .then(res => {
        console.log(res);
        this.post = res.data;
      })
      .catch(err => {
        // alert(err.response.data.msg);
        this.$router.back();
      });
  }
};
</script>

<style lang="scss" scoped>
</style>