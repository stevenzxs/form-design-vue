<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              defaultValue:0,
              size: ''
            };
        }  
    }
})

const emit = defineEmits(["update:modelValue"])
const _value = computed({
  get: () => props.modelValue.defaultValue,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{defaultValue:__value});
    emit("update:modelValue", temp);
  }
})
</script>
<template>
  <div>
    <a-form-item label="默认值">
      <a-input class="fwidth" size="small" v-model:value="_value" />
    </a-form-item>
  </div>
</template>
<style scoped>
  .fwidth{
  width:200px;
}
</style>
