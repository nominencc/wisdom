<template>
  <div :class="className" style="width:550px;height: 300px;" />
</template>

<script>
import echarts from '/Gitee/cc/vue-element-admin/node_modules/echarts/index'
require('/Gitee/cc/vue-element-admin/node_modules/echarts/theme/macarons') // echarts theme

const animationDuration = 3000

export default {
  name:'RadderChart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          //网格数
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '土壤温度', max: 40 },
            { name: '土壤湿度', max: 20 },
            { name: '土壤PH', max: 20 },
            { name: '土壤氮', max: 20 },
            { name: '土壤磷', max: 20 },
            { name: '土壤钾', max: 20 },
            { name: '土壤电导率', max: 20 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['土地1', '土地2', '土地3'],
          textStyle: {
            color:'#fff'
          }
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [25.6, 10, 7, 5, 3, 7,2],
              name: '土地1'
            },
            {
              value: [28.6, 8, 9, 6, 2, 5,3],
              name: '土地2'
            },
            {
              value: [24.2, 15, 9, 3, 5, 6,1],
              name: '土地3'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
