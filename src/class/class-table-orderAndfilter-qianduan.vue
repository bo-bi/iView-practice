<template>
  <div class="class-table-order-filter-qianduan">
    <!-- 当数据量不是很大的时候, 前端来做 -->
    <h1>前端分页并排序、过滤</h1>

    <Table
      :columns="columns"
      :data="dataWithPage"
      :loading="loading"
      border
      size="small"
      @on-sort-change="handleSortChange"
      @on-filter-change="handleFilterChange"
    >
    </Table>

    <div style="text-align: center;margin: 16px auto;">
      <!--
        ⚠️这里total并不是data中的total, data中的total为接口返回的总数, 应为最后前端操作后的数据长度
      -->
      <Page
        :total="limitData.length"
        :current.sync="current"
        @on-change="getData"
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
          filterMethod(value, row) {
            // 这里好像没有用, 在计算属性limitData中进行了过滤操作
            
            // console.log(1)
            // if (value === 1) {
            //   return row.status === 1;
            // } else if (value === 2) {
            //   return row.status === 2;
            // }
            // this.filterType = value;
          },

          // 服务端排序(这里虽为前端排序, 但是还是要用到这里, 因为这里定义当前过滤项)
          filterRemote(value) {
            console.log(2)
            // console.log(value)
            this.filterType = value[0];
          }
        }
      ],
      data: [],
      loading: false,
      sortType: 'normal',
      filterType: undefined,

      total: 0,
      current: 1,


    }
  },

  created() {
    this.getData();
  },

  computed: {
    // 返回前端自己操作数据得到的 已排序数据 已过滤数据
    limitData() {
      // copy data 不影响原有数据
      let data = [...this.data];

      /**
       * 这里没有处理默认排序 和 默认不过滤(全部)
       * 是因为默认的话, 这个data压根就不用去改变它, 所以就不用去判断默认了
       */

      // 排序 - 升序
      if (this.sortType === 'asc') {
        data = data.sort((a, b) => {
          // return a.number > b.number;
          // 下面比上面, 浏览器兼容更好
          return a.number > b.number ? 1: -1;
        })
      }

      // 排序 - 降序
      if (this.sortType === 'desc') {
        data = data.sort((a, b) => {
          return a.number < b.number ? 1: -1;
        })
      }

      // 过滤 级别1
      if (this.filterType === 1) {
        data = data.filter(item => item.status === 1);
      }

      // 过滤 级别2
      if (this.filterType === 2) {
        data = data.filter(item => item.status === 2);
      }

      return data;
    },
    // 将最终的数据分割为每页
    dataWithPage() {
      const data = this.limitData;
      const start = this.current * 10 - 10;
      const end = start + 10;

      return [...data].slice(start, end);
    },
  },

  methods: {
    getData() {
      if (this.loading) return;

      this.loading = true;

      /**
       * 这里只请求一次接口, 一次性拿到所有的数据
       * 前端拿到全量数据 data后, 要做的就是对它进行排序、过滤、分页
       * '/data/list' 这里就不带任何参数了, 不分页请求数据, 也不走服务端过滤
       */
      $.ajax({
        method: 'get',
        url: '/data/list'
      }).then(res => {
        this.total = res.data.data.total;
        this.data = res.data.data.list;
        this.loading = false;
      });
    },

    handleSortChange({ columns, row, order }) {
      this.sortType = order;
      this.current = 1;
      // 一开始请求全量数据, 不 getData() 了
    },

    handleFilterChange() {
      this.current = 1;
      // 一开始请求全量数据, 不 getData() 了
    }
  },

}
</script>

<style>
  .class-table-order-filter-qianduan {
    padding: 32px 64px;
  }
</style>
