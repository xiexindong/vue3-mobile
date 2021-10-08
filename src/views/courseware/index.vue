<template>
    <div>
        <h1>父组件生命周期</h1>
        <SubComp> </SubComp>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import SubComp from "./setup.vue"
export default defineComponent({
    components:{
        SubComp
    },
    setup(props,context){
        // 在创建组件之前调用的，没有this
        console.log('par-----setup()--------')
        // console.log('par---setup()--------',this)

    },
    beforeCreate(){
        console.log('par-----beforeCreate()--------')
        // console.log('par-----beforeCreate()--------',this)

    },
    created(){
        // 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，
        // 意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
        // 然而，挂载阶段还没开始，且 $el property 目前尚不可用。
        console.log('par-----created()--------')
        console.log('par-----created()-----',JSON.stringify(this))
    },

    mounted(){
        console.log('par-----onMounted')
    }
    
})

</script>