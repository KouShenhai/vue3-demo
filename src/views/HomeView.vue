<script setup>

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, LineChart } from "echarts/charts";
import VChart from "vue-echarts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart
]);

import { ref,computed } from 'vue';

const data=ref([
  {value:11,name:'A'},
  {value:31,name:'B'},
  {value:75,name:'C'},
  {value:25,name:'D'},
  {value:16,name:'E'},
])

const option=computed(()=>{
  return{
    xAxis:{
      type:'category',
      data:data.value.map(v=>v.name)
    },
    yAxis:{
      type:'value',
    },
    series:[
      {
        type:'line',
        data:data.value.map(v=>v.value)
      }
    ]
  }
})

// 定时更新数据 每一秒更新一次数据
setInterval(()=>{
  data.value=data.value.map(item=>({
    ...item,
    value:Math.random()*100,  //Math()随机函数，这里是随机生成100以内的数字
  }))
},1000)  //单位ms，1000ms即是1秒

</script>

<template>
  <main>
    <VChart class="chart" :option="option" />
  </main>
</template>
<style>
.chart{
  height: 400px;
}
</style>
