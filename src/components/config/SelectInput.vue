<script setup>
import {ref,defineEmits,computed } from 'vue'
import draggable from "vuedraggable";
const props = defineProps({
    modelValue: { type:String,default: null }
})

const emit = defineEmits(["update:modelValue"])
const value = computed({
  get: () => props.modelValue,
  set: (_value) => emit("update:modelValue", _value),
})

const dragOption = ref({
        animation: 300,
        sort: true
      });


</script>
<template>
  <div>
    <a-form-item label="提示文字">
      <a-input size="small" v-model:value="value" placeholder="请设置提示语"/>
    </a-form-item>
    <a-form label-position="top">
      <a-form-item label="选项设置" class="options">
        <div slot="label" class="option-item-label">
          <span>选项设置</span>
          <a-button icon="el-icon-plus" type="text" size="mini"
                     @click="value.options.push('新选项')">新增选项</a-button>
        </div>
        <draggable :list="value.options" group="option" handler=".el-icon-rank" :options="dragOption">
          <div v-for="(op, index) in value.options" :key="index" class="option-item">
            <i class="el-icon-rank"></i>
            <a-input v-model="value.options[index]" size="medium" placeholder="请设置选项值" clearable>
              <a-button icon="el-icon-delete" slot="append" type="danger" size="medium"
                         @click="value.options.splice(index, 1)"></a-button>
            </a-input>
          </div>
        </draggable>
      </a-form-item>
    </a-form>
    <a-form-item label="选项展开">
      <a-switch v-model:checked="value.expanding"></a-switch>
    </a-form-item>
  </div>
</template>
<style lang="less" scoped>
</style>
