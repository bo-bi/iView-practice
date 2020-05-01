<template>
  <div>
    <!--
      Col 把一整行 Row 分成了 24 列

      1. Row 一行分成24列, 在 Col 上赋值 span 属性, 相加为24即可
         超过24会自动折行
    -->

    <!-- <Row>
      <Col v-for="item in 24" span="1">
        <Card :title="item.toString()">
          {{ item }} 列
        </Card>
      </Col>
    </Row> -->

    <!-- <Row :gutter="50">
      <Col span="8">
        <Card>
          内容1
        </Card>
      </Col>
      <Col span="8">
        <Card>
          内容2
        </Card>
      </Col>
      <Col span="8">
        <Card>
          内容3
        </Card>
      </Col>
    </Row> -->


    <!--
      2. gutter 为 Col 之间的相隔距离, 值推荐为 16 每次在原来基础上加8 诸如24 32等
         gutter 嵌套用法
    -->

    <!-- gutter嵌套用法 start -->
    <!-- <Row :gutter="32">
      <Col span="8">
        <Card>
          内容1
        </Card>
      </Col>
      <Col span="16">
        <Row :gutter="24">
          <Col span="16">
            <Card>
              内容2
            </Card>
          </Col>
          <Col span="8">
            <Card>
              内容3
            </Card>
          </Col>
        </Row>
      </Col>
    </Row> -->
    <!-- gutter嵌套用法 end -->


    <!--
      3. 布局: 左侧固定(使用 Affix 组件), 右侧可以上下滚动
      
      需求:
        <1>. 左侧固定, 右侧可以滚动
        <2>. 左侧有两个块, 滚动过第一个块之后, 第二个块固定
        <3>. 若顶部有导航条, 左侧固定如何固定在导航条下面, 而不是浏览器顶端
             需要在 Affix 组件上加 offset-top 即可
    -->
    <Row :gutter="40">

      <!-- 需求3 附加 start -->
      <div style="z-index: 10; position: fixed; left: 0; width: 100%; height: 50px; background-color: red;"></div>
      <!-- 需求3 附加 end -->

      <Col span="8">
        <!-- 需求2 附加 start -->
        <Card>
          <div style="height: 200px;"></div>
        </Card>
        <!-- 需求2 附加 end -->

        <!-- 需求1 start -->
        <!-- <Affix>
          <Card>
            <div style="height: 200px;"></div>
          </Card>
        </Affix> -->
        <!-- 需求1 end -->

        <!-- 需求3 start -->
        <Affix :offset-top="50">
          <Card>
            <div style="height: 200px;">内容</div>
          </Card>
        </Affix>
        <!-- 需求3 end -->
      </Col>
      <Col span="16">
        <Card>
          <div style="height: 600px;"></div>
        </Card>
      </Col>
    </Row>

    <!--
      4. 垂直居中
        type="flex" justify="center" align="middle"
    -->

    <Row style="margin-top: 100px;" type="flex" justify="center" align="middle">
      <Col span="2">
        <Avatar
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588249715861&di=389db6245965718e2775eabdbd681a62&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3984473917%2C238095211%26fm%3D214%26gp%3D0.jpg" 
          shape="square"
        >
        </Avatar>
      </Col>
      <Col span="18">
        <p>我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊</p>
        <p>我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊</p>
        <p>我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊</p>
      </Col>
      <Col span="4">
        <Icon type="ios-checkmark" color="#2d8cf0" size="28"></Icon>
      </Col>
    </Row>

    <!--
      5. offset 给这一列Col 一个向右的位移 可移动列数 就是 栅格列数 一共24列

    -->

    <Row style="margin-top: 200px;">
      <Col span="2" offset="2">
        <Card>
          <div style="height: 100px;"></div>
        </Card>
      </Col>
      <Col span="18">
        <Card>
          <div style="height: 200px;"></div>
        </Card>
      </Col>
    </Row>

    <!--
      5. 解决异步请求接口影响页面变化: Col 没有内容默认是没有宽度的, 当接口获取到数据后填充, 页面会发生明显变化

      推荐使用占位 <div style="width: 100%; height: 1px;"></div>
      也可以使用伪元素 虽然不太优雅 但是作者推荐
    -->

    <Row style="margin-top: 100px;">
      <Col span="18">
        {{ content }}
        <div style="width: 100%; height: 1px;"></div>
      </Col>
      <Col span="4">
        <Card>
          <div style="height: 200px;"></div>
        </Card>
      </Col>
    </Row>
    <Button @click="handleSetData">填充内容</Button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },

  methods: {
    handleSetData() {
      this.content = '我们是什么啊我们是什么啊我们是什么啊我们是什么啊我们是什么啊';
    }
  }
}
</script>

<style>
  body {
    height: 5000px !important;
    background-color: #f8f8f9 !important;
  }
</style>
