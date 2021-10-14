<template>
    <div @click="handleClick">
        <h2>我是父组件!</h2>
        <Child ref="child"  />
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Child from './child.vue'


export default defineComponent({
    components:{
        Child
    },
    setup(props,context){
        const child = ref(null)
        // console.log('child.value',child.value)  问题1：返回值-> null


        // 异步调用可以 猜想是不是 和 setup 调用的时机有关系，时机dom 没有渲染 
        // setTimeout(()=>{
        //     console.log(2222222,child.value.data1)  
        //     console.log(2222222,child.value.data2)

        // },1000)


        // 这样直接准确的拿到一个组件的实例的确很方便，
        // 但是有一个很大的问题——父组件能拿到子组件实例的所有属性和方法，
        // 那也就意味着子组件是没有满足封装性的。
        const handleClick = ()=>{
            console.log(child.value)
            // console.log(child.value.data1)
            // console.log(child.value.data2)
            // child.value.toDo()
        }

        

        return {
            child,
            handleClick
        }
    }    
})
</script>