<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              placeholder:'',
              size: '',
              format:''
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

const _placeholder = computed(()=>{
  get: () => props.modelValue.placeholder
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{placeholder:__value});
    emit("update:modelValue", temp);
  }
})

const _format = computed(()=>{
  return props.modelValue.format;
})
</script>
<template>
  <div>
    <a-range-picker v-model:value="_value" :placeholder="_placeholder" />
  </div>
</template>
<style scoped>

</style>
