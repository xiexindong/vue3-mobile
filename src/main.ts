import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/main.styl'


const app = createApp(App)



app.use(store).use(router).mount('#app')
