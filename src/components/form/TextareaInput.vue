<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              placeholder:'',
              size: ''
            };
        }  
    }
})

const emit = defineEmits(["update:modelValue"])
const _value = computed({
  get: () => props.modelValue.value,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{value:__value});
    emit("update:modelValue", temp);
  }
})
const placeholder = computed(()=>{
    return props.modelValue.placeholder;
})
</script>
<template>
    <div>
        <a-textarea 
            size="small" 
            v-model:value="_value" 
            :placeholder="placeholder"  
            :rows="2" />
    </div>
</template>  
<style scoped>
  .fwidth{
  width:100%;
}
</style>
  