<template>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :title="title1"  @change="change" :options="option1" />
        <van-dropdown-item v-model="value2"  @change="change"  :options="option2" />
    </van-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent }from 'vue'
export default defineComponent({
    name:'YuiSelect',
    data(){
        return{
            value1: 0,
            value2: 'a',
            title1:'商品',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        }
    },
    methods:{
        change(value:string){
            console.log(value)
        }
    }
})
</script>