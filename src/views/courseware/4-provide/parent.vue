<template>
    <div>
        父级
        <div>
            <span>{{nameObj.name}}</span>
            <span>{{age}}</span>
            <span>{{city}}</span>
            <button @click="changePerson">改变</button>
        </div>

        <Son/>
    </div>
</template>

<script lang="ts">
import Son from "./son.vue"
export default{
    name:'parent',
    components:{
        Son
    },
    data:function(){
        return{
            nameObj:{
                name:'li'
            },
            age:18,
            city:'上海'
        }
    },
    provide(){
        return{
            nameObj:(this as any).nameObj,
            age:(this as any).age,
            cityhandle:()=>(this as any).city,
        }
    },
    methods:{
        changePerson(){
            //provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的
            if((this as any).nameObj.name === 'li'){
                (this as any).nameObj.name = 'zhang';
                (this as any).age = 24;
                (this as any).city ='北京'
            }else{
                (this as any).nameObj.name = 'li';
                (this as any).age = 18;
                (this as any).city ='上海'
            }   
        }
    }
    
}
</script>