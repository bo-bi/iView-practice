<template>
  <div class="class-form-action">
    <h1>Form 同步提交 (提交到后端) 表单的用法</h1>
    <br><br>

    <!--
      这个案例自己做的没成功, 带有时间再试试
      action: 提交的路径
      method: 方法

      需指定 button 为 submit 类型的按钮才可以这样提交
      还需指定 name 因为服务端是通过获取 name 来知道 我传过去的是什么值的
    -->

    <Form ref="form" :model="form" :label-width="70" action="iview.com" method="get">
      <FormItem label="输入框">
        <Input v-model="form.input" name="input" />
      </FormItem>
      <FormItem label="选择器">
        <Select v-model="form.select" name="select">
          <Option value="value1">value1</Option>
          <Option value="value2">value2</Option>
        </Select>
      </FormItem>
    </Form>

    <Button html-type="submit">提交</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: '',
        select: '',
      },
    }
  },

}
</script>

<style>
  .class-form-action {
    padding: 32px 495px;
  }
</style>
