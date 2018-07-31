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
import areaLine from '../echartView/areaLine.vue'
import pie from '../echartView/pieView.vue'
import barStack from '../echartView/barStack.vue'
import lineAqi from '../echartView/lineAqi.vue'
import barAnimation from '../echartView/barAnimation.vue'
import radar from '../echartView/radar.vue'
export default {
    components: {
        'area-line':areaLine,
        'pie':pie,
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
    width: calc((100% - 10px ) / 2);
    margin-bottom: 10px;
    background: #fff;
    padding: 10px;
}
.el-row .charBox:first-child{
    margin-right: 10px;
}
</style>
