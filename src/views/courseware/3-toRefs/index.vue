<template>
    <div>
        <p>{{ year }}</p>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{wife}}</p>
        <button @click="updateUser">更新</button>
    </div>
</template>

<script lang="ts">
import { defineComponent , reactive ,ref,toRefs} from 'vue'
export default defineComponent({
    setup(){

        let year = ref(0)

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
            user.name = '李四'  // 影响
            user.age += 2       // 影响
            user.wife.books[0]='java' // 不受影响
            user.wife.name ='王五' // 不受影响  

        }
        // toRefs 用于将一个 reactive 对象转化为属性全部为 ref 对象的普通对象
        return {
            year,
            ...toRefs(user),
            updateUser
        }
        
    }
})
</script>