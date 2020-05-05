<template>
  <div class="class-form-myComponent">
    <h1>自定义的表单组件 与 iView Form 的验证集成</h1>
    <br><br>

    <!--
      阻止表单自动提交 @submit.native.prevent
    -->

    <Form ref="form" :model="form" :rules="rules" :label-width="70" @submit.native.prevent>
      <!--
        这里发现 
        点击提交 会进行校验 是因为 绑定了 prop, 对值进行了校验 
        但是 触发行为 change 并没有触发校验(在自定义组件中进行了操作)
      -->
      <FormItem prop="number">
        <Number v-model="form.number"></Number>
      </FormItem>

      <Button @click="handleSubmit">提交</Button>
    </Form>
      
  </div>
</template>

<script>
import Number from '@/components/Number'
export default {
  components: {
    Number,
  },

  data() {
    return {
      form: {
        number: 1,
      },
      rules: {
        number: [
          {
            type: 'number',
            min: 3,
            // 实时的
            trigger: 'change',
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
  .class-form-myComponent {
    padding: 32px 495px;
  }
</style>
