<template>
  <div>
    <button @click="num.value ++">修改</button>
    <son />
  </div>
</template>

<script setup>
import son from "./son.vue";
import { provide,ref } from "vue";
const num = ref(0)



provide("abc", num);
</script>
