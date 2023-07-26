import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as antIcons from '@ant-design/icons-vue'
import * as ionicons5 from '@vicons/ionicons5'
import * as components from '@/util/Components'
import * as componentsConfig from '@/util/ComponentsConfig'


const app = createApp(App)
Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})
Object.keys(ionicons5).forEach(key => {
    app.component(key, ionicons5[key])
})

Object.keys(components).forEach(key => {
    app.component(key, components[key])
})
Object.keys(componentsConfig).forEach(key => {
    app.component(key, componentsConfig[key])
})

app.config.globalProperties.$antIcons = antIcons
app.config.globalProperties.$ionicons5 = ionicons5
app.config.globalProperties.$components = components
app.config.globalProperties.$componentsConfig = componentsConfig

app.use(createPinia())
app.use(Antd)

app.mount('#app')
