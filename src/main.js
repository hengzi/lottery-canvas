import Vue from 'vue'
import App from './App.vue'
import { bodyResize } from './utils/flexible'

import '@/assets/css/app.css' // 全局样式文件

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

let timer = 0
window.addEventListener('resize', () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    bodyResize(1920, 1080)
  }, 200)
})
bodyResize(1920, 1080)
