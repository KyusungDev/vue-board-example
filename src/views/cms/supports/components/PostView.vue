<template>
  <div>
    <div>
      <h4>{{ post.subject }}</h4>
      <div>
        <span>{{ post.creator }} / {{ post.created | formatDate }}</span>
      </div>
    </div>
    <v-textarea :value="post.content" filled readonly></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'PostView',
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
  }
};
</script>

<style lang="scss" scoped>
.content-area {
  border: 1px solid gray;
  width: 500px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>