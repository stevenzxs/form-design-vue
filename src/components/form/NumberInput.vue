<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    mode: { type: String,default: 'DESIGN' },
    modelValue: { type:String,default: null },
    placeholder: { type: String, default: '请输入内容' },
    required: { type: Boolean,default: false }
})

const emit = defineEmits(["update:modelValue"])
const value = computed({
  get: () => props.modelValue,
  set: (_value) => emit("update:modelValue", _value),
})
</script>
<template>
  <div>
    <div v-if="mode === 'DESIGN'">
      <a-input-number 
           size="medium" disabled 
           style="width: 100%"
           v-model:value="value" />
    </div>
    <div v-else>
      <a-input-number 
          v-model:value="value" 
          size="medium" 
          style="width: 100%"
          allow-clear />
    </div>
  </div>
</template>
<style scoped>

</style>
