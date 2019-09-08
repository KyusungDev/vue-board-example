<template>
  <!-- <vue-good-table
    name="post-list-table"
    :columns="columns"
    :rows="posts"
    styleClass="tb"
    :pagination-options="{
        enabled: true,
      }"
    @on-row-click="handleRowClick"
  >
    <template slot="table-row" slot-scope="props">
     
    </template>
    <template slot="pagination-bottom" slot-scope="props">
      <br />
      <bux-pagination :key="props.total" :totalElements="props.total"></bux-pagination>
  </template>-->
  <div>
    <v-data-table :headers="columns" :items="posts" show-select>
      <template slot="items" slot-scope="props">
        <tr @click="handleRowClick(props.item)">
          <td>{{ props.item.index }}</td>
          <td>{{ `${props.item.subject} [${props.item.content.length}]` }}</td>
          <td>{{ props.item.creator }}</td>
          <td>{{ props.item.created | formatDate }}</td>
        </tr>
        <!-- <span v-if="props.column.field == 'subject'">
          <span>{{ props.row.subject}}</span>
          <span>{{ " [" + props.row.commentCount + "]" }}</span>
        </span>
        <span v-else-if="props.column.field == 'created'">
          <span>{{ props.row.created | formatDate }}</span>
        </span>
        <span v-else>{{props.formattedRow[props.column.field]}}</span>-->
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'PostList',
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
        { text: '번호', value: 'index' },
        { text: '제목', value: 'subject' },
        { text: '작성자', value: 'creator' },
        { text: '작성일', value: 'created' }
      ]
    };
  },
  methods: {
    handleRowClick(item) {
      console.log(item);
      this.$router.push({
        name: 'PostViewPage',
        params: { id: item.id.toString() }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>