<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
  modelValue: { type:String,default:null }
})
const emit = defineEmits(["update:modelValue"])
const value = computed({
  get: () => props.modelValue,
  set: (_value) => emit("update:modelValue", _value),
})
</script>
<template>
  <div>
    <a-form-item label="提示文字">
      <a-input-number size="small" 
           v-model:value="value"
           placeholder="请设置提示语"/>
    </a-form-item>
    <a-form-item label="保留小数">
      <a-input-number :precision="0" :max="3" :min="0" size="small"
           v-model:value="value"  placeholder="小数位数"/>
       位
    </a-form-item>
    <a-form-item label="展示大写">
      <a-switch v-model:checked="value.showChinese"></a-switch>
    </a-form-item>
  </div>
</template>
<style scoped>
</style>
