<template>
    <NavBar>
        <slot name="title"></slot>
    </NavBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavBar } from 'vant'
export default defineComponent({
    components:{
        NavBar
    } ,
    setup(props,context){
        console.log('setup',props)
        console.log('context',context)
    }
})
</script>