<template>
  <div class="class-form-validate">
    <h1>Form 设置表单验证规则的多种方式</h1>
    <br><br>

    <!--
      表单校验方式
      1. 将所有 rules 放在 Form 上
      2. 在 FormItem 上放对应的 rules, 使用场景 v-for 生成 FormItem
      3. 单个 FormItem 上可以写 required, 并且可以动态绑定
    -->

    <Form ref="form" :model="form" :label-width="70">
      <RadioGroup v-model="type">
        <!-- label 对应为 RadioGroup 绑定的 type 的值-->
        <Radio :label="1">表单1</Radio>
        <Radio :label="2">表单2</Radio>
      </RadioGroup>

      <FormItem label="表单1" prop="input1" :required="required" v-if="type === 1">
        <Input v-model="form.input1" />
      </FormItem>

      <FormItem label="表单2" prop="input2" :rules="rules.input2" v-if="type === 2">
        <Select v-model="form.input2">
          <Option value="value1">value1</Option>
          <Option value="value2">value2</Option>
        </Select>
      </FormItem>
    </Form>

    <Checkbox v-model="required">是否必填</Checkbox>

    <Button @click="handleSubmit">提交</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
      required: false,
      form: {
        input1: '',
        input2: '',
      },
      rules: {
        input1: [
          {
            required: true,
          }
        ],
        input2: [
          {
            required: true,
          }
        ]
      }
    }
  },

  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.success('成功');
        } else {
          this.$Message.error('失败');
        }
      })
    }
  }
}
</script>

<style>
  .class-form-validate {
    padding: 32px 495px;
  }
</style>
