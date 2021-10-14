<template>
    <div>
        <div>   
            <p>非响应式数据</p>
            {{ num }}
            <button @click="add">添加</button>
        </div>
        <div>
            <p>响应式数据</p>
            {{count}}
            <button @click="updateCount" >添加</button>
        </div>
        <div>
            <p>ref 获取元素节点</p>
              <input type="text">---
              <input type="text" ref="inputRef">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,onMounted,readonly,ref } from 'vue'
export default defineComponent({
        setup(){
            // num 为非 响应式的数据
            let num = 0

            const add = ()=>{
                num += 1
                console.log(num)
            }

            //定义一个响应式的数据(一般用来定义一个基本类型的响应式数据Undefined、Null、Boolean、Number和String) 
            //探索 可以定义个对象
            //ref 用于定义一个响应式的数据

            let count = ref(0)
            const updateCount = () =>{
                count.value ++
            }

            //在Vue2中我们通过this.$refs来获取dom节点，Vue3中我们通过ref来获取节点
            //首先需要在标签上添加ref='xxx'，然后再setup中定义一个初始值为null的ref类型,名字要和标签的ref属性一致
            const inputRef = ref(undefined)
            
            onMounted(()=>{
                // console.log(222,(inputRef.value as any).focus())
                inputRef.value && (inputRef.value as any).focus()
                
            })

            return {
                num,
                add,
                count,
                updateCount,
                inputRef
            }
        }
})
</script>