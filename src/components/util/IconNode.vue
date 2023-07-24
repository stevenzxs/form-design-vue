<script setup>
import { ReorderThreeOutline,EllipsisHorizontal,CreateOutline,
    PencilSharp,WalletOutline,CheckmarkCircleOutline,CheckboxOutline,
    TimerOutline,TimeOutline,CalendarNumberOutline,CalendarOutline,
    CloudUploadOutline,Attach,AlertCircleOutline,DocumentTextOutline,
    AccessibilityOutline,ImageOutline,PersonAddOutline,PersonOutline,
    ArrowRedoOutline,ArrowUndoOutline,PhonePortraitOutline,EyeOutline,
    DesktopOutline
 } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { ref,markRaw,onMounted,watch } from 'vue' 

const props = defineProps({
  iconName: { type:String, default:'' },
  color: { type:String, default:'' },
  size: { type:[Number,String],default: 12 } 
})

const IconComponent = ref(null)

let nameToComponent = (name)=>{
    const lookup = {
        "create-outline":CreateOutline,
        "reorder-three-outline":ReorderThreeOutline,
        "ellipsis-horizontal":EllipsisHorizontal,
        "pencil-sharp":PencilSharp,
        "wallet-outline":WalletOutline,
        "checkmark-circle-outline":CheckmarkCircleOutline,
        "checkbox-outline":CheckboxOutline,
        "time-outline":TimeOutline,
        "timer-outline":TimerOutline,
        "calendar-outline":CalendarOutline,
        "calendar-number-outline":CalendarNumberOutline,
        "cloud-upload-outline":CloudUploadOutline,
        "attach":Attach,
        "accessibility-outline":AccessibilityOutline,
        "image-outline":ImageOutline,
        "person-add-outline":PersonAddOutline,
        "person-outline":PersonOutline,
        "alert-circle-outline":AlertCircleOutline,
        "document-text-outline":DocumentTextOutline,
        "arrow-redo-outline":ArrowRedoOutline,
        "arrow-undo-outline":ArrowUndoOutline,
        "phone-portrait-outline":PhonePortraitOutline,
        "eye-outline":EyeOutline,
        "desktop-outline":DesktopOutline
    }
    if( lookup[name] != undefined ){
        IconComponent.value = markRaw(lookup[name])
    }
}
onMounted(()=>{
  nameToComponent(props.iconName);
});

watch(
  () => props.iconName,
  (newVal,oldValue) => {
    //console.log('iconName', newVal, oldValue);
    if(newVal != oldValue ){
      nameToComponent(props.iconName);
    }
  },
{immediate:true}
);

</script>

<template>
  <Icon class="icon-c" :color="color" :size="size">
    <component :is="IconComponent" />
  </Icon>
</template>

<style lang="less">
.icon-c{
    margin:0px 12px; 
}
</style>
