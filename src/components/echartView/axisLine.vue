<template>
<div id="myChart" :style="{width: '300px', height: '300px'}">
</div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import qs from 'qs'
import getBar from '../../data/bar'
import theme from '../../data/theme.json'
import ECharts from '../ECharts.vue'
ECharts.registerTheme('ovilia-green', theme)
export default {
    name: 'hello',
    data() {
        
        return {
            msg: 'Welcome to Your Vue.js App',
            options: getBar()
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption(this.options);
        }
    }
}
</script>

<style scoped>
.echarts {
    height: 300px;
}
</style>
