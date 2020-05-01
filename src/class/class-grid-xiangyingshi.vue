<template>
  <div>
    <!-- 原先start -->
    <!-- <Row>
      <Col span="6">
        <Card>
          <div style="height: 200px;"></div>
        </Card>
      </Col>
      <Col span="18">
        <Card>
          <div style="height: 800px;"></div>
        </Card>
      </Col>
    </Row> -->
    <!-- 原先end -->

    <Row>
      <Col :xs="0" :sm="6">
        <Card>
          <div style="height: 200px;"></div>
        </Card>
      </Col>
      <Col :xs="24" :sm="18">
        <Card>
          <div style="height: 800px;"></div>
        </Card>
      </Col>
    </Row>

    <!--
      响应式布局可传入具体的属性 span offset push pull order 
    -->
    <div style="height: 100px;"></div>

    <Row>
      <Col :xs="{ span: 24, offset: 0}" :sm="{ span: 6, offset: 1}">
        <Card>
          <div style="height: 200px;"></div>
        </Card>
      </Col>
      <Col :xs="{ span: 24, offset: 0}" :sm="{ span: 16, offset: 0}">
        <Card>
          <div style="height: 800px;"></div>
        </Card>
      </Col>
    </Row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * 响应式布局
       * xs < 576px
       * sm >= 576px
       * md >= 768px
       * lg >= 992px
       * xl >= 200
       * xxl>= 1600
       * 
       * 注意: span 不需要加: -> span="6"  xs sm md lg 需要加: -> :xs
       * 
       */
    }
  },

  methods: {
    
  }
}
</script>

<style>
  body {
    background-color: #f8f8f9 !important;
  }
</style>
