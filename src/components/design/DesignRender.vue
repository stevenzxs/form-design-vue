<script setup>
import {ref,markRaw,computed,onMounted,defineEmits} from 'vue'

const props = defineProps({
    mode:{ type: String,default: 'DESIGN' },
    config:{ type: Object,default: ()=>{ return {} } }
})

const formRef = ref();
const  form = (call)=>{
    if(formRef != undefined){
        formRef.validate(call)
    }
}

onMounted(() => {
    console.log(formRef.value);
});

</script>

<template>
   <component ref="formRef" 
        :is="$components[config.name]" 
        v-model="config.value"
        :mode="mode" 
        v-bind="config.props"/>
</template>  
<style lang="less" scoped>
  
</style>
  