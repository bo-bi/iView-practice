<template>
  <Table :columns="columns14" :data="data5" border :span-method="handleSpan"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns14: [
        {
          title: "Date",
          key: "date"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],

      data5: [
        {
          name: "周杰伦",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "成龙",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "陈奕迅",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "李荣浩",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleSpan({ row, column, rowIndex, columnIndex }) {
      // console.log('row', row);
      // console.log('column', column);
      // console.log('rowIndex', rowIndex);
      // console.log('columnIndex', columnIndex);

      // 如果行的索引为0 且 列的索引为0
      if (rowIndex === 0 && columnIndex === 0) {
        return [1, 2];
      } else if (rowIndex === 0 && columnIndex === 1) {
        return [0, 0];
      }
      if (rowIndex === 2 && columnIndex === 0) {
        return {
          rowspan: 2,
          colspan: 1
        };
      } else if (rowIndex === 3 && columnIndex === 0) {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
    }
  }
};
</script>
