<template>
    <div>
        <h2>我是父组件-测试props</h2>
        {{ num }}
        <Child @count = "addNum" a="1" b="2"  msg="hello" style="color:red" class="parent"/>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
import Child from './child.vue'

export default defineComponent({
    components:{
        Child
    },
 
    
})
</script>