<template>
    <div @click="handleClick">
        <h2>我是父组件!</h2>
        <Child>
            <h1>我是默认插槽2</h1>
            <template  v-slot:title>
                <h1>我是title</h1>
            </template>
            <template v-slot:body>
                <h2>我是body</h2>
            </template>
        </Child>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Child from './child.vue'


export default defineComponent({
    components:{
        Child
    },
   
})
</script>