
<template>
    <div>22222</div>
</template>

<script lang="ts">
import { defineComponent, effect, reactive } from 'vue'

export default defineComponent({
    setup() {
        
        let proxy =  reactive({
            name:'lisi'
        })

        effect(()=>{
            console.log(proxy.name)
        })


        proxy.name = 'zhangsan'

        
        

        return {
            proxy
        }
        
    },
})
</script>
