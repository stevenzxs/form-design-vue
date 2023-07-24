<script setup>
import {ref,markRaw,computed,onMounted,defineEmits} from 'vue'
import TextInput from '@/components/form/TextInput.vue'
import TextareaInput from '@/components/form/TextareaInput.vue'
import AmountInput from  '@/components/form/AmountInput.vue'
import NumberInput from  '@/components/form/NumberInput.vue'

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

const FormComponent = ref(null)
let nameToComponent = (name)=>{
    const lookup = {
        "TextInput":TextInput,
        "TextareaInput":TextareaInput,
        "AmountInput": AmountInput,
        "NumberInput": NumberInput
    }
    if( lookup[name] != undefined ){
        FormComponent.value = markRaw(lookup[name])
    }
}
nameToComponent(props.config.name);
</script>

<template>
   <component ref="formRef" 
        :is="FormComponent" 
        v-model="config.value"
        :mode="mode" 
        v-bind="config.props"/>
</template>  
<style lang="less" scoped>
  
</style>
  