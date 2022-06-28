import { createApp } from 'vue'
import '../mock'// 引⼊mock.js
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/request'
import { Button, Form, Input, Row, Col, Checkbox } from 'ant-design-vue'
import 'ant-design-vue/es/button/style/css'
import 'ant-design-vue/es/form/style/css'
import 'ant-design-vue/es/input/style/css'
import 'ant-design-vue/es/row/style/css'
import 'ant-design-vue/es/checkbox/style/css'
import 'ant-design-vue/es/col/style/css'

createApp(App).use(store).use(router).use(Button).use(Form).use(Input).use(Row).use(Col).use(Checkbox).mount('#app')
