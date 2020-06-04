<template>
  <div id="app">
    <!-- <div class="main-container">
      <router-view class="router-view"></router-view> 
    </div> -->

    <!-- <table-demo1></table-demo1> -->
    <!-- <table-demo2></table-demo2> -->
    <!-- <table-demo3></table-demo3> -->
    <!-- <table-render></table-render> -->

    <!-- form start-->
    <!-- <form-demo1></form-demo1> -->
    <!-- <form-demo2></form-demo2> -->
    <!-- <form-demo3></form-demo3> -->
    <!-- <form-validate></form-validate> -->
    <!-- form end-->

    <!-- modal start-->
    <!-- <modal-demo1></modal-demo1> -->
    <!-- modal end-->

    <!-- checkbox start -->
    <!-- <checkbox-demo1></checkbox-demo1> -->
    <!-- <checkbox-demo2></checkbox-demo2> -->
    <!-- checkbox end -->

    <!-- menu start-->
    <third-level-Menu></third-level-Menu>
    <!-- menu start-->

    <!-- <class></class> -->
  </div>
</template>

<script>
import TableDemo1 from '@/demo/table/demo1.vue'
import TableDemo2 from '@/demo/table/demo2.vue'
import TableDemo3 from '@/demo/table/demo3.vue'
import TableRender from '@/demo/table/render.vue'

import FormDemo1 from '@/demo/form/demo1.vue'
import FormDemo2 from '@/demo/form/demo2.vue'
import FormDemo3 from '@/demo/form/demo3.vue'
import FormValidate from '@/demo/form/validate.vue'

import ModalDemo1 from '@/demo/modal/demo1.vue'

import CheckboxDemo1 from '@/demo/checkbox/demo1.vue'
import CheckboxDemo2 from '@/demo/checkbox/demo2.vue'

import ThirdLevelMenu from '@/demo/menu/thirdLevelMenu.vue'


import Class from '@/class/index.vue'

export default {
  name: 'app',
  components: {
    TableDemo1,
    TableDemo2,
    TableDemo3,
    TableRender,

    FormDemo1,
    FormDemo2,
    FormDemo3,
    FormValidate,

    ModalDemo1,

    CheckboxDemo1,
    CheckboxDemo2,
    
    ThirdLevelMenu,

    Class,
  }
}
</script>

<style>
  @import './common/reset.less';
  @import './common/global.less';
</style>
