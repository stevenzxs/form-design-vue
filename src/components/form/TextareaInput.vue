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
        <a-textarea size="medium" v-model:value="value" disabled 
            :placeholder="placeholder"  :rows="2" />
      </div>
      <div v-else>
        <a-textarea size="medium" v-model:value="value" allow-clear :maxlength="255" 
            :placeholder="placeholder" :rows="3" />
      </div>
    </div>
</template>  
<style scoped>
</style>
  