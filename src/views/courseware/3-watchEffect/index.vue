<template>
    <div>2222</div>
</template>

<script lang="ts">
import { defineComponent,watchEffect,ref } from 'vue'
export default defineComponent({
    setup(){
        let a = ref(0)    
        const stop = watchEffect(() => {
            console.log(a.value) // ref  类型的需要加.value
        })
        setInterval(() => {
          a.value++
        // -> logs 1
        }, 1000)

        setTimeout(()=>{
            stop()
        },4000)
    }
})
</script>