import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from '@/App.vue'
import '@/assets/main.css'

const app = createApp(App)
const piniaStore = createPinia()

app
  .use(piniaStore)
  .mount('#app')
