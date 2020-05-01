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
    <!-- table end-->
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

export default {
  data() {
    return {
      currentClass: 'table-edit-hang'
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
  }
}
</script>

<style>

</style>
