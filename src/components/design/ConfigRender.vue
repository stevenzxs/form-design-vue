<script setup>
import { ref,computed,watch,markRaw } from 'vue'
import TextInput from '@/components/config/TextInput.vue'
import TextareaInput from '@/components/config/TextareaInput.vue'
import NumberInput from '@/components/config/NumberInput.vue'

import { globalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'

const store = globalStore()
const { 
    selectFormItem 
} = storeToRefs( store );

const FormComponent = ref(null)
let nameToComponent = (name)=>{
    const lookup = {
        "TextInput":TextInput,
        "TextareaInput":TextareaInput,
        "NumberInput": NumberInput
    }
    if( lookup[name] != undefined ){
        FormComponent.value = markRaw(lookup[name])
    }
}
nameToComponent(selectFormItem.name);

watch(selectFormItem,
  (newVal,oldValue) => {
    console.log('selectFormItem', newVal, oldValue);
    if( newVal != oldValue){
        nameToComponent(newVal.name);
    }
  },
{immediate:true}
);

</script>
<template>
    <div v-if="selectFormItem.name">
      <a-form label-width="90px" v-if="selectFormItem.name !== 'SpanLayout'">
        <a-form-item label="表单名称">
          <a-input size="small" allow-clear v-model="selectFormItem.title"/>
        </a-form-item>
        <component :is="FormComponent" v-model="selectFormItem.value"/>
        <a-form-item label="必填项">
          <a-switch v-model:checked="selectFormItem.props.required"></a-switch>
        </a-form-item>
        <a-form-item label="可打印">
          <a-switch v-model:checked="selectFormItem.props.enablePrint"></a-switch>
        </a-form-item>
      </a-form>
      <a-empty v-else description="当前组件不支持配置"></a-empty>
    </div>
  </template>

  <style scoped>
  </style>
  