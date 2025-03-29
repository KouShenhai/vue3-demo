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
import { DateTime } from 'luxon'

const dateTime = DateTime.now();
const targetTime = DateTime.fromFormat('2025-03-28 12:00:00', 'yyyy-MM-dd HH:mm:ss')
console.log(dateTime.diff(targetTime,['days', 'hours', 'minutes', 'seconds']).toHuman({listStyle: 'long'}))
console.log(dateTime.toFormat('yyyy-MM-dd HH:mm:ss'))
// let number = moment.now();
// console.log(number)
// console.log(moment(number).format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment(number).format('YYYY-MM-DD'))
// console.log(moment(number).format('YYYYMMDD'))
// console.log(moment(number).add(1,'days').format('YYYY-MM-DD'))
// console.log(moment(number).subtract(1,'days').format('YYYY-MM-DD'))
// console.log(moment(number).add(1,'months').format('YYYY-MM-DD'))
// console.log(moment(number).subtract(1,'months').format('YYYY-MM-DD'))
// console.log(moment(number).add(1,'years').format('YYYY-MM-DD'))
// console.log(moment(number).subtract(1,'years').format('YYYY-MM-DD'))
// const date1 = moment('2023-01-01')
// const date2 = moment('2023-01-02')
// console.log(date2.diff(date1,'days'))
// console.log(date2.diff(date1,'months'))
// console.log(date1.isBefore(date2))
// console.log(date1.isAfter(date2))
// console.log(moment(number).fromNow(true))
// console.log(moment(number).fromNow())
// console.log(moment(number).toNow(true))
// console.log(moment(number).toNow())
// console.log(moment().calendar())
// console.log(moment("333").isValid())
// console.log(moment("2023-01-01").isSame(moment("2023-01-01")))
// console.log(moment(number).year())
// console.log(moment(number).month())
// // 天
// console.log(moment(number).date())
// // 星期
// console.log(moment(number).day())
// console.log(moment(number).week())
// console.log(moment(number).isoWeek())
// console.log(moment(number).weekday())
// console.log(moment(number).isoWeekday())
// console.log(moment(number).isoWeeksInYear())
// console.log(moment(number).weekYear())
// console.log(moment(number).isoWeekYear())
// console.log(moment(number).quarter())
// console.log(moment(number).weeksInYear())
// console.log(moment(number).weeks())
// console.log(moment(number).toDate())
// console.log(moment().valueOf())
// console.log(moment().unix())
// console.log(moment.unix(moment().unix()).format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().year(2025).month(0).date(1).week())
// moment.locale('zh-cn')
// console.log(moment().format('MMMM'))
// console.log(moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().startOf('week').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().endOf('week').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().endOf('month').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().startOf('year').format('YYYY-MM-DD HH:mm:ss'))
// console.log(moment().endOf('year').format('YYYY-MM-DD HH:mm:ss'))
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
