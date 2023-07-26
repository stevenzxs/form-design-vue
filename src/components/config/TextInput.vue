<script setup>
import {ref,defineEmits,computed } from 'vue'
import IconPicker from '@/components/util/IconPicker.vue'
import { TextInputType } from '@/util/ConfigEnum'

const props = defineProps({
  modelValue: { 
    type:Object,
    default: ()=>{ 
      return {
         value:'',
         placeholder:'请设置提示语',
         size: 'small'
      }
    } 
  }
})

const emit = defineEmits(["update:modelValue"])
const _value = computed({
  get: () => props.modelValue.placeholder,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{placeholder:__value});
    emit("update:modelValue", temp);
  }
})

</script>
<template>
    <!-- placeholder 提示 -->
    <a-form-item label="提示文字">
      <a-input 
          class="fwidth"
          size="small"  
          allow-clear
          v-model:value="_value"/>  
    </a-form-item>
</template>
<style scoped>
  .fwidth{
  width:200px;
}
</style>
  