<template>
    <div>
        <h2>我是子组件</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        msg:String
    },
    // 父组件向子组件传递了若干属性，我们假设child组件定义了一个msg，那么子组件接收到的attrs就是{a: "1", b: "2"}。
    setup(props,context){
        console.log(props)
        console.log(context.attrs)
    }
})
</script>