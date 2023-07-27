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
      <a-date-picker 
          class="fwidth"
          size="small" 
          v-model:value="_value" 
          :format="_format" 
          :placeholder="_placeholder" />
  </div>
</template>
<style scoped>
.fwidth{
  width:100%;
}
</style>
