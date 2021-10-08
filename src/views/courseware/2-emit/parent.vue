<template>
    <div>
        <h2>我是父组件-测试emit</h2>
        {{ num }}
        <Child @count = "addNum" two="2222" three ='333'/>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
import Child from './child.vue'

export default defineComponent({
    components:{
        Child
    },
    setup(props,context){
        const num = ref(0)
        const addNum = (value:number)=>{
            console.log(value)
            num.value += value
        }

        return {
            num,
            addNum
        }
    }
    
})
</script>