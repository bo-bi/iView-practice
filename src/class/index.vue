<template>
  <div>
    <!-- 第二节课 start-->
    <class-menu v-if="currentClass === 2"></class-menu>
    <!-- 第二节课 end -->

    <!-- 第三节课 start-->
    <class-grid v-if="currentClass === 3"></class-grid>

    <class-grid-xiang-ying-shi v-if="currentClass === 3.1"></class-grid-xiang-ying-shi>
    <!-- 第三节课 end-->

    <!-- table start-->
    <class-table v-if="currentClass === 'table'"></class-table>

    <class-table-order-filter  v-if="currentClass === 'table-order-filter'"></class-table-order-filter>

    <class-table-order-filter-qianduan  v-if="currentClass === 'table-order-filter-qianduan'"></class-table-order-filter-qianduan>

    <class-table-edit-danyuange v-if="currentClass === 'table-edit-danyuange'"></class-table-edit-danyuange>

    <class-table-edit-hang v-if="currentClass === 'table-edit-hang'"></class-table-edit-hang>

    <class-table-outer v-if="currentClass === 'table-outer'"></class-table-outer>
    <!-- table end-->

    <!-- Fomr start-->
    <class-form v-if="currentClass === 'form'"></class-form>
    <class-form-validate v-if="currentClass === 'form-validate'"></class-form-validate>
    <class-form-id v-if="currentClass === 'form-id'"></class-form-id>
    <class-form-linkage v-if="currentClass === 'form-linkage'"></class-form-linkage>
    <class-form-my-component v-if="currentClass === 'form-myComponent'"></class-form-my-component>
    <class-form-action v-if="currentClass === 'form-action'"></class-form-action>
    <class-form-disabled v-if="currentClass === 'form-disabled'"></class-form-disabled>
    <class-form-share v-if="currentClass === 'form-share'"></class-form-share>
    <class-form-custome-validate v-if="currentClass === 'form-custome-validate'"></class-form-custome-validate>
    <!-- Fomr end-->
  </div>
</template>

<script>
import ClassMenu from './class-menu'
import ClassGrid from './class-grid'
import ClassGridXiangYingShi from './class-grid-xiangyingshi'
import ClassTable from './class-table'
import ClassTableOrderFilter from './class-table-orderAndfilter'
import ClassTableOrderFilterQianduan from './class-table-orderAndfilter-qianduan'
import ClassTableEditDanyuange from './class-table-edit-danyuange'
import ClassTableEditHang from './class-table-edit-hang'
import ClassTableOuter from './class-table-outer'

import ClassForm from './class-form'
import ClassFormValidate from './class-form-validate'
import ClassFormId from './class-form-id'
import ClassFormLinkage from './class-form-linkage'
import ClassFormMyComponent from './class-form-myComponent'
import ClassFormAction from './class-form-action'
import ClassFormDisabled from './class-form-disabled'
import ClassFormShare from './class-form-share'
import ClassFormCustomeValidate from './class-form-custome-validate'

export default {
  data() {
    return {
      currentClass: 'form-myComponent'
    }
  },

  components: {
    ClassMenu,
    ClassGrid,
    ClassGridXiangYingShi,

    ClassTable,
    ClassTableOrderFilter,
    ClassTableOrderFilterQianduan,

    ClassTableEditDanyuange,
    ClassTableEditHang,
    ClassTableOuter,

    ClassForm,
    ClassFormValidate,
    ClassFormId,
    ClassFormLinkage,
    ClassFormMyComponent,
    ClassFormAction,
    ClassFormDisabled,
    ClassFormShare,
    ClassFormCustomeValidate,
  }
}
</script>

<style>

</style>
