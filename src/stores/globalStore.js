import { ref,reactive } from 'vue'
import { defineStore } from 'pinia'

export const globalStore = defineStore('global',() => {

    const formItems = ref([])
    const selectFormItem = ref({})
    return { 
        formItems,
        selectFormItem
    }
})