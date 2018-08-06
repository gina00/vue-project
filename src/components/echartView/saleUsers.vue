<template>
<chart :options="option">
</chart>
</template>

<script>
export default {
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['今日新增用户数(人)', '今日注销用户数(人)', '本周新增用户数(人)', '本月注销用户数(人)', '本月新增用户数(人)', '本月注销用户数(人)']
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: [
                        '今日新增用户数(人)',
                        '今日注销用户数(人)',
                        '本周新增用户数(人)',
                        '本月注销用户数(人)',
                        '本月新增用户数(人)',
                        '本月注销用户数(人)'
                    ],
                    axisLabel: {
                        interval: 0,
                        rotate: -20
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '人数',
                    type: 'bar',
                    data: [5, 3, 35, 14, 150, 65],
                    itemStyle: {
                        normal: {
                            color: '#4ad2ff'
                        }
                    }
                }]
            }

        }
    }

}
</script>

<style scoped>

</style>
