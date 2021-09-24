<template>
    <div  class="flex flex-center">
        <input ref="todoInput" v-focus="200" v-model="addTodoName"/>
        <Button  @click="addTodoAction" size="small" type="primary">新增清单</Button>
    </div>
    <van-cell-group title="任务清单">
        <van-cell v-for="item in undoneTodoList" :key="item.id">
            <template #title>
                <span>{{ item.name }}</span>
            </template>      
            <template #right-icon>
                <van-button @click="doneTodo(item)" size="small" type="primary">完成</van-button>
                <van-button @click="delTodoAction(item,true)" size="small" type="danger">删除</van-button>
            </template>
        </van-cell>
    </van-cell-group>
    <van-cell-group title="已经完成清单">
        <van-cell v-for="item in completedTodoList" :key="item.id">
            <template #title>
                <span> {{ item.name }} </span>
            </template>

            <template #right-icon>
                <van-button @click="delTodoAction(item,false)" size="small" type="primary">删除</van-button>
            </template>
        </van-cell>
    </van-cell-group>

    <div>
        <van-button @click="goAddress" block type="primary">地址列表</van-button>
        <van-button @click="goChat"  block type="primary">聊天室</van-button>

    </div>
</template>

<script lang="ts" setup>
import { ref,reactive,getCurrentInstance } from 'vue';
import router from "@/router";

const CurrentInstance = getCurrentInstance();
const addTodoName = ref('')
const completedTodoList = reactive([{
    id:Date.now(),
    name:'睡觉'
}])
const undoneTodoList = reactive([{
    id:Date.now(),
    name:'小明'
}])

const addTodoAction = ()=>{
  if(addTodoName.value === ''){
      return (CurrentInstance?.refs?.todoInput as HTMLInputElement).focus()
  }

  const item = {
      id: Date.now(),
      name:addTodoName.value
  }
  undoneTodoList.push(item)
  addTodoName.value = ''
}


const doneTodo = (item:{id: number, name:string}) =>{
    undoneTodoList.splice(undoneTodoList.findIndex(i =>i.id === item.id),1)
    completedTodoList.push(item)
}

const delTodoAction = (item:{ id: number}, todo:boolean) =>{
    let arr = []
    if(todo){
        arr = undoneTodoList
    }else{
        arr = completedTodoList
    }
    arr.splice(completedTodoList.findIndex((i) => i.id === item.id),1)
}

const goAddress = ()=>{
  router.push("/address/list");
}

const goChat = () =>{
    router.push('/chat/list')
}

</script>
