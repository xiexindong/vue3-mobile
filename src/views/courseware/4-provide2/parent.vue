<template>
  <div>
     父级
     <button @click="zhangsan='zhangsan'">点击</button>
     <Son/>
  </div>
</template>

<script lang="ts">
import { defineComponent,provide,ref,reactive,readonly } from 'vue';
import  Son  from './son.vue';
export default defineComponent({
    components:{
      Son
    },
    setup(){
      const zhangsan = ref('张三')
      const work = reactive({
        name:'web开发',
        position:'工程师'
      })
      // provide('name',readonly(zhangsan));
      provide('name',zhangsan);
      provide('work',work)
      return{
        zhangsan
      }
    }
   
  
})
</script>