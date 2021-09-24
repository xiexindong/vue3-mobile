<template>
    <div>
        <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>
        <div class="flex flex-column">
            <div class="flex flex-center mg-to10">
                <label>姓名:</label>
                <input ref="nameInput" v-model="formData.name" maxlength="16"/>
            </div>
             <div class="flex flex-center mg-to10">
                <label>手机号：</label>
                <input ref="phoneInput" v-model="formData.phone" maxlength="11"/>
            </div>
            <div class="flex flex-center mg-to10">
                <label>验证码：</label>
                <input ref="phoneInput" v-model="formData.code" maxlength="11"/>
            </div>
        </div>
        <div class="mg-tp10">{{formData}}</div>
        <button @click="insertName()">姓名插入</button>
        <van-steps direction="vertical" :active="2">
            <van-step>
                <h3>【城市】物流状态1</h3>
                <p>{{ twoNow }}</p>
            </van-step>
            <van-step>
                <h3>【城市】物流状态2</h3>
                <p>{{ now }}</p>
            </van-step>
            <van-step>
                <h3>快件已发货</h3>
                <p>{{ now2 }}</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script lang="ts" setup>
import  dayjs from "dayjs"
import { ref, reactive } from "vue"

const twoNow = dayjs().subtract(2, "day").format("YYYY-MM-DD HH:mm:ss");

const now = dayjs().format('YYYY-MM-DD HH:mm:ss')

const now2 = dayjs().add(2,'day').format('YYYY-MM-DD HH:mm:ss')

const nameInput = ref()
const formData = reactive({
    name:'',
    phone:'',
    code:''
})

const insertName = () => {
    const index = (nameInput.value as HTMLInputElement).selectionStart
    if(typeof index !== 'number') return
    formData.name = formData.name.slice(0,index) + '你好' + formData.name.slice(index)
}


</script>

<style lang="less" scoped>

</style>