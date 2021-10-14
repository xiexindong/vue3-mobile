<template>
    <div>
        <p>子组件生命周期</p>
        <p>数字：{{num}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,
ref } from 'vue'
export default defineComponent({
    setup(){
        const num = ref(0)
        const add = ()=>{
            num.value ++
        }

        console.log('setup')
        onBeforeMount(() => {
            console.log('child--onBeforeMount')
        })
        onMounted(() => {
            console.log('child--onMounted')
        })
        onBeforeUpdate(() => {
            console.log('child--onBeforeUpdate')
        })

        onUpdated(() => {
            console.log('child--onUpdated')
        })

        onBeforeUnmount(() => {
            console.log('child--onBeforeUnmount')
        })

        onUnmounted(() => {
            console.log('child--onUnmounted')
        })
    return{
        num,
        add
    }
    },
    beforeCreate(){
         console.log('child---old---------beforeCreate')
    },
    created(){
         console.log('child---old---------create')
    },
    beforeMount(){
        console.log('child---old---------beforeMounted')
    },
    mounted(){
        console.log('child---old---------mounted')
    },
    beforeUpdate(){
        console.log('child---old---------beforeUpdate')
    },   
    updated(){
        console.log('child---old---------updated')
    },
    beforeUnmount(){
        console.log('child---old---------beforeUnmount')
    },
    unmounted(){
        console.log('child---old---------unmounted')
    }
})
</script>