import { createApp } from 'vue'
import { Button,Tabbar,TabbarItem,Form,Field,NavBar,DropdownMenu,DropdownItem,NoticeBar,Steps,Step,CellGroup,Cell,Popup} from 'vant';
import App from './App.vue'
import directive from './directive'
import BaseComponents from './components/base'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/mian.less'
import 'vant/lib/index.less';


const app = createApp(App)

app.use(Button).use(Tabbar).use(TabbarItem).use(Form).use(Step).use(CellGroup).use(Cell)
.use(Field).use(DropdownMenu).use(DropdownItem).use(NoticeBar).use(Steps).use(NavBar).use(Popup)
app.use(directive)
app.use(BaseComponents)
app.use(store)
app.use(router).mount('#app')
