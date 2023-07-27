<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              defaultValue:0,
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
const _defaultValue = computed(()=>{
    return props.modelValue.defaultValue;
})

</script>
<template>
  <div>
      <a-input-number 
           size="small" 
           style="width: 100%"
           v-model:value="_value" 
           :default-value = "_defaultValue" />
  </div>
</template>
<style scoped>

</style>
