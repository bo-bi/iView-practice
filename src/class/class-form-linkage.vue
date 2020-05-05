<template>
  <div class="class-form-linkage">
    <h1>Form 表单组件的联动用法</h1>
    <br><br>

    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="信息">
        <Input v-model="form.message" />
      </FormItem>

      <FormItem label="性别">
        <Select v-model="form.gender" @on-change="handleChangeGender">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
        </Select>
      </FormItem>

      <FormItem label="城市">
        <Select v-model="form.city" style="width: 150px;" @on-change="handleChangeCity">
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
        </Select>
        <Select v-model="form.area" style="width: 150px;" v-if="form.city !== ''">
          <!--
            有的时候, 需要给相同的组件加 key 来避免重复利用缓存
            iView 4版本已经复现不了 切换城市后, 选择区域错误

            <Option value="chaoyang" key="chaoyang">朝阳区</Option>
            <Option value="haidian" key="haidian">海淀区</Option>

            <Option value="pudong" key="pudong">浦东新区</Option>
            <Option value="xuhui" key="xuhui">徐汇区</Option>

          -->
          <template v-if="form.city === 'beijing'">
            <Option value="chaoyang">朝阳区</Option>
            <Option value="haidian">海淀区</Option>
          </template>
          <template v-if="form.city === 'shanghai'">
            <Option value="pudong">浦东新区</Option>
            <Option value="xuhui">徐汇区</Option>
          </template>
        </Select>
      </FormItem>
    </Form>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        message: '',
        gender: '',
        city: '',
        area: '',
      },
    }
  },

  methods: {
    handleChangeGender(val) {
      if (val === 'male') {
        this.form.message = '你好, 先生!';
      } else {
        this.form.message = '你好, 女士!';
      }
    },

    handleChangeCity(val) {
      const area = val === 'beijing' ? 'chaoyang' : 'pudong';
      this.form.area = area;
    }
  }
}
</script>

<style>
  .class-form-linkage {
    padding: 32px 495px;
  }
</style>
