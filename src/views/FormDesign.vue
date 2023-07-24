<script setup>
import draggable from "vuedraggable";
import { reactive, ref,watch,computed } from 'vue';
import { globalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'

import { baseComponents } from '@/util/ConfigExport'
import IconNode from '../components/util/IconNode.vue'
import DesignRender from '@/components/design/DesignRender.vue'
import ConfigRender  from "@/components/design/ConfigRender.vue";

const store = globalStore()
let { 
  hello,
  formItems,
  selectFormItem 
} = storeToRefs( store );

// console.log( hello,formItems );

const tempdata = {
    formId: "0d12c7aba4854e35bf803c4d1a5bbf51",
    formName: "测试表单",
    logo: { icon: "el-icon-s-tools",
            background: "rgba(30, 144, 255, 0.79)"
          },
    settings: {
        sign: true, 
        admin: [  
          {id: 1486186, name: "xx科技有限公司", type: "dept", selected: false},
          {id: 61769798, name: "李四", type: "user", selected: false}],
        notify: { title: "消息通知标题", 
                  types: [{name: "应用内通知", type: "APP"}, {name: "微信通知", type: "WX"},
                     {name: "钉钉通知", type: "DING"}]
                }, 
        commiter: []
    },
    groupId: 202,
    formItems: [  {id: "field9740224251602", icon: "el-icon-edit-outline", name: "NumberInput", 
                    props: { required: true, enablePrint: true}, title: "数字输入框2", value: "", valueType: "Number"},
                  {id: "field6145293040043", icon: "iconfont icon-duoxuankuang", name: "MultipleSelect", 
                    props: { options: ["选项1", "选项2"], required: false, expanding: false, enablePrint: true}, title: "多选框", 
                             value: [], valueType: "Array"},
                  {id: "field7763118659886", icon: "el-icon-user", name: "UserPicker", 
                    props: {multiple: false, required: false, enablePrint: true},
                     title: "人员选择", value: [], valueType: "User"}, 
                  {id: "field2678035053466", icon: "el-icon-edit-outline", name: "NumberInput", 
                    props: {required: false, enablePrint: true}, title: "数字输入框", value: "", valueType: "Number"}, 
                  {id: "field9043218675951", icon: "iconfont icon-kaoqin", name: "DateTimeRange", 
                    props: { format: "yyyy-MM-dd HH:mm", required: false, showLength: false, enablePrint: true, 
                      placeholder: ["开始时间", "结束时间"]}, 
                      title: "日期时间区间", valueType: "DateRange"}, 
                  {id: "field6614935039559", icon: "el-icon-circle-check", name: "SelectInput", 
                    props: {options: ["选项1", "选项2"], required: false, expanding: false, enablePrint: true}, 
                      title: "单选框", value: "", valueType: "String"},
                  {id: "field1856935035124", icon: "iconfont icon-kaoqin", name: "DateTimeRange", 
                    props: {format: "yyyy-MM-dd HH:mm", required: false, showLength: false, enablePrint: true, 
                      placeholder: ["开始时间", "结束时间"]}, title: "日期时间区间2", valueType: "DateRange"},
                  {id: "field3487847563712", icon: "el-icon-tickets", name: "TableList", 
                    props: { columns : [
                      {id: "field2619147621249", icon: "el-icon-edit", name: "TextInput", 
                        props: {required: false, enablePrint: true}, title: "单行文本输入", value: "", valueType: "String"},
                      {id: "field9694347625835", icon: "el-icon-more-outline", name: "TextareaInput", 
                        props: {required: false, enablePrint: true}, title: "多行文本输入", value: "", valueType: "String"}], 
                        maxSize: 0, required: false, rowLayout: true, showBorder: true, enablePrint: true, showSummary: true, 
                        summaryColumns: []}, title: "分录", value: [], valueType: "Array"}
                ],
    process: {  id: "root",desc: "任何人",name: "发起人", type: "ROOT", 
                props:  { formPerms: [ { id: "field6145293040043", perm: "E", title: "多选框", required: false} ],
                          assignedUser: [ {id: 381496, name: "旅人", type: "user", selected: false} ]
                        },
                children: { id: "node_351314375803", name: "审批人", type: "APPROVAL", 
                            props: {
                              mode: "AND", role: [], sign: false, leader: {level: 1},
                              nobody: { handler: "TO_PASS", assignedUser: []}, 
                              refuse: { type: "TO_NODE", target: "node_351314375803"},
                              formUser: "", 
                              formPerms: [
                                { id: "field9740224251602", perm: "H", title: "数字输入框2",required: true },
                                { id: "field6145293040043", perm: "R", title: "多选框", required: false},
                                { id: "field7763118659886", perm: "R", title: "人员选择", required: false},
                                { id: "field2678035053466", perm: "R", title: "数字输入框", required: false},
                                { id: "field9043218675951", perm: "R", title: "日期时间区间", required: false}, 
                                { id: "field6614935039559", perm: "R", title: "单选框", required: false}, 
                                { id: "field1856935035124", perm: "R", title: "日期时间区间2", required: false}, 
                                { id: "field3487847563712", perm: "R", title: "分录", required: false}], 
                              leaderTop:  { endLevel: 1, endCondition: "TOP"}, 
                              timeLimit:  { handler: { type: "REFUSE", notify: { hour: 1, once: true}},
                                           timeout: { unit: "H", value: 0}
                                          }, 
                              selfSelect: { multiple : false},
                              assignedType: "ASSIGN_USER",
                              assignedUser: [ { id: 381496, name: "旅人", type: "user", selected: false} ]
                            },
                            children: { id: "node_100069908190", name: "抄送人", type: "CC", 
                                        props:{ formPerms: [], shouldAdd: false, 
                                                 assignedUser: [{id: 381496, name: "旅人", type: "user", selected: false}]
                                              },
                                        children: {}, parentId: "node_351314375803"
                                      }, 
                            parentId: "root"
                          },
                parentId: null
            },
    remark: "1121212",
    isStop: false,
    isDelete: false,
    sort: 0,
    created: "2023-06-08 10:57:35",
    updated: "2023-07-21 13:51:27"
}

const isStart = ref(false)
const getId = ()=>{
    return 'field' + (Math.floor(Math.random() * (99999 - 10000)) + 10000).toString()
          + new Date().getTime().toString().substring(5);
}
const clone = (obj)=>{
    obj.id = getId();
    return JSON.parse(JSON.stringify(obj));
}
// formItems = [{id: "field2619147621249", icon: "el-icon-edit", name: "TextInput", 
//                         props: {required: false, enablePrint: true}, 
//                         title: "单行文本输入", value: "", valueType: "String"}]

const del = ()=>{

}
const selectItem = (cp)=>{
  console.log('11',cp);
    selectFormItem.value = cp;
}

const getSelectedClass = (cp)=>{
  console.log(selectFormItem,cp);
  return cp && selectFormItem && selectFormItem.value.id === cp.id ?
          'border-left: 4px solid #409eff':''
}

const showMobile = ref(false)
const viewFormVisible = ref(false)
const viewformItems = ()=>{
  viewFormVisible = true;
}

watch(showMobile, (newValue, oldValue) => {
  // console.log('showMobile值发生了变更', newValue, oldValue);
});
watch(selectFormItem, (newValue, oldValue) => {
  // console.log('selectFormItem', newValue, oldValue);
});

</script>

<template>
  <a-layout>
    <a-layout-sider width="315" class="left-side">
      <div class="components-nav">
        <span>组件库</span>
      </div>
      <div class="components" v-for="(group, i) in baseComponents" :key="i">
          <p>{{group.name}}</p>
          <ul>
            <draggable class="drag" 
                :list="group.components" 
                :options="{sort: false}"
                :group="{ name: 'form', pull: 'clone', put: false }"
                @start="isStart = true" 
                @end="isStart = false" 
                item-key="id"
                :clone="clone">
              <template #item="{element}">  
                <li>
                  <IconNode :icon-name="element.icon" color="blue" />
                  <span>{{ element.title }}</span>
                </li>
              </template>
            </draggable>
          </ul>
      </div>
    </a-layout-sider>

    <a-layout>
      <a-layout-content>
        <div class="tool-nav">
          <div>
            
            <a-tooltip color="dark" title="撤销" placement="bottom">
              <IconNode icon-name="arrow-undo-outline" />
            </a-tooltip>

            <a-tooltip class="item" color="dark" title="恢复" placement="bottom">
              <IconNode icon-name="arrow-redo-outline" />
            </a-tooltip>
          </div>
          <div>

            <a-tooltip class="item" color="dark" title="预览表单" placement="bottom">
              <IconNode icon-name="eye-outline" @click="viewformItems" />
            </a-tooltip>

            <a-tooltip class="item" color="dark" title="移动端" placement="bottom">
              <IconNode icon-name="phone-portrait-outline" @click="showMobile = true" />
            </a-tooltip>

            <a-tooltip class="item" color="dark" title="PC端" placement="bottom">
              <IconNode icon-name="desktop-outline" @click="showMobile = false" />
            </a-tooltip>

          </div>
        </div>
      <div class="work-form">
        <div :class="{'mobile': showMobile, 'pc': !showMobile}">
          <div :class="{'bd': showMobile}">
            <div :class="{'form-content': showMobile}">
              <div class="form">
                <div class="tip" v-show="formItems.length === 0 && !isStart">👈 请在左侧选择控件并拖至此处</div>
                <draggable class="drag-from" :list="formItems" group="form"
                           item-key="id"
                           :animation="350"
                           @start="drag = true" @end="drag = false">
                  <template #item="{element}">
                      <div class="form-item" @click="selectItem(element)" 
                          :style="selectFormItem.id === element.id?'border-left: 4px solid #409eff':''">
                        <div class="form-header">
                          <p><span v-if="element.props.required">*</span>{{ element.title }}</p>
                          <div class="option">
                            <i class="el-icon-close" @click="del(element)"></i>
                          </div>
                          <DesignRender :config="element"/>
                        </div>
                      </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </div>
      </div>

      </a-layout-content>
    </a-layout>

  <a-layout-sider width="300" class="right-side">
    <div class="tool-nav-r" 
              v-if="selectFormItem.name">
      <IconNode :icon-name="selectFormItem.icon"  />
      <span>{{ selectFormItem.title }}</span>
    </div>
    <div v-if="!selectFormItem || formItems.length === 0" class="tip">
      😀 选中控件后在这里进行编辑
    </div>
    <div style="text-align:left; padding: 10px" v-else>
      <ConfigRender />
    </div>
  </a-layout-sider>

  </a-layout>
</template>

<style scoped lang="less">
.ant-layout-sider {
  background-color: #f8f8f8;
}
.form-design{
  width:100%;
  height:100%;
}

:deep(.left-side){
  .ant-layout-sider-children{
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

.components-nav {
  box-sizing: content-box;
  display: flex;
  align-items: center;
  margin: 12px 12px 0;
  height: 28px;
  box-shadow: 0 2px 4px 0 rgba(17, 31, 44, 0.04);
  border: 1px solid #ecedef;
  border-radius: 16px;
  background-color: #fff;

  .selected {
    color: #1890FF;
  }

  .border {
    border-left: 1px solid #f5f6f6;
    border-right: 1px solid #f5f6f6;
  }

  span {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    color: rgba(17, 31, 44, 0.72);
    cursor: pointer;

    &:hover {
      color:#1890FF;
    }
  }

}

.components {
  padding: 10px 0px;
  overflow: hidden;

  font-size: 12px;
  width: 100%;
  color: rgba(17, 31, 44, 0.85);
  &>p{
    padding: 0 20px;
  }

  ul{
      padding-left:10px;
  }

  .drag {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    li {
      text-align: center;
      display: flex;
      align-items: center;
      width: 124px;
      height: 38px;
      margin-bottom: 12px;
      border: 1px solid transparent;
      border-radius: 8px;
      cursor: grab;
      background-color: #fff;

      &:hover {
        border: 1px solid #1890FF;
        color: #1890FF;
      }

      i {
        margin: 0 12px;
      }
    }

    li:nth-child(odd) {
      margin-right: 8px;
    }
  }
}

.tool-nav {
    font-size: medium;
    padding: 8px 20px;
    background: #fafafb;
    border-bottom: 1px solid #ebecee;

    div:first-child {
      display: inline-block;
      text-align: left;

      i {
        margin-right: 10px
      }
    }

    div:last-child {
      float: right;

      i {
        margin-left: 10px
      }
    }

    i {
      color: #7a7a7a;
      cursor: pointer;

      &:hover {
        color: #4b4b4b;
      }
    }
}

.work-form {
  margin: 0 auto;
  height: calc(100% - 38px);
  overflow-y: auto;
  background: rgb(245, 246, 246);
  // border-left: 1px solid rgb(235, 236, 238);
  // border-right: 1px solid rgb(235, 236, 238);

  .pc {
    margin-top: 4%;

    .drag-from {
      height: calc(100vh - 190px);
      background-color: rgb(245, 246, 246);

      .form-item, li {
        cursor: grab;
        background: #ffffff;
        padding: 10px;
        border: 1px solid #ebecee;
        margin: 5px 0;
      }
    }
  }

  .mobile {
    margin-left: auto;
    margin-right: auto;
    width: 360px;
    max-height: 640px;
    margin-top: 4%;
    border-radius: 24px;
    box-shadow: 0 8px 40px 0 rgba(17, 31, 44, 0.12);

    .bd {
      border: 1px solid rgba(17, 31, 44, 0.08);
      border-radius: 24px;
      padding: 10px 10px;
      background-color: #ffffff;

      .form-content {
        padding: 3px 2px;
        border-radius: 14px;
        background-color: #f2f4f5;

        .drag-from {
          width: 100%;
          height: calc(100vh - 190px);
          min-height: 200px;
          max-height: 600px;
        }

        .form {
          overflow-y: auto;
          width: 100%;
          display: inline-block;
          max-height: 640px;

          .form-item, li {
            border: 1px solid #ffffff;
            list-style: none;
            background: #ffffff;
            padding: 10px;
            margin: 5px 0;
            cursor: grab;
          }
        }
      }
    }
  }

  .tip {
    //float: left;
    margin: 0 auto;
    width: 65%;
    max-width: 400px;
    padding: 35px 20px;
    border-radius: 10px;
    border: 1px dashed rgba(25, 31, 37, 0.12);
    margin-top: 50px;
    text-align: center;
    font-size: 14px;
    color: rgb(122, 122, 122);
    z-index: 9999;

    &:hover {
      border: 1px dashed #1890FF;
    }
  }

}

.right-side{
  border-left: 1px solid #ebecee;
}

.tool-nav-r {
    text-align: left;
    font-size: small;
    padding: 10.5px 20px;
    background: #fafafb;
    border-bottom: 1px solid #ebecee;
}

.tip{
  margin-top: 130px;
  margin-left: 20px;
}

</style>
