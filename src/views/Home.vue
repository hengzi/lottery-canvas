<template>
  <div class="home" @keydown.enter="onPress" autofocus>
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script>
import Ball from '@/utils/ball'

export default {
  name: 'home',
  data() {
    return {
      canvasCtx: null,
      canvasWidth: 1920,
      canvasHeight: 1080,
      animationTimer: null,
      ballList: [], // 按照 z 升序排列
      NUM: 30, // 个数
      RADIUS: 80, // 半径 radius
      D0: 1000, // 出现位置到屏幕的距离
      D1: 200, // 屏幕到观察位置的距离
      AZ: 0.1, // z 加速度
      VZ: 5, // z 初始速度
      R: 0 // 颜色变量
    }
  },
  computed: {
    centerX() {
      return this.canvasWidth / 2
    },
    centerY() {
      return this.canvasHeight / 2
    },
    D() {
      return this.D0 + this.D1
    },
    T() {
      // 从起始位置到结束位置需要的时间
      if (this.AZ < 0.0001) {
        return this.D / this.VZ
      }
      // t=[√（2as+Vo²）-Vo]/a
      return (
        (Math.sqrt(2 * this.AZ * this.D + Math.pow(this.VZ, 2)) - this.VZ) /
        this.AZ
      )
    }
  },
  methods: {
    startAnimation() {
      for (let i = this.NUM; i > 0; i--) {
        const t = ((i - 1) / this.NUM) * this.T
        this.addBall(t)
      }
      cancelAnimationFrame(this.animationTimer)
      this.animationTimer = requestAnimationFrame(this.update)
    },
    stopAnimation() {
      this.ballList = []
      this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      cancelAnimationFrame(this.animationTimer)
    },
    update() {
      let last = this.ballList[this.ballList.length - 1]
      while (last && last.z + last.vz + last.az >= this.D) {
        this.ballList.pop()
        this.addBall()
        last = this.ballList[this.ballList.length - 1]
      }
      this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.ballList.forEach(ball => {
        ball.vz += ball.az
        ball.z += ball.vz
        ball.scale = this.D1 / (this.D - ball.z)
        ball.posX = this.centerX + ball.x * ball.scale
        ball.posY = this.centerY + ball.y * ball.scale
        ball.drawImg(this.canvasCtx)
      })
      this.animationTimer = requestAnimationFrame(this.update)
    },
    addBall(t = 0) {
      let ball = new Ball()
      ball.radius = this.RADIUS
      ball.az = this.AZ
      ball.vz = this.VZ + this.AZ * t
      ball.z = ((this.VZ + ball.vz) * t) / 2
      ball.x = (Math.random() - 0.5) * this.canvasWidth
      ball.y = (Math.random() - 0.5) * this.canvasHeight
      ball.color0 = this.getColor()
      ball.color1 = this.getColor()
      const avatar = new Image()
      // 随机头像
      avatar.src = 'https://api.uomg.com/api/rand.avatar?r=' + Math.random()
      ball.img = avatar
      this.ballList.unshift(ball)
    },
    getColor() {
      this.R += Math.PI / 12
      let rgb = (
        ((Math.cos(this.R) * 127 + 128) << 16) |
        ((Math.cos(this.R + (Math.PI * 2) / 3) * 127 + 128) << 8) |
        (Math.cos(this.R + (Math.PI * 4) / 3) * 127 + 128)
      ).toString(16)
      return rgb.padStart(7, '#000')
    }
  },
  mounted() {
    this.canvasCtx = this.$refs['canvas'].getContext('2d')
    this.startAnimation()
  },
  beforeDestroy() {
    this.stopAnimation()
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
