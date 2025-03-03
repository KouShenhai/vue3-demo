import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'

// 引入echarts
import Echarts from 'vue-echarts'
import * as echarts from 'echarts'

const app = createApp(App)

app.use(createPinia())

// 使用组件
app.component('e-charts',Echarts)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts


app.use(router)

app.mount('#app')
