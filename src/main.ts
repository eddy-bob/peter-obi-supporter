import { createApp } from 'vue'
import router from "./core/router"
import './assets/styles/index.css'
import Notifications from '@kyvg/vue3-notification'

import { createPinia } from "pinia";
import App from './App.vue'

const volunteerApp = createApp(App)

volunteerApp.use(router)
volunteerApp.use(createPinia());
volunteerApp.mount('#app')
