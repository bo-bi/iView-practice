<template>
  <div class="class-form-share">
    <h1>新建和修改共用一个 Form 组件的最佳实践(多个循环)</h1>
    <br><br>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{ item.name }}</span>
        <Divider type="vertical"></Divider>
        <span>{{ item.age }}</span>
        <Divider type="vertical"></Divider>
        <span>{{ item.city }}</span>
        
        <Button @click="handleOpenEdit(index)">修改</Button>
      </li>
    </ul>

    <Button @click="handleOpenCreate">新增数据</Button>

    <Modal
      :title="type === 'create' ? '增加数据' : '修改数据'"
      v-model="openModal"
      footer-hide
    >
      <Form :model="form" :label-width="70">
        <FormItem label="姓名">
          <Input v-model="form.name" />
        </FormItem>

        <FormItem label="年龄">
          <InputNumber v-model="form.age" />
        </FormItem>

        <FormItem label="城市">
          <Select v-model="form.city">
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="深圳">深圳</Option>
          </Select>
        </FormItem>

        <Button @click="handleCreate" v-if="type === 'create'">新建</Button>
        <Button @click="handleEdit" v-if="type === 'edit'">更新</Button>
      </Form>
    </Modal>
  </div>
</template>

<script>
const formData = {
  name: '',
  age: null,
  city: '',
}
export default {
  data() {
    return {
      list: [
        {
          name: '张三',
          age: 18,
          city: '北京',
        },
        {
          name: '李四',
          age: 21,
          city: '上海',
        },
        {
          name: '王五',
          age: 25,
          city: '深圳',
        }
      ],

      openModal: false,

      type: 'create', // create || edit

      /**
       * 重要: 在写FAQ后台项目 在添加分类 AddCategory.vue 中, 写的是如下初始数据
       * 
       * const formData = {
       *  firstlevel: {
       *    id: 0,
       *    title: '',
       *  },
       *  secondlevel: [
       *    {
       *      id: 0,
       *      title: '',
       *    }
       *  ]
       * };
       * 
       * 用 this.form = Objetc.assign({}, formData);输入数据, 再打开清空不了
       * 
       * 原因是: Object.assign() 是浅拷贝, 仅拷贝了第一层, 
       * 
       * 解决: 用copyObject JSON.parse(JSON.stringify)
       *
       * 
       */
      
      // Object.assign 不会破坏原有对象 formData
      form: Object.assign({}, formData),

      editIndex: -1,
    }
  },

  methods: {
    handleOpenEdit(index) {
      this.openModal = true;
      this.type = 'edit';
      this.editIndex = index;
      
      const data = this.list[index];
      this.form = Object.assign({}, data);
    },

    handleOpenCreate() {
      this.openModal = true;
      this.type = 'create';

      this.form = Object.assign({}, formData);
    },

    handleCreate() {
      this.list.push(this.form);

      this.openModal = false;
    },

    handleEdit() {
      this.list[this.editIndex] = this.form;

      this.openModal = false;
    },
  }

}
</script>

<style>
  .class-form-share {
    padding: 32px 495px;
  }
</style>
