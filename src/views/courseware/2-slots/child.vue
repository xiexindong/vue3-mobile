<template>
    <div>
        <h1>我是子组件</h1>
        <slot>默认插槽</slot>

        <slot name="title"></slot>
        <slot name="body"></slot>


    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    setup(props,context){
      console.log(context.slots)
      console.log(context.slots.default?.())
    }    
})
</script>