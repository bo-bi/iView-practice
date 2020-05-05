<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px;">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
import Emitter from 'view-design/src/mixins/emitter';

export default {
  mixins: [
    Emitter,
  ],

  props: {
    value: {
      type: Number,
    }
  },

  data() {
    return {
      currentValue: this.value,
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    }
  },

  methods: {
    increase(val) {
      this.currentValue += val;
      this.$emit('input', this.currentValue);

      /**
       * 向 FormItem 派发一个事件
       * 
       * 这里有两种
       * on-form-change 对应 trigger 为 change
       * on-form-blur 对应 trigger 为 blur
       * 
       * 把对应的数据传过去
       */
      this.dispatch('FormItem', 'on-form-change', this.currentValue);
    }
  }
}
</script>

<style>

</style>
