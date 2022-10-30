import { createApp } from 'vue'
import store from './store/index'
import '@/CSS/styles.css'
import App from './App.vue'
import router from '@/router/router'

createApp(App).use(store).use(router).mount('#app')
