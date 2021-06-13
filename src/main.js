import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'tailwindcss/tailwind.css'
import axios from 'axios'
import settingse from '../settings.json'
const app = createApp(App)
app.config.globalProperties.axios = axios
app.config.globalProperties.settings = settingse
app.use(router).mount('#app')
