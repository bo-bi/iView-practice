<template>
  <div class="class-table-outer">
    <h1>在外部进行表格的搜索、过滤、新建、隐藏某列等操作</h1>

    <br>
    <br>

    <!--
      inline 行内
      :label-width input 前 label标签 的宽度
    -->
    <Form inline :label-width="80">
      <FormItem label="主机名称:">
        <Input v-model="form.name" placeholder="请输入" style="width: 200px;" />
      </FormItem>
      <FormItem label="使用状态:">
        <Select v-model="form.status" placehodler="请选择" style="width: 200px;">
          <Option :value="1">运行中</Option>
          <Option :value="2">异常</Option>
        </Select>
      </FormItem>
      <Button type="primary" @click="getData" style="margin-right: 8px;">查询</Button>
      <Button @click="handleReset">重置</Button>
    </Form>

    <Table :columns="columns" :data="data" :loading="loading" border size="small"></Table>
  </div>
</template>

<script>
import $ from '@/libs/utils'

export default {
  data() {
    return {
      columns: [
        {
          title: '主机名称',
          key: 'name',
        },
        {
          title: 'Ip 地址',
          key: 'ip',
        },
        {
          title: '使用状态',
          key: 'status',
          render: (h, { row, index }) => {
            if (row.status === 1) {
              return h('Badge', {
                props: {
                  status: 'processing',
                  text: '运行中',
                }
              })
            } else if (row.status === 2) {
              return h('Badge', {
                props: {
                  status: 'error',
                  text: '异常',
                }
              })
            }
          }
        },
        {
          title: '最后修改时间',
          key: 'date',
          render: (h, { row }) => {
            return h('Time', {
              props: {
                time: parseInt(row.date),
                type: 'datetime',
              }
            })
          }
        }
      ],
      data: [],
      loading: false,

      form: {
        name: '',
        status: '',
      }
    }
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      if (this.loading) return;
      this.loading = true;

      let url = '/host/list';

      if (this.form.name) url += `/name/${this.form.name}`;
      if (this.form.status) url += `/status/${this.form.status}`;

      $.ajax({
        method: 'get',
        url: url,
      }).then(res => {
        this.data = res.data.data.list;
        this.loading = false;
      });
    },
    handleReset() {
      this.form.name = '';
      this.form.status = '';
      this.getData();
    }
  }
}
</script>

<style>
  .class-table-outer {
    padding: 32px 64px;
  }
</style>
