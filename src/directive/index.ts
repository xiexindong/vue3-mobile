import { App } from 'vue'
import pin from './pin'
import focus from './focus'



const install = function(app:App<Element>){
    app.directive('pin',pin)
    app.directive('focus',focus)
}


export default install