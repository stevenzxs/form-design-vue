<script setup>
import {ref,defineEmits,computed } from 'vue'
import { TextInputType } from '@/util/ConfigEnum'

const props = defineProps({
    mode: { type: String,default: 'DESIGN' },
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              placeholder:'',
              size: '',
              prefix: '',
              prefixValue: '',
              prefixDescript:''
            };
        }  
    },
    required: { type: Boolean,default: false }
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
const _prefix = computed(()=>{
    return props.modelValue.prefix;
})
const _prefixValue = computed(()=>{
    return props.modelValue.prefixValue;
})
const _prefixDescript = computed(()=>{
    return props.modelValue.prefixDescript;
})
const _suffix = computed(()=>{
    return props.modelValue.suffix;
})
const _suffixValue = computed(()=>{
    return props.modelValue.suffixValue;
})
const _suffixDescript = computed(()=>{
    return props.modelValue.suffixDescript;
})
</script>
<template>
    <div>
      <a-input size="medium" 
          v-model:value="_value" 
          :placeholder="placeholder">
          <template #prefix>
            <a-tooltip :title="_prefixDescript">
              <span v-if="_prefix==TextInputType.str">{{ _prefixValue }}</span>
              <component v-if="_prefix==TextInputType.icon" :is="$antIcons[_prefixValue]" />
            </a-tooltip>
          </template>
          <template #suffix>
            <a-tooltip :title="_suffixDescript">
              <span v-if="_suffix==TextInputType.str">{{ _suffixValue }}</span>
              <component v-if="_suffix==TextInputType.icon" :is="$antIcons[_suffixValue]" />
            </a-tooltip>
          </template>
      </a-input>
    </div>
</template>
  
<style scoped>
  
</style>
  