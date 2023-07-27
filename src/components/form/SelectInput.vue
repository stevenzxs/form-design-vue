<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    mode: { type: String,default: 'DESIGN' },
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              placeholder:'',
              size: '',
              options:[]
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

const _options = computed({
  get: () => props.modelValue.options,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{options:__value});
    emit("update:modelValue", temp);
  }
})
const _placeholder = computed(()=>{
  return props.modelValue.placeholder;
})
</script>
<template>
<div>
  <a-select class="fwidth" 
            size="small" 
            v-model:value="_value" 
            :placeholder="_placeholder">
      <a-select-option 
          v-for="(op, index) in _options" 
          :key="index" 
          :value="op.label" 
          :label="op.label">
      </a-select-option>
  </a-select>
</div>
</template>
<style scoped>
  .fwidth{
  width:100%;
}
</style>
