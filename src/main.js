import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Clipboard from './utils/vue-clipboard'

import './permission'
import './style/index.scss'

import EhfIcon from './layout/ehf-icon'

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(Clipboard)
  .component('ehf-icon', EhfIcon)
  .mount('#app')
