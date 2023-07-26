<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    mode: { type: String,default: 'DESIGN' },
    modelValue: { type:String,default: null },
    placeholder:{
      type: String,
      default: '请选择选项'
    },
    expanding:{
      type: Boolean,
      default: false
    },
    options:{
      type: Array,
      default: () => {
        return []
      }
    }
})

const emit = defineEmits(["update:modelValue"])
const value = computed({
  get: () => props.modelValue,
  set: (_value) => emit("update:modelValue", _value),
})

</script>
<template>
  <div>
    <div v-if="mode === 'DESIGN'">
        <a-select class="max-fill" 
                v-if="!expanding" 
                size="medium" 
                v-model:value="value" 
                disabled 
                :placeholder="placeholder">
          <a-select-option v-for="(op, index) in options" 
            :key="index" 
            :value="op" 
            :label="op"></a-select-option>
      </a-select>
    </div>
    <div v-else>
      <a-select class="max-fill" v-if="!expanding" v-model:value="value" 
              size="medium" allow-clear :placeholder="placeholder">
        <a-select-option v-for="(op, index) in options" 
                :key="index" 
                :value="op" :label="op"></a-select-option>
      </a-select>
      <a-radio-group v-model:value="value" v-else>
        <a-radio v-for="(op, index) in options" :key="index" 
            :value="op">{{op}}</a-radio>
      </a-radio-group>
    </div>
  </div>
</template>
<style scoped>
</style>
