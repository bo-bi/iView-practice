<template>
  <div class="class-table-order-filter">
    <h1>服务端分页并排序、过滤</h1>

    <!--
      on-sort-change 点击排序触发
      on-filter-change 点击过滤触发
    -->
    <Table
      :columns="columns"
      :data="data"
      :loading="loading"
      border
      size="small"
      @on-sort-change="handleSortChange"
      @on-filter-change="handlerFilterChange"
    >
    </Table>

    <div style="text-align: center;margin: 16px auto;">
      <Page
        :total="total"
        :current.sync="current"
        @on-change="getData"
      >
      </Page>
    </div>
    
  </div>
</template>

<script>
import $ from '@/libs/utils'
/**
 * 总结:
 * 1. 定义排序和定义过滤的地方不一样
 *      定义排序是在: handleSortChange
 *      定义过滤是在: filterRemote(作者说在 handlerFilterChange 中也可以)
 * 
 * 
 */
export default {
  data() {
    return {
      columns: [
        {
          title: '号码',
          key: 'number',
          /**
           * sortable
           * true 直接对当前数据本地排序(前端排序)
           * custom 则为自定义排序(服务端排序) 也就是说要用 on-sort-change 自己去做排序
           */
          sortable: 'custom',
        },
        {
          title: '等级',
          key: 'status',
          // h 是vue 中的 creatElemennt方法, 简写为h, 是去渲染一组vnode节点的
          render: (h, { row }) => {
            if (row.status === 1) {
              return h('Tag', {
                props: {
                  color: 'green',
                }
              }, '等级1');
            } else if (row.status === 2) {
              return h('Tag', {
                props: {
                  color: 'red',
                }
              }, '等级2');
            }
          },
          // 过滤项(默认有全部)
          filters: [
            {
              label: '级别1',
              value: 1
            },
            {
              label: '级别2',
              value: 2
            }
          ],
          // true: 过滤项多选 false: 过滤项单选
          filterMultiple: false,

          /**
           * 
           * 此处用不到 为前端过滤
           * value 对应filter项中的value
           *  
           */ 
          // filterMethod(value, row) {
          //   console.log(1);
          //   if (value === 1) {
          //     return row.status === 1;
          //   } else if (value === 2) {
          //     return row.status === 2;
          //   }
          // },

          // 服务端排序
          filterRemote(value) {
            // console.log(value)
            this.filterType = value[0];
          }
        }
      ],
      data: [],
      loading: false,
      // 排序方式(iview内置) normal(默认) || asc(升序) || desc(降序)
      sortType: 'normal',
      // undefined(不过滤) || 1(级别1) || 2(级别2)
      filterType: undefined,

      total: 0,
      current: 1,

    }
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      if (this.loading) return;

      this.loading = true;

      $.ajax({
        method: 'get',
        url: `/data/list/${this.current}/${this.sortType}/${this.filterType}`
      }).then(res => {
        this.total = res.data.data.total;
        this.data = res.data.data.list;
        this.loading = false;
      });

    },

    handleSortChange({ columns, key, order }) {
      // order 为排序方式 iview内置 normal(默认) || asc(升序) || desc(降序)
      this.sortType = order;
      // 重新从第一页获取数据
      this.current = 1;

      this.getData();
    },

    handlerFilterChange() {
      // 重新从第一页获取数据
      this.current = 1;

      this.getData();
    }

  }
}
</script>

<style>
  .class-table-order-filter {
    padding: 32px 64px;
  }
</style>
