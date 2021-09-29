<template>
    <div>
        <h1>setup 执行时机</h1>
        <slot>9999999999999999</slot>
        <slot name="title"></slot>
    </div>
</template>

<script lang="ts">
import  {  defineComponent } from 'vue'
export default defineComponent({
    name:'setup',
    data(){
        return{
            msg:'hello'
        }
    },
    props:{
        three:String,
        two:String

    },

    setup(props,context){
        // 在创建组件之前调用的，没有this
        // console.log('setup()--------')
        // console.log('setup()--------',this)

        // 参数一
        // console.log('setup()--------',props)
        // 参数二: context 上下文  attrs emit slots  expose
        // context 非响应式属性 可以用context.attrs 访问
  
        // console.log(context.attrs.desc)

        // 插槽 (非响应式对象)
        // console.log(context.slots.default())
        // console.log(context.slots.title())

        // 触发事件 (方法)
        // context.emit('myAdd',2222)



    },
    beforeCreate(){
        // console.log('beforeCreate()--------')
        // console.log('beforeCreate()--------',this)

    },
    created(){
        // 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，
        // 意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
        // 然而，挂载阶段还没开始，且 $el property 目前尚不可用。
        console.log('created()--------')
        console.log('created()-----',JSON.stringify(this))
        console.log('created()--------',this.msg)


    }
})
</script>
