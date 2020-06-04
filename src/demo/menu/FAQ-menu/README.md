参考: iview menu手动展开[https://segmentfault.com/q/1010000010061977]

open   是 要自动打开的tab 的集合, 值为 多个subMenu 的 name 的集合
active 是 要高亮的tab, 值为 MenuItem 的 name 值

无论是要自动打开还是高亮, 操作的都是 name 值

:open-names="open"
:active-name="active"

设置了 open active 后再进行更新:
this.$nextTick(() => {
  this.$refs.menus.updateOpened();
  this.$refs.menus.updateActiveName();
})


