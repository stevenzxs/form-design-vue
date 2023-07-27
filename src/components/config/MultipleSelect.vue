<script setup>
import {ref,defineEmits,computed,h} from 'vue'
import draggable from "vuedraggable";
import IconNode from '@/components/util/IconNode.vue'
import {getId} from '@/util/tool'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              size: '',
              options:[]
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

const _options = computed({
  get: () => props.modelValue.options,
  set: (__value) => {
    let temp = Object.assign(props.modelValue,{options:__value});
    emit("update:modelValue", temp);
  }
})

const addOption = ()=>{
  _options.value.push({
    label: '',
    id: getId()
  })
}
</script>
<template>
  <div>
    <a-form-item label="选项设置">
          <a-button style="float:right"
              type="text" size="mini" @click="addOption">
              <template #icon>
                <IconNode icon-name="Add"/>
              </template>
              新增选项
          </a-button>
      </a-form-item>  
      <a-form-item class="options" label="">
        <draggable :list="_options" group="option" handler=".handle" :animation="350">
          <template #item="{element,index}">
            <div class="option-item">
              <a-input class="fwidth"
                v-model:value="element.label" size="small" placeholder="请设置选项值" >
                <template #addonBefore>
                    <IconNode icon-name="ListOutline" class="h-icon" />
                </template>
                <template #addonAfter>
                    <IconNode icon-name="Close" @click="_options.splice(index, 1)"/>
                </template>
              </a-input>
            </div>
          </template>
        </draggable>
      </a-form-item>
  </div>
</template>
<style lang="less" scoped>
.option-item{
  display:flex;
  justify-content: space-between;
  padding:5px;
  width:100%;
}
.fwidth{
  width:100%;
}
</style>
