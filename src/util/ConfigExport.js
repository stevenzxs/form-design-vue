export const ValueType = {
    string: 'String',
    object: 'Object',
    array: 'Array',
    number: 'Number',
    date: 'Date',
    user: 'User',
    dept: 'Dept',
    dateRange: 'DateRange'
  }
  
  export const baseComponents = [
    {
      name: '布局',
      components: [
        {
          title: '分栏布局',
          name: 'SpanLayout',
          icon: 'ReorderThreeOutline',
          value: [],
          valueType: ValueType.array,
          props: {
            items:[]
          }
        }
      ]
    }, {
      name: '基础组件',
      components: [
        {
          title: '单行文本输入',
          name: 'TextInput',
          icon: 'CreateOutline',
          value: {
              value:'',
              placeholder:'请设置提示语',
              size: 'small'
          },
          valueType: ValueType.object,
          props: {
            required: false,
            enablePrint: true
          }
        },
        {
          title: '多行文本输入',
          name: 'TextareaInput',
          icon: 'EllipsisHorizontal',
          value: {
            value:'',
              placeholder:'请设置提示语',
              size: 'small'
          },
          valueType: ValueType.object,
          props: {
            required: false,
            enablePrint: true
          }
        },
        {
          title: '数字输入框',
          name: 'NumberInput',
          icon: 'PencilSharp',
          value: {},
          valueType: ValueType.object,
          props: {
            value:'',
            defaultValue:0,
            size: ''
          }
        },
        {
          title: '金额输入框',
          name: 'AmountInput',
          icon: 'WalletOutline',
          value: {
            value:'',
            defaultValue:0,
            size: '',
            showChinese:''
          },
          valueType: ValueType.object,
          props: {
           
          }
        },
        {
          title: '单选框',
          name: 'SelectInput',
          icon: 'CheckmarkCircleOutline',
          value: {
            value: '',
            options: [
              {
                "name": "Joao",
                "text": "joao",
                "id": 1
              },
              {
                "name": "xiao",
                "text": "xiao",
                "id": 2
              }
            ]
          },
          valueType: ValueType.object,
          props: {
            
          }
        },
        {
          title: '多选框',
          name: 'MultipleSelect',
          icon: 'CheckboxOutline',
          value: [],
          valueType: ValueType.array,
          props: {
            required: false,
            enablePrint: true,
            expanding: false,
            options: ['选项1', '选项2']
          }
        },
        {
          title: '日期时间点',
          name: 'DateTime',
          icon: 'CalendarNumberOutline',
          value: '',
          valueType: ValueType.date,
          props: {
            required: false,
            enablePrint: true,
            format: 'yyyy-MM-dd HH:mm',
          }
        },
        {
          title: '日期时间区间',
          name: 'DateTimeRange',
          icon: 'CalendarOutline',
          valueType: ValueType.dateRange,
          props: {
            required: false,
            enablePrint: true,
            placeholder: ['开始时间', '结束时间'],
            format: 'yyyy-MM-dd HH:mm',
            showLength: false
          }
        },
        {
          title: '上传图片',
          name: 'ImageUpload',
          icon: 'ImageOutline',
          value: [],
          valueType: ValueType.array,
          props: {
            required: false,
            enablePrint: true,
            maxSize: 5, //图片最大大小MB
            maxNumber: 10, //最大上传数量
            enableZip: true //图片压缩后再上传
          }
        },
        {
          title: '上传附件',
          name: 'FileUpload',
          icon: 'CloudUploadOutline',
          value: [],
          valueType: ValueType.array,
          props: {
            required: false,
            enablePrint: true,
            onlyRead: false, //是否只读，false只能在线预览，true可以下载
            maxSize: 100, //文件最大大小MB
            maxNumber: 10, //最大上传数量
            fileTypes: [] //限制文件上传类型
          }
        },
        {
          title: '人员选择',
          name: 'UserPicker',
          icon: 'PersonOutline',
          value: [],
          valueType: ValueType.user,
          props: {
            required: false,
            enablePrint: true,
            multiple: false
          }
        },
        {
          title: '部门选择',
          name: 'DeptPicker',
          icon: 'PersonAddOutline',
          value: [],
          valueType: ValueType.dept,
          props: {
            required: false,
            enablePrint: true,
            multiple: false
          }
        },
        {
          title: '说明文字',
          name: 'Description',
          icon: 'AlertCircleOutline',
          value: '',
          valueType: ValueType.string,
          props: {
            required: false,
            enablePrint: true
          }
        },
      ]
    }, {
      name: '扩展-输入框',
      components: [
        {
          title: '前缀输入框',
          name: 'TextInputFix',
          icon: 'CreateOutline',
          value: {},
          valueType: ValueType.object,
          props: {
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
      ]
    },
    {
      name: '扩展组件',
      components: [
        {
          title: '明细表',
          name: 'TableList',
          icon: 'DocumentTextOutline',
          value: [],
          valueType: ValueType.array,
          props: {
            required: false,
            enablePrint: true,
            showBorder: true,
            rowLayout: true,
            showSummary: false,
            summaryColumns: [],
            maxSize: 0, //最大条数，为0则不限制
            columns:[] //列设置
          }
        }
      ]
    }
  ]
  
  export default {
    baseComponents
  }
  
  