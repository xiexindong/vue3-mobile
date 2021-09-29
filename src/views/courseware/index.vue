<template>
    <div>
        <!-- <van-button type="primary" to="/courseware/setup">
            setup    
        </van-button> -->
        <SubComp @my-add="add" desc="非响应式属性"  two="zhangsn" three="2222" >
            <h2>zhangsan</h2>
            <h2>lis</h2>
            <template v-slot:title>
                title
            </template>

        </SubComp>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubComp from "./setup.vue"
export default defineComponent({
    components:{
        SubComp
    },
    methods:{
        add(value:[string , number]):void{
            console.log(value)
        }
    }
})

</script>