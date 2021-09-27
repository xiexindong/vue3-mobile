import { defineComponent,ref } from 'vue';
import useExpose from '@/composition/use-expose'

export default defineComponent({
    setup(props,context){

        const showPicker = ref(false)

        const open = ()=>{
            showPicker.value = true
        }

        useExpose({ open })
        return()=>(<van-popup 
                position="bottom"
                v-model={[showPicker.value]}
            >

            <div>2222</div>
        </van-popup>)
    }
})