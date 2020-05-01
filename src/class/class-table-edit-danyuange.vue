<template>
  <div class="class-table-edit-danyuange">
    <h1>可编辑单元格</h1>

    <Table :columns="columns" :data="data" border></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前编辑行的索引
      editIndex: -1,
      // Input 实时输入的数据保存在外部data中
      editValue: '',
      columns: [
        {
          title: '姓名',
          key: 'name',
          // row   当前行数据
          // index 当前行索引(当前行是第几行)
          render: (h, { row, index }) => {
            // 要渲染的vnode
            let edit;
            let control;

            // !! !是否为可编辑状态 => 以当前编辑行是否是当前行的索引为判断 !!!

            // 编辑的是当前行
            if (this.editIndex === index) {
              // !!! 编辑状态 !!!

              // 这里是一个数组
              edit = [h('Input', {
                props: {
                  value: row.name
                },
                on: {
                  /*
                   * 在 render 函数中是无法去写 v-model 这种语法糖的
                   * 在 Render 的 Input 里的 props: value 和 on:input 相当于实现了语法糖      * v-model
                   */
                  input: (val) => {
                    // 实时写的数据不能保存在data里, data中的一项变化,会引起Table重绘
                    // 为了避免实时输入时 Table 重绘, 将 Input 实时修改的值绑定在外部的数据中
                    this.editValue = val;
                  }
                }
              })];

              control = [
                // 确认按钮
                h('Icon', {
                  style: {
                    cursor: 'pointer',
                    margin: '8px',
                  },
                  props: {
                    type: 'md-checkmark',
                    size: 16,
                    color: '#19be6b'
                  },
                  on: {
                    click: () => {
                      // 修改数据中当前行所对应的数据为编辑后的内容 
                      this.data[index].name = this.editValue;
                      // 取消可编辑状态, 变为下方 else 非编辑状态
                      this.editIndex = -1;
                    }
                  }
                }),
                // 取消按钮
                h('Icon', {
                  style: {
                    cursor: 'pointer',
                    marin: '8px'
                  },
                  props: {
                    type: 'md-close',
                    size: 16,
                    color: '#ed4014'
                  },
                  on: {
                    click: () => {
                      this.editIndex = -1;
                    }
                  }
                })
              ]
            } else {
              // !!! 非编辑状态 !!!

              // 若当前行不是所在编辑行, 即为普通行
              // 就直接数据展示就好, 不会渲染为一个输入框
              edit = row.name;

              // 控制按钮
              control = [h('Icon', {
                style: {
                  cursor: 'pointer'
                },
                props: {
                  // 图标
                  type: 'ios-create-outline',
                  // 16像素
                  size: 16
                },
                /**
                 * Render 选项里的 on 是组件触发的自定义 事件, 绑定原生事件是 nativeOn 
                 * 这里的 click 是自定义事件, 非原生事件
                 * 
                 * Render 里的 nativeOn 绑定的 click, 相当于 template 里写的 @click.native
                 */
                on: {
                  click: () => {
                    /**
                     * 点击编辑icon后, 左侧变为可编辑状态, 变为一个Input
                     * 所以把 编辑行索引 指定为 当前行的索引
                     */
                    this.editIndex = index;

                    // editValue 进行初始化
                    // 输入一半, 点击取消键, 下次打开重新赋值为row.name
                    this.editValue = row.name;
                  }
                }
              })]
            }

            return h('Row', [
              h('Col', {
                props: {
                  span: 18
                }
              }, edit),
              h('Col', {
                props: {
                  span: 6
                }
              }, control)
            ])
          }
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '地址',
          key: 'address'
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
  .class-table-edit-danyuange {
    padding: 32px 64px;
  }
</style>
