
<template>
    <div>22222</div>
</template>

<script lang="ts">
import { defineComponent, effect, reactive } from 'vue'

export default defineComponent({
    setup() {
        debugger
        let name =  reactive({
            name:'lisi'
        })

        effect(()=>{
            console.log(name)
        })

        return {
            name
        }
        
    },
})
</script>
