<template>
    <div>
            {{state}}
    </div>
</template>
<script lang="ts">
import { defineComponent, watch, reactive, ref, watchEffect,toRefs } from 'vue'
export default defineComponent({
    setup(){

        // 监听ref
        const state =  ref(0)

        watch(state,(newValue,oldValue)=>{
            console.log(`原始值${oldValue}`)
            console.log(`最新值${newValue}`)

        })


        // setInterval(()=>{
        //     state.value ++
        // },1000)



        // 监听reactive
        // const state2 = reactive({
        //     count2:0
        // })

        // watch(()=>state2.count2,(newValue,oldValue)=>{
        //     console.log(`reactive原始值${oldValue}`)
        //     console.log(`reactive最新值${newValue}`)
        // })

        // setInterval(()=>{
        //     state2.count2 ++
        // },1000)

        // 监听数组
        // const numbers = reactive([1,2,3,4])

        // watch(()=>[...numbers],(newValue,oldValue)=>{
        //     console.log('数组原始值',newValue)
        //     console.log('数组最新值',oldValue)
        // })

        // setTimeout(()=>{
        //     numbers.push(5)
        // },1000)


        // 深度监听
        const user = reactive({
            name:'li',
            sex:'nan',
            wift:{
                name:'zhang',
                sex:'nv',
                son:{
                     name:'li',
                     sex:'nan',
                     hobby:'sing'
                }
            }
        })

        // 监听对象 还是函数 深度监听不一样
        // watch(()=>user,(newValue,oldValue)=>{
        //     console.log('深度监听NewValue',JSON.stringify(newValue))  
        //     console.log('深度监听oldValue',JSON.stringify(oldValue))  
        // },{
        //     deep:true
        // })
        // 写成函数和对象是不一样的
        //  watch(user,(newValue,oldValue)=>{
        //     console.log('深度监听NewValue',JSON.stringify(newValue))  
        //     console.log('深度监听oldValue',JSON.stringify(oldValue))  
        // })

        // {
        //     deep:true,
        //     immediate:true
        // }

        // setTimeout(()=>{
        //     user.wift.son.hobby = 'dance'
        // },1000)


        // 监听多个数据 简单数据
        // const firstName = ref('')
        // const lastName = ref('')

        // watch([firstName, lastName], (newValues, prevValues) => {
        // console.log(newValues, prevValues)
        // })

        // firstName.value = 'John' // logs: ["John", ""] ["", ""]
        // lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]

         const user3 = reactive({
            name:'li3',
            sex:'nan',
            wift:{
                name:'zhang',
                sex:'nv',
                son:{
                     name:'li3',
                     sex:'nan',
                     hobby:'sing'
                }
            }
        })
         const user4 = reactive({
            name:'li4',
            sex:'nan',
            wift:{
                name:'zhang',
                sex:'nv',
                son:{
                     name:'li4',
                     sex:'nan',
                     hobby:'sing11111'
                }
            }
        })
        watch([user3,user4],([newuser3,newuser4],[user3old,user4old])=>{
            console.log('newValue',JSON.stringify(newuser3))
            console.log('newuser4',JSON.stringify(newuser4))
            console.log('user3old',JSON.stringify(user3old))
            console.log('user4old',JSON.stringify(user4old))

            // console.log('user4New',JSON.stringify(user4New))
            // console.log('user4old',JSON.stringify(user4old))


        },{
            deep:true,
            immediate:true
        })
       
            user3.wift.son.hobby = 'dance3' 
            // user4.wift.son.hobby = 'dance4'f

        
        // user4.wift.son.hobby = 'dance4'
        // const firstName = ref('')
        // const lastName = ref('')

        // watch([firstName, lastName], (newValues, prevValues) => {
        //    console.log(newValues, prevValues)
        // })

        // firstName.value = 'John' // logs: ["John", ""] ["", ""]
        // lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]
        return {
            state,
            // ...toRefs(state2)
        }

    }
})
</script>