<template>
    <div>
        <p>{{user.name}}</p>
        <p>{{user.age}}</p>
        <p>{{user.wife}}</p>
        <button @click="updateUser">更新</button>
        <p>---------------------------------------对比--------------------------</p>
        <p>{{user2.name}}</p>
        <p>{{user2.age}}</p>
        <p>{{user2.wife}}</p>
        <button @click="updateUser2">更新</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive,ref } from 'vue'
export default defineComponent({
    setup(){
        const user = reactive({
            name:'张三',
            age:28,
            wife:{
                name:'小红',
                age:28,
                books:['JavaScript权威指南','数据结构']
            }
        })

        const updateUser = ()=>{
            user.name = '李四'
            user.age += 2
            user.wife.books[0]='java'

        }

        // ref 和 reactive 的区别
        //1： reactive 接受一个普通对象,处理对象的双向绑定,不能代理基本类型
        //2： 处理 js 基础类型的双向绑定
        //ref 可以处理对象 也可以处理对象
        
        const user2 = ref({
            name:'王五',
            age:18,
            wife:{
                name:'小花',
                age:18,
                books:['设计模式','react入门到精通']
            }
        })
        

        const updateUser2 = () =>{
            user2.value.name = '赵六'
            user2.value.age += 2
            user2.value.wife.books[0] ='红楼梦'
        }



        return {
            user,
            updateUser,
            user2,
            updateUser2
        }
    }

})
</script>   