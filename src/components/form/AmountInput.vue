<script setup>
import {ref,defineEmits,computed } from 'vue'

const props = defineProps({
    modelValue: { 
        type:Object,
        default: ()=>{
            return {
              value:'',
              defaultValue:0,
              size: '',
              showChinese:''
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

const convertCurrency = (money)=>{
      //汉字的数字
      const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
      //基本单位
      const cnIntRadice = ['', '拾', '佰', '仟'];
      //对应整数部分扩展单位
      const cnIntUnits = ['', '万', '亿', '兆'];
      //对应小数部分单位
      const cnDecUnits = ['角', '分', '毫', '厘'];
      //整数金额时后面跟的字符
      const cnInteger = '整';
      //整型完以后的单位
      const cnIntLast = '元';
      //最大处理的数字
      let maxNum = 999999999999999.9999;
      //金额整数部分
      let integerNum;
      //金额小数部分
      let decimalNum;
      //输出的中文金额字符串
      let chineseStr = '';
      //分离金额后用的数组，预定义
      let parts;
      if (money === '') {
        return '';
      }
      money = parseFloat(money);
      if (money >= maxNum) {
        //超出最大处理数字
        return '';
      }
      if (money === 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
      }
      //转换为字符串
      money = money.toString();
      if (money.indexOf('.') === -1) {
        integerNum = money;
        decimalNum = '';
      } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
      }
      //获取整型部分转换
      if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (let i = 0; i < IntLen; i++) {
          let n = integerNum.substr(i, 1);
          let p = IntLen - i - 1;
          let q = p / 4;
          let m = p % 4;
          if (n == '0') {
            zeroCount++;
          } else {
            if (zeroCount > 0) {
              chineseStr += cnNums[0];
            }
            //归零
            zeroCount = 0;
            chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
          }
          if (m == 0 && zeroCount < 4) {
            chineseStr += cnIntUnits[q];
          }
        }
        chineseStr += cnIntLast;
      }
      //小数部分
      if (decimalNum !== '') {
        let decLen = decimalNum.length;
        for (let i = 0; i < decLen; i++) {
          let n = decimalNum.substr(i, 1);
          if (n !== '0') {
            chineseStr += cnNums[Number(n)] + cnDecUnits[i];
          }
        }
      }
      if (chineseStr === '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
      } else if (decimalNum === '') {
        chineseStr += cnInteger;
      }
      return chineseStr;
}
const chinese = computed(()=>{
  return convertCurrency(_value)
})

</script>
<template>
  <div>
      <a-input-number size="small" 
          style="width: 100%;" 
          v-model:value="_value"
          :formatter="_value => `$ ${_value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="_value => _value.replace(/\$\s?|(,*)/g, '')" />
      <div style="margin-top: 15px" v-show="showChinese">
        <span>大写：</span>
        <span class="chinese">{{chinese}}</span>
      </div>
  </div>
</template>
<style lang="less" scoped>
.chinese{
  color: #afadad;
  font-size: smaller;
}
</style>
