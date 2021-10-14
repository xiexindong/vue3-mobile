<template>
    <div>
        生命周期<br/>
        Composition API还新增了以下调试钩子函数：但是不怎么常用<br/>
        onRenderTracked<br/>
        onRenderTriggere<br/>
        <p>数字：{{num}}</p>
        <button @click="add">添加</button><br/>
        <div>-----------------------------------------------------</div>
        <!-- <Child ref='child' :num="num"/> -->
        <Child ref='child'/>
        <button @click="childAdd">子组件更新</button>
    </div>
</template>

<script lang="ts">
import { defineComponent,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,
ref } from 'vue'
import Child from "./child.vue"
export default defineComponent({
    components:{
        Child
    },
    setup(){
        const child = ref(null)
        const num = ref(0)
        const add = ()=>{
            num.value ++
        }
        const childAdd = ()=>{
            (child.value as any).add()
        }
        console.log('setup')
        onBeforeMount(() => {
            console.log('par--onBeforeMount')
        })
        onMounted(() => {
            console.log('par--onMounted')
        })
        onBeforeUpdate(() => {
            console.log('par--onBeforeUpdate')
        })

        onUpdated(() => {
            console.log('par--onUpdated')
        })

        onBeforeUnmount(() => {
            console.log('par--onBeforeUnmount')
        })

        onUnmounted(() => {
            console.log('par--onUnmounted')
        })
    return{
        num,
        add,
        child,
        childAdd
    }
    },
    beforeCreate(){
         console.log('old---------beforeCreate')
    },
    created(){
         console.log('old---------create')
    },
    beforeMount(){
        console.log('old---------beforeMounted')
    },
    mounted(){
        console.log('old---------mounted')
    },
    beforeUpdate(){
        console.log('old---------beforeUpdate')
    },   
    updated(){
        console.log('old---------updated')
    },
    beforeUnmount(){
        console.log('old---------beforeUnmount')
    },
    unmounted(){
        console.log('old---------unmounted')
    }
})
</script>