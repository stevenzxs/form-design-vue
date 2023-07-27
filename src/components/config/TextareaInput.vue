<script setup>
import {ref,defineEmits,computed } from 'vue'

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
  <div>
    <a-form-item label="提示文字">
      <a-input class="fwidth" size="small" v-model:value="_value" placeholder="请设置提示语"/>
    </a-form-item>
  </div>
</template>
<style scoped>  
  .fwidth{
  width:200px;
}
</style>
  