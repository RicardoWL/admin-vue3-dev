<template>
  <div class="wrapper">
    <div class="header">
      <a-button type="primary">人才评分模板管理</a-button>
      <a-button type="primary">职级能力分配</a-button>
      <a-button type="primary">新增通用能力</a-button>
    </div>
    <div class="content">
      <a-table
        :data-source="itemList"
        rowKey="id"
        size="small"
        :pagination="false"
        :loading="loading"
        :childrenColumnName="''"
      >
        <a-table-column
          key="code_name"
          title="代号"
          data-index="code_name"
          width="10%"
        />
        <a-table-column key="name" title="通用能力名称" data-index="name" />
        <a-table-column
          key="content"
          title="描述"
          data-index="content"
          width="15%"
        >
          <template v-slot="{ text: content }">
            <span v-html="renderLineBreak(content)"></span>
          </template>
        </a-table-column>
        <a-table-column
          key="children"
          title="子级"
          data-index="children"
          width="50%"
        >
          <template v-slot="{ record }">
            <div v-for="(item, index) in record.children" :key="index">
              {{ item.code_name }}：{{ item.content }}
            </div>
          </template>
        </a-table-column>
        <a-table-column key="action" title="操作" width="200px">
          <template v-slot="{ record }">
            <a-button type="primary" @click="editItem(record)" size="small">
              编辑
            </a-button>
            <a-popconfirm
              title="确定要删除这条指标吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="deleteItem(record)"
            >
              <a-button type="danger" size="small">删除</a-button>
            </a-popconfirm>
          </template>
        </a-table-column>
      </a-table>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import { getGeneralList } from '@/api/hrm/evaluation'

  export default {
    name: 'manageEvaluation',
    data() {
      return {
        loading: false,
        itemList: [],
      }
    },
    created() {
      this.getItemList()
    },
    methods: {
      getItemList() {
        getGeneralList()
          .then((res) => {
            console.log(res)
            if (res.code === 0) {
              this.itemList = res.data
            }
          })
          .catch((e) => {
            console.log(e)
          })
      },
      editItem(item) {
        console.log(item)
      },
      deleteItem(item) {
        console.log(item)
      },
      // 将回车替换成换行符<br>
      renderLineBreak(value) {
        value = value || ''
        return value.replace(/\n/g, '<br>')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px;

    .header {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .ant-btn {
        border-radius: 3px;
      }
    }

    .content {
      margin-top: 20px;
    }
  }
</style>
