<template>
  <!--
    open-names 展开的 Submenu 的 name 集合
    刷新若要展开三级 需要也展开二级 open-names 需要有当前三级 及 其二级的 Submenu name
  -->
  <!-- <Menu active-name="1-2" :open-names="['1']"> -->
    <!-- :open-names="['2', '3']" -->
  <Menu active-name="3-2" ref="menu">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-analytics" />Navigation One
      </template>
      <MenuGroup title="Item 1">
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
      </MenuGroup>
      <MenuGroup title="Item 2">
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </MenuGroup>
    </Submenu>

    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-filing" />Navigation Two
      </template>
      <MenuItem name="2-1">Option 5</MenuItem>
      <MenuItem name="2-2">Option 6</MenuItem>
      <Submenu name="3">
        <template slot="title">Submenu</template>
        <MenuItem name="3-1">Option 7</MenuItem>
        <MenuItem name="3-2">Option 8</MenuItem>
      </Submenu>
    </Submenu>

    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-cog" />Navigation Three
      </template>
      <MenuItem name="4-1">Option 9</MenuItem>
      <MenuItem name="4-2">Option 10</MenuItem>
      <MenuItem name="4-3">Option 11</MenuItem>
      <MenuItem name="4-4">Option 12</MenuItem>
    </Submenu>
  </Menu>

  <!-- <Menu active-name="3-1" :open-names="['1']">
    <Submenu name="2">
      <template slot="title">最大的级别一</template>

      <MenuItem name="2-1">电视机</MenuItem>

      <MenuItem name="2-2">冰箱</MenuItem>

      <Submenu name="3">
        <template slot="title">智能摄像机</template>
        <MenuItem name="3-1">Option 7</MenuItem>
        <MenuItem name="3-2">Option 8</MenuItem>
      </Submenu>
    </Submenu>
  </Menu>-->
</template>



<script>
export default {
  mounted() {
    this.menuActive(); //调用
  },

  methods: {
    menuActive() {
      //被激活的菜单组
      this.$nextTick(function() {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName();
      });
    }
  }
};
</script>

<style>
</style>
