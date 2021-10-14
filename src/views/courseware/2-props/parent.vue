<template>
    <div>
        <h2>我是父组件-测试props</h2>
    
        <Child  a="1" b="2"  msg="hello" style="color:red" class="parent"/>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
import moment from 'moment-timezone'
// import moment from 'moment'
import Child from './child.vue'
// 2027-08-14T00:00:00.000Z

export default defineComponent({
    components:{
        Child
    },

    setup(props,context){
        let a = moment()
        console.log('a',a)
        // moment.tz.setDefault('America/Los_Angeles')

        // console.log(moment.tz.guess())
        //console.log(moment("2027-08-14T00:00:00.000Z").utc().format('YYYY-MM-DD hh:mm:ss'))
        //console.log(moment.tz.guess())

    }
 
    
})
</script>