<template>
  <div class="class-form-disabled">
    <h1>巧用元素的禁用属性</h1>
    <br><br>

    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="姓名">
        <Input v-model="form.name" />
      </FormItem>

      <FormItem label="密码">
        <Input v-model="form.password" type="password" />
      </FormItem>

      <FormItem label="确认密码">
        <Input v-model="form.password2" type="password" :disabled="form.password.length < 6" />
      </FormItem>
    </Form>

    <!-- <Button :disabled="form.name === ''">提交</Button> -->

    <!-- 当 v-bind 绑定的值过长或逻辑较多时, 建议写在计算属性 computed 里-->
    <Button :disabled="submitDisabled">提交</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        password2: '',
      },
    }
  },

  computed: {
    submitDisabled() {
      let disabled = false;

      if (this.form.name === '') disabled = true;

      if (this.form.password.length < 6 || this.form.password2.length < 6) disabled = true;

      if (this.form.password !== this.form.password2) disabled = true;

      return disabled;
    }
  }

}
</script>

<style>
  .class-form-disabled {
    padding: 32px 495px;
  }
</style>
