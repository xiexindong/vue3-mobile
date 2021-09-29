<template>
  <div class="wrapper">
    <router-view v-slot="{Component}">
      <transition>
        <component :is="Component"/>
      </transition>
    </router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to = '/'>Home</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to ="/about">About</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to= "/toDo">ToDo</van-tabbar-item>
      <van-tabbar-item name="courseware" icon="setting-o" to="/courseware">课件</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">LuckDraw</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import { Tabbar, TabbarItem } from 'vant';

export default defineComponent({
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  },
  setup(){
    const active = ref('courseware')

    return {
      active
    }
  }
  
})
</script>