<template>
  <div>
    <vue-good-table
      name="post-list-table"
      :columns="columns"
      :rows="posts"
      :pagination-options="{
        enabled: true,
      }"
      @on-row-click="onRowClick"
    ></vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';

export default {
  components: {
    VueGoodTable
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      columns: [
        { label: '번호', field: 'index' },
        { label: '제목', field: 'title' },
        { label: '작성자', field: 'user.name' },
        { label: '작성일', field: 'createdAt' },
        {
          label: '첨부파일',
          field: 'files',
          width: '200px',
          thClass: 'text-center',
          tdClass: 'text-center'
        }
      ]
    };
  },
  methods: {
    onRowClick(params) {
      console.log(params);
      console.log('id', params.row.id);
      this.$router.push({
        name: 'PostViewPage',
        params: { id: params.row.id.toString() }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>