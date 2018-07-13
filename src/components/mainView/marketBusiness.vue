<template>
<div class="content">
    <el-row :gutter="24">
        <el-col :span="11" class="charBox">
            <area-line></area-line>
        </el-col>
        <el-col :span="11" class="charBox">
           <pie></pie>
        </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :span="11" class="charBox">
           <bar-stack></bar-stack>
        </el-col>
        <el-col :span="11" class="charBox">
            
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
export default {
    components: {
        'expand-bar': expandBar,
        'area-line':areaLine,
        'pie':pie,
        'axis-line':axisLine,
        'bar-stack':barStack
    }
}
</script>

<style scoped>
.content{
    margin: 10px;
    margin-left: 20px;
}
.charBox{
    margin-right: 10px;
    margin-bottom: 10px;
    background: #fff;
}
</style>
