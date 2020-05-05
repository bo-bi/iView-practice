<template>
  <div class="class-form-id">
    <h1>iView 表单组件的 element-id 属性和 FormItem 的 label-for 属性用法</h1>
    <br><br>
    <!--
      支持 elemet-id 和 label-for 的有
      Input、DatePicker、TimePicker、Select、Cascader(级联选择器)、InputNumber(数字框)、AutoComplete(自动完成组件)
    -->
    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="输入框" label-for="element1">
        <Input v-model="form.input" element-id="element1" />
      </FormItem>

      <FormItem label="日期选择" label-for="element2">
        <DatePicker v-model="form.date" element-id="element2"></DatePicker>
      </FormItem>
    </Form>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: '',
        date: '',
      },
      rules: {
        
      }
    }
  },

}
</script>

<style>
  .class-form-id {
    padding: 32px 495px;
  }
</style>
