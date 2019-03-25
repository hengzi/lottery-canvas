export default class Ball {
  // constructor
  constructor() {
    this.name = ''
    this.radius = 50
    this.scale = 1
    // 3D 坐标
    this.x = 0
    this.y = 0
    this.z = 0
    // 3D 速度
    this.vx = 0
    this.vy = 0
    this.vz = 0
    // 3D 加速度
    this.ax = 0
    this.ay = 0
    this.az = 0
    // 2D 坐标
    this.posX = 0
    this.posY = 0
    // 边框渐变色
    this.color0 = '#000000'
    this.color1 = '#000000'
  }
  // Method
  draw(context) {
    context.save()
    context.translate(this.posX, this.posY)
    context.scale(this.scale, this.scale)
    const gradient = context.createLinearGradient(
      0,
      this.radius * this.scale,
      this.radius * this.scale,
      0
    )
    gradient.addColorStop(0, this.color0)
    gradient.addColorStop(1, this.color1)
    context.fillStyle = gradient
    context.beginPath()
    context.arc(0, 0, this.radius, 0, 2 * Math.PI)
    context.closePath()
    context.fill()
    context.restore()
  }
  drawImg(context) {
    if (!this.img.width) return
    context.save()
    context.translate(this.posX, this.posY)
    context.scale(this.scale, this.scale)
    context.beginPath()
    context.arc(0, 0, this.radius, 0, 2 * Math.PI)
    context.closePath()
    context.clip()
    context.drawImage(
      this.img,
      -this.radius,
      -this.radius,
      2 * this.radius,
      2 * this.radius
    )
    context.lineWidth = 10
    context.strokeStyle = context.createLinearGradient(
      0,
      this.radius * this.scale,
      this.radius * this.scale,
      0
    )
    context.strokeStyle.addColorStop(0, this.color0)
    context.strokeStyle.addColorStop(1, this.color1)
    context.stroke()
    context.restore()
  }
}
