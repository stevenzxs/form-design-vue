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
              format:''
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
</script>

<template>
  <div>
    <a-form-item label="提示文字">
      <a-input size="small" v-model:value="_placeholder" placeholder="请设置提示语"/>
    </a-form-item>
  </div>
</template>

<style lang="less" scoped>

</style>
