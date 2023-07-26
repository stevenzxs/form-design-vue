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
              size: ''
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
</script>
<template>
    <div>
      <a-input 
          class="fwidth"
          size="medium" 
          v-model:value="_value" 
          :placeholder="placeholder">
      </a-input>
    </div>
</template>
  
<style scoped>
  .fwidth{
  width:100%;
}
</style>
  