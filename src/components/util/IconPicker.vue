<script setup>
import  { icons }  from '@/util/icons'
import { ref,markRaw,onMounted,watch } from 'vue' 

const props = defineProps({
  icon: { type:String, required:true },
  trigger: {
      type:String,
      default: 'click',
      validator: (_value)=>{
        return ['click', 'hover', 'focus'].indexOf(_value) !== -1
      }
  }
})

const iconArr = ref(icons);
const visible = ref(false);
const searchValue = ref('');

const emit = defineEmits(["update:icon"])
const handleClick = (_icon)=>{
    emit('update:icon',_icon)
    visible.value = false;
}

const filterIcon = ()=>{
    if (searchValue.value){
        iconArr.value = icons.filter(item =>  item.toLowerCase().includes(searchValue.value.toLowerCase()) )
    }else{
        iconArr.value = icons;
    }
}

watch(visible, (newValue, oldValue) => {
    searchValue.value = '';
    iconArr.value = icons;
});
</script>

<template>
    <a-popover
        size="small"
        :trigger="trigger"
        v-model:visible="visible"
    >
      <template #title>
        <a-input-search
            size="small"
            v-model:value="searchValue"
            placeholder="输入英文关键词进行搜索"
            @change="filterIcon"
        />
      </template>

      <template #content>
        <div class="icon-box">
          <div
              v-for="(item,index) in iconArr"
              :key="index"
              @click="handleClick(item)"
              class="icon-content"
              :style="{ background: icon === item ? '#268961' : ''}"
          >
            <component :is="$antIcons[item]" />
          </div>
        </div>
      </template>
      <slot name="iconSelect" ></slot>
    </a-popover>
</template>

<style scoped>
.icon-box{
    overflow: auto;
    font-size: 20px;
    width: 250px;
    height: 230px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
}

.icon-content{
    width: 45px;
    height: 40px;
    margin:  5px;
    cursor: pointer;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #ccc
}

.icon-content:hover{
    background: #1890ff;
}
</style>