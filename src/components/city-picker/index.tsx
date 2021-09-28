import { defineComponent,ref } from 'vue';
import useExpose from '@/composition/use-expose'
import CITYS from './city.json';
import { Picker } from 'vant';

export default defineComponent({
    setup(props,context){

        const showPicker = ref(false)

        const open = ()=>{
            showPicker.value = true
        }

        function initAddressData(){
            const copyData = []
            CITYS.map(n=>{
                
            })
        }

        useExpose({ open })
        return()=>(<van-popup 
                position="bottom"
                v-model={[showPicker.value,'show']}
            >
                <Picker
                    columns = {CITYS}
                />
        </van-popup>)
    }
})