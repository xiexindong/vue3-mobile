<template>
    <div>
        <div>接受一个 getter 函数</div>
        <p>num:{{num}}</p>
        <p>computed:{{total}}</p>
        <button @click="add">添加</button>
        <p>-----------------------------------------------count------------------------</p>
        <!-- {{count}} -->
        <!-- <div>接受一个具有 get 和 set 函数的对象，用来创建可写的 ref 对象。</div> -->

      
        <input v-model="firstName"/>
        <input v-model="lastName" />

        <p>{{ fullName2 }}</p>


    </div>
</template>

<script lang="ts">
import  {  defineComponent,computed, ref, reactive,toRefs } from 'vue'
export default defineComponent({
    
    setup(){
        let num = ref(0)
        
        let total = computed(()=>{
            return  num.value + 2
        })

        
        const add = ()=>{
            num.value++
        }

       const user2 = reactive({
           firstName:'li',
           lastName:"si"
       })

       const fullName2 = computed(()=>{
           return  user2.firstName +'____'+ user2.lastName
       })


        return{
            num,
            total,
            add,
            ...toRefs(user2),
            fullName2,
            
        }
    }
  
   
})
</script>
