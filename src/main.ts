import { createApp } from 'vue'
import { Button } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import 'vant/lib/index.less';


const app = createApp(App)


app.use(Button)
app.use(store)
app.use(router).mount('#app')
