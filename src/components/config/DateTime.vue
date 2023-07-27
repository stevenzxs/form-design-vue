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
              format: ''
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
  get: () => props.modelValue.format
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{format:__value});
    emit("update:modelValue", temp);
  }
})
</script>
<template>
  <div>
    <a-form-item label="提示文字">
      <a-input size="small" v-model:value="_placeholder" placeholder="请设置日期提示"/>
    </a-form-item>
    <a-form-item label="日期格式">
      <a-select size="small" v-model:value="_format">
        <a-select-option value="yyyy" label="yyyy"></a-select-option>
        <a-select-option value="yyyy-MM" label="yyyy-MM"></a-select-option>
        <a-select-option value="yyyy-MM-dd" label="年-月-日"></a-select-option>
        <a-select-option value="yyyy-MM-dd HH:mm" label="年-月-日 时:分"></a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>
<style scoped lang="less">

</style>
