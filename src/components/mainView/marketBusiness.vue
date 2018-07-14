<template>
<div class="content">
    <el-row>
        <el-col class="charBox">
            <area-line></area-line>
        </el-col>
        <el-col class="charBox">
           <pie></pie>
        </el-col>
    </el-row>
    <el-row>
        <el-col class="charBox">
           <bar-stack></bar-stack>
        </el-col>
        <el-col class="charBox">
            <line-aqi></line-aqi>
        </el-col>
    </el-row>
    <el-row>
        <el-col class="charBox">
           <bar-animation></bar-animation>
        </el-col>
        <el-col class="charBox">
            <radar></radar>
        </el-col>
    </el-row>
</div>
</template>

<script>
import expandBar from '../echartView/expandBar.vue'
import areaLine from '../echartView/areaLine.vue'
import axisLine from '../echartView/axisLine.vue'
import pie from '../echartView/pieView.vue'
import barStack from '../echartView/barStack.vue'
import lineAqi from '../echartView/lineAqi.vue'
import barAnimation from '../echartView/barAnimation.vue'
import radar from '../echartView/radar.vue'
export default {
    components: {
        'expand-bar': expandBar,
        'area-line':areaLine,
        'pie':pie,
        'axis-line':axisLine,
        'bar-stack':barStack,
        'line-aqi':lineAqi,
        'bar-animation':barAnimation,
        'radar':radar
    },
    data(){
        return{
            paddingNum:10,
        }
    }
}
</script>

<style scoped>
.content{
    margin: 10px;
}
.charBox{
    width: calc((100% - 30px ) / 2);
    margin-right: 10px;
    margin-bottom: 10px;
    background: #fff;
    padding: 10px;
}
</style>
