<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
  modelValue: { type:String,default: null }
})

const emit = defineEmits(["update:modelValue"])
const value = computed({
  get: () => props.modelValue,
  set: (_value) => emit("update:modelValue", _value),
})

</script>
<template>
    <a-form-item label="提示文字">
      <a-input size="small"  v-model:value="value"  placeholder="请设置提示语"/>
    </a-form-item>
</template>
<style scoped>
  
</style>
  