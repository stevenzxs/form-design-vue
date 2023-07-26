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
         size: 'small',
         prefix: 'ICON',
         prefixValue: '',
         prefixDescript:'',
         suffix: 'ICON',
         suffixValue: '',
         suffixDescript:''
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

const _prefix = computed({
  get: () => props.modelValue.prefix,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{prefix:__value});
    emit("update:modelValue", temp);
  }
})
const _prefixValue = computed({
  get: () => props.modelValue.prefixValue,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{prefixValue:__value});
    emit("update:modelValue", temp);
  }
})
const _prefixDescript = computed({
  get: () => props.modelValue.prefixDescript,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{prefixDescript:__value});
    emit("update:modelValue", temp);
  }
})

const _suffix = computed({
  get: () => props.modelValue.suffix,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{suffix:__value});
    emit("update:modelValue", temp);
  }
})
const _suffixValue = computed({
  get: () => props.modelValue.suffixValue,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{suffixValue:__value});
    emit("update:modelValue", temp);
  }
})
const _suffixDescript = computed({
  get: () => props.modelValue.suffixDescript,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{suffixDescript:__value});
    emit("update:modelValue", temp);
  }
})

</script>
<template>
    <!-- placeholder 提示 -->
    <a-form-item 
        style="width:100%"
        label="提示文字">
      <a-input 
          class="fwidth"
          size="small"  
          allow-clear
          v-model:value="_value"/>  
    </a-form-item>

    <!-- 输入框前缀 -->
    <a-form-item label="前缀">
      <a-radio-group class="fwidth" v-model:value="_prefix" size="small">
        <a-radio-button :value="TextInputType.icon">图标</a-radio-button>
        <a-radio-button :value="TextInputType.str">字符</a-radio-button>
      </a-radio-group> 
    </a-form-item>

    <a-form-item label="前缀字符" v-if="_prefix==TextInputType.str">
      <a-input class="fwidth" size="small" allow-clear v-model:value="_prefixValue"/>  
    </a-form-item>

    <a-form-item label="前缀图标" v-if="_prefix==TextInputType.icon">
      <icon-picker class="fwidth" v-model:icon="_prefixValue">
        <template #iconSelect>
          <a-input size="small" allow-clear v-model:value="_prefixValue" />
        </template>
      </icon-picker> 
    </a-form-item>

    <a-form-item label="前缀描述" v-if="_prefix">
      <a-textarea class="fwidth" size="small" allow-clear 
            v-model:value="_prefixDescript" />  
    </a-form-item>

     <!-- 输入框后缀 -->
    <a-form-item label="后缀">
      <a-radio-group class="fwidth" v-model:value="_suffix" size="small">
        <a-radio-button :value="TextInputType.icon">图标</a-radio-button>
        <a-radio-button :value="TextInputType.str">字符</a-radio-button>
      </a-radio-group> 
    </a-form-item>

    <a-form-item label="后缀字符" v-if="_suffix==TextInputType.str">
      <a-input class="fwidth" size="small" allow-clear v-model:value="_suffixValue"/>  
    </a-form-item>

    <a-form-item label="后缀图标" v-if="_suffix==TextInputType.icon">
      <icon-picker v-model:icon="_suffixValue">
        <template #iconSelect>
          <a-input class="fwidth" size="small" allow-clear v-model:value="_suffixValue" />
        </template>
      </icon-picker> 
    </a-form-item>

    <a-form-item label="后缀描述" v-if="_suffix">
      <a-textarea class="fwidth" size="small" allow-clear 
            v-model:value="_suffixDescript" />  
    </a-form-item>


</template>
<style scoped>
.fwidth{
  width:200px;
}
</style>
  