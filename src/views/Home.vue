<template>
    <div class="home text-center">
        <header v-pin:[direction] = "pinPadding" style="width:100%; text-align:center" class="max640">
             <p>
                Stick me
                <span class="text-color">{{ pinPadding }}</span>
                px from the {{ direction }} of the page
             </p>
        </header>
        <p class="mg20 text-color">{{ time }}</p>
        <HelloWorld  msg ="你好"/>
        <YuiButton @click="handleClick()">
            自定义按钮22
            <template  v-slot:header>
                具名插槽
            </template>       
        </YuiButton>
        <YuiSelect></YuiSelect>
        <Button type="success" @click="showToast()">更改字体颜色</Button>
        <input type="range" min="0" max="500" v-model="pinPadding" style="z-index: 9" />


    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue';
import  dayjs from 'dayjs'
import { Dialog,Toast } from 'vant';

import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
    name:"Home",
    data(){
        return {
            direction: "top",
            pinPadding: 0,
            time : '',
            timer : 0,
            color:'red'
        }        
    },
    methods:{
        initTime(){
            this.time  = dayjs().format('YYYY-MM-DD HH:mm:ss')
            this.timer = setInterval(()=>{
                this.time = dayjs().format('YYYY-MM-DD HH:mm:ss')
            },1000)
        },
        handleClick(){
            Dialog({
                title:'标题',
                message:"这是一个全局按钮组件",
                showCancelButton:true,
            }).then(()=>{
                console.log('on close')
            }) .catch(() => {
                // on cancel
                console.log('on cancel')
            });
        },
        showToast(){
            this.color = 'blue'
            Toast({
                 message: '底部展示',
            })
        }
    },
    components:{
        HelloWorld
    },
    created(){
        this.initTime()  
    },

    beforeUnmount(){
        clearInterval(this.timer)
    }

})

</script>
<style lang="less" scoped>
    .home{
        font-size: 26px;
    }
    .text-color{
        color:v-bind(color)
    }
</style>>
