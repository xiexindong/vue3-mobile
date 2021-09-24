<template>
  <div>{{msg}} </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name:'helloWorld',
  props:{
    msg:String
  },
 
})
</script>