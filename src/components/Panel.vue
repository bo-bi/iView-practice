<template>
  <div
    class="panel"
    :style="{
      'height': response ? 'auto' : bodyHeight,
      'background-image': 'url(' + src + ')'
    }"
  >
    <div class="mask"></div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyHeightNumber: 0
    };
  },

  props: {
    src: {
      type: String,
      default: '',
    },
    response: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    bodyHeight() {
      return this.bodyHeightNumber + "px";
    }
  },

  created() {
    this.bodyHeightNumber = document.body.clientHeight;
    window.addEventListener("resize", () => {
      this.bodyHeightNumber = document.body.clientHeight;
    });

    // Preload image
    setTimeout(() => {
      new Image().src = this.src;
    }, 100);
  }
};
</script>

<style lang="less">
.panel {
  width: 100%;
  min-height: 540px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .panel-body {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (min-width: 1100px) {
  .panel-body {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@media screen and (min-width: 1700px) {
  .panel-body {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@media screen and (min-width: 2000px) {
  .panel-body {
    transform: translate(-50%, -50%) scale(1.3);
  }
}

@media screen and (min-width: 2300px) {
  .panel-body {
    transform: translate(-50%, -50%) scale(1.4);
  }
}
</style>
