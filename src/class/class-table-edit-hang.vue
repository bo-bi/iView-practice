<template>
  <div class="class-table-edit-danyuanhang">
    <h1>可编辑行</h1>

    <Table :columns="columns" :data="data" border></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 我点了哪一行的数据进行编辑
      editIndex: -1,

      // 编辑的内容变量
      editName: '',
      editAge: '',
      editAddress: '',

      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, { row, index }) => {
            // vNode
            let edit;

            if (this.editIndex === index) {
              // 编辑状态

              /**
               * Render 函数的第三个选项(第二项省略则为第二个选项) 返回节点时, 必须为数组, 返回文字, * 可以是字符串
               * 所以此处 edit 为一个数组, 即使只有一项, 也要写为数组
               */
              edit = [h('Input', {
                props: {
                  value: row.name
                },
                on: {
                  input: (val) => {
                    this.editName = val;
                  }
                }
              })];
            } else {
              // 非编辑状态
              edit = row.name;
            }
            return h('div', [edit]);
          },
        },
        {
          title: '年龄',
          key: 'age',
          render: (h, { row, index }) => {
            let edit;

            if (this.editIndex === index) {
              edit = [h('Input', {
                props: {
                  value: row.age,
                },
                on: {
                  input: (val) => {
                    this.editAge = val;
                  }
                }
              })];
            } else {
              edit = row.age;
            }

            return h('div', [edit]);
          }
        },
        {
          title: '地址',
          key: 'address',
          render: (h, { row, index }) => {
            let edit;

            if (this.editIndex === index) {
              edit = [h('Input', {
                props: {
                  value: row.address,
                },
                on: {
                  input: (val) => {
                    this.editAddress = val;
                  }
                }
              })];
            } else {
              edit = row.address;
            }

            return h('div', [edit]);
          }
        },
        {
          // 这里不用写 key
          title: '操作',
          render: (h, { row, index }) => {
            if (this.editIndex === index) {
              // 编辑状态 保存按钮 取消按钮
              return [
                h('Button', {
                  props: {
                    type: 'success',
                  },
                  on: {
                    click: () => {
                      // 通过索引找到原数据中对应的值
                      this.data[index].name = this.editName;
                      this.data[index].age = this.editAge;
                      this.data[index].address = this.editAddress;
                      // 置为非编辑状态
                      this.editIndex = -1;
                    }
                  }
                }, '保存'),
                h('Button', {
                  props: {
                    type: 'error',
                  },
                  style: {
                    marginLeft: '6px',
                  },
                  on: {
                    click: () => {
                      // 置为非编辑状态
                      this.editIndex = -1;
                    }
                  }
                }, '取消')
              ]
            } else {
              // 非编辑状态 修改按钮
              return h('Button', {
                on: {
                  click: () => {
                    // 初始化
                    this.editName = row.name;
                    this.editAge = row.age;
                    this.editAddress = row.address;

                    // 置为编辑状态
                    this.editIndex = index;
                  }
                }
              }, '修改');
            }
          }
        }
      ],
      data: [
        {
          name: '成龙',
          age: 54,
          address: '中国香港铜锣湾26-1',
          date: '2016-10-03'
        },
        {
          name: '周星驰',
          age: 51,
          address: '中国香港维多利亚港110-3',
          date: '2016-10-01'
        },
        {
          name: '周杰伦',
          age: 40,
          address: '中欧台湾省台北市101大楼',
          date: '2016-10-02'
        },
        {
          name: '李荣浩',
          age: 30,
          address: '中国安徽省蚌埠市城区166-8',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

<style>
  .class-table-edit-danyuanhang {
    padding: 32px 64px;
  }
</style>
