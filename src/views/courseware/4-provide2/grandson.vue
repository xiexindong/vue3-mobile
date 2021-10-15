<template>
  <div>孙子组件</div>
  {{ name}}
  {{work.name}}
  {{work.position}}
</template>

<script lang="ts">
import { defineComponent,inject } from 'vue'

export default defineComponent({
  setup() {
    const name = inject('name', 'The Universe')
    const work = inject('work')

    console.log('name',name)
    console.log('work',work)

    return {
      name,
      work
    }

  },
})
</script>
