<template>
    <div>
        <h2>我是子组件</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        two:String,
        three:String
    },
   
    setup(props,context){
        // 通过props 声明的数据，可以在props 中访问
        // console.log(props)

        // 没有声明在 attrs 中访问
        // console.log(context.attrs)

        context.emit('count',2)
        
    }
})
</script>