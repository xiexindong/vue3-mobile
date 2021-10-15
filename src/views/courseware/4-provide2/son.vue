<template>
  <div>
      儿子
      <Grandson/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Grandson from './grandson.vue';

export default defineComponent({
  components:{
    Grandson
  }
})
</script>
