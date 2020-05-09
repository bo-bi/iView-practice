<template>
  <div class="class-form">
    <h1>Form 表单验证的常用验证规则讲解</h1>
    <br><br>

    <Form ref="form" :model="form" :rules="rules" :label-width="70">
      <!-- 重要: prop用于校验 对应所绑定的form中所对应的字段 -->
      <FormItem label="输入框" prop="input">
        <!-- Input 开启 number 后, 输入的数字才是真正的数字, 不开启, 输入数字其实为字符串-->
        <Input v-model="form.input" />
      </FormItem>

      <Button @click="handleSubmit">提交</Button>
    </Form>


  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: '',
      },
      rules: {
        /**
         *  校验项 对应 FormItem 的 prop 其值为一个数组 其中每一个校验规则为一个对象
         *  校验是有先后顺序的, 若第一个对象校验成功, 才会开始校验下一个对象中的内容
         */
        input: [
          {
            // 是否是必填项
            required: true,
            message: '必填',
          },
          {
            // 校验触发的条件 blur | change 实时的进行校验
            trigger: 'change',

            /**
             * 指定数据类型
             * 常用的有 字符串 string、数字 number、数组 array、布尔值 boolean、网址 url、邮箱 * * email等
             */
            type: 'string',

            /**
             * 区间
             * 若 type 为 string 是指位数
             * 若 type 为 number 是指大小
             */
            // min: 2,
            // max: 5,

            /**
             * 长度 
             * 若 type 为 string 为位数
             * 若 type 为 array  为
             */
            len: 5,
            message: '长度必须是五',
          }
        ]
      }
    }
  },

  methods: {
    handleSubmit() {
      /**
       * valid 返回校验的结果
       */
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
  .class-form {
    padding: 32px 495px;
  }
</style>
