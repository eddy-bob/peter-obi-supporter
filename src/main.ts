import { createApp } from 'vue'
import router from "./core/router"
import './assets/styles/index.css'
import App from './App.vue'

const volunteerApp = createApp(App)
volunteerApp.use(router)
volunteerApp.mount('#app')
