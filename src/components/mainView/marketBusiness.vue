<template>
<div class="content">
    <el-row :gutter="24">
        <el-col :span="11" class="charBox">
            <expand-bar></expand-bar>
        </el-col>
        <el-col :span="11" class="charBox">
            <expand-bar></expand-bar>
        </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :span="11" class="charBox">
            <expand-bar></expand-bar>
        </el-col>
        <el-col :span="11" class="charBox">
            <expand-bar></expand-bar>
        </el-col>
    </el-row>
</div>
</template>

<script>
import expandBar from '../echartView/expandBar.vue'

export default {
    components: {
        'expand-bar': expandBar
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
