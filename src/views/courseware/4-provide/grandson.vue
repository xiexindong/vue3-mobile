<template>
    <div>
        孙子级别
        姓名{{nameObj.name}}
        年龄{{age}}
        城市:{{ cityhandle() }}
        
    </div>
</template>
<script lang="ts">
export default {
    name:'grandson',
    inject: ['nameObj', 'cityhandle', 'age'],
    data(){
        console.log(JSON.stringify(this))        
    },
    

}
</script>
