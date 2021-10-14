<template>
  <div>我是孙子</div>
  {{ abc }}
</template>

<script setup>
import { inject } from "vue";
const abc = inject("abc");
console.log(abc);
</script>
