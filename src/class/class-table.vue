<template>
  <div class="class-table">
    <h1>服务端分页及自定义序号</h1>

    <Table :columns="columns" :data="data" :loading="loading" border size="small">

    </Table>

    <div style="text-align: center;margin: 16px 0;">
      <!--
        total: 数据总共有多少条, 服务端返回
               iView 的 Page 组件, 传入 total 后, 会自动计算出有多少页

        current: 当前是第几页
                 加.sync 相当于 v-model 实现双向绑定

        show-sizer: 显示每页显示多少条控件

        事件
        on-change: 切换页面的时候触发
        on-page-size-change: 当 show-sizer 每页显示多少条切换时触发
      -->
      <Page
        :total="total"
        :current.sync="current"
        show-sizer
        @on-change="getData"
        @on-page-size-change="handleChangeSize"
      >
      </Page>
    </div>
  </div>
</template>

<script>
import $ from '@/libs/utils'

export default {
  data() {
    return {
      columns: [
        {
          // 显示索引
          type: 'index',
          // 列宽度
          width: 60,
          // 内容居中
          align: 'center',
          indexMethod: (row) => {
            console.log(row._index);
            return (row._index + 1) + (this.size * this.current) - this.size;
          }
        },
        {
          // title 表头
          title: '姓名',
          // key 数据对应字段 是 name
          key: 'name',
        }
      ],
      data: [],
      loading: false,

      total: 0,
      current: 1,
      size: 10
    }
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      // 判断当前是否是加载中的状态 如果是 直接return
      if (this.loading) return;

      this.loading = true;

      $.ajax({
        method: 'get',
        // 发送请求页码 每页请求数量
        // 需要 ip 才可请求到
        url: `/data/list/${this.current}/${this.size}`
      }).then(res => {
        // console.log(res.data);
        this.data = res.data.data.list;
        this.total = res.data.data.total;
        this.loading = false;
      })
    },
    handleChangeSize(val) {
      this.size = val;
      // 在第2页 切换为20/页 此时iView 已经将页码置为1, 但是接口请求的还是第2页, 因为接口里面的页码current还没等到变为1, 此时接口里面获得到的current(当前页码)还为2, 一般想到的是设置 this.current=1, 其实在$nextTick中去请求就好了, 这个时候页码已经置为1了, 队列完成以后才去请求的接口
      // this.getData();

      this.$nextTick(() => {
        this.getData();
      })
    },

  }
}
</script>

<style>
  .class-table {
    padding: 32px 64px;
  }
</style>
