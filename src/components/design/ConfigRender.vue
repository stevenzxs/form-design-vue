<script setup>
import { ref,computed,watch,markRaw } from 'vue'
import IconNode from '@/components/util/IconNode.vue'

import { globalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'

const store = globalStore()
const { 
    selectFormItem 
} = storeToRefs( store );

const configData = ref([
  {name:"API"},
  {name:"事件"}
]);
</script>
<template>
  <a-list size="small"  :data-source="configData">
    <template #renderItem="{ item,index }">
      <a-list-item class="c-list">
        <div v-if="item.name == 'API' ">
          <div v-if="selectFormItem.name">
            <a-form style="width:100%"
              layout="horizontal"
              :label-col="{ style: { width: '80px' } }" 
              :wrapper-col="{ style: { width: '100%' } }"
              v-if="selectFormItem.name !== 'SpanLayout'">
              <component style="width:280px"
                  :is="$componentsConfig[selectFormItem.name]" 
                  v-model="selectFormItem.value" />
            </a-form>
            <a-empty v-else description="当前组件不支持API配置"></a-empty>
          </div>
          <a-empty v-else description="当前组件不支持API配置"></a-empty>
        </div>
        <div v-else-if="item.name == '事件' ">
          <div v-if="selectFormItem.name">
              
          </div>
          <a-empty v-else description="当前组件不支持事件配置"></a-empty>
        </div>
      </a-list-item>
    </template>
    <template #header>
      <div v-if="selectFormItem.name">
        <IconNode :icon-name="selectFormItem.icon"  />
        <span>{{ selectFormItem.title }}</span>
      </div>
      <div v-else class="title">👈 请单击选中组件</div>
    </template>
  </a-list>
</template>

<style scoped lang="less">
:deep(.ant-list-header){
    height: 42px;
    background: #fafafb;
}
.title{
  padding-left: 20px;
}
:deep(.ant-form-item){
  margin-bottom: 0px;
}
.c-list{
  padding: 8px 8px !important;
}
</style>
  