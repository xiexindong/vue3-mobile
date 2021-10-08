<template>
      <span>我是子组件</span>
</template>

<script lang="ts">
//  ref 功能1：响应式数据， 功能2：元素实例
import {defineComponent, ref} from 'vue'

export default defineComponent({
    setup(props,context){
        const data1  = ref(0)
        const data2 = ref('string')

        const toDo = () =>{
            console.log('1')
        }
        // 使用expose函数来控制组件被ref时向外暴露的对象内容，借此来维护组件的封装性。
        context.expose({
            data1,
            toDo
        })

         return {
            data1,
            data2,
            toDo
        }
    }    
})
</script>