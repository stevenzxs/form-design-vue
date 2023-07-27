<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              defaultValue:0,
              size: '',
              showChinese:''
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
const _showChinese = computed({
  get: () => props.modelValue.showChinese,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{showChinese:__value});
    emit("update:modelValue", temp);
  }
})
</script>
<template>
  <div>
    <a-form-item label="小数位">
      <a-input-number class="fwidth" :precision="0" :max="3" :min="0" size="small"
           v-model:value="_value"  placeholder="小数位数"/>
    </a-form-item>
    <a-form-item label="展示大写">
      <a-switch size="small" v-model:checked="_showChinese"></a-switch>
    </a-form-item>
  </div>
</template>
<style scoped>
.fwidth{
  width:180px;
}
</style>
