<template>
<section class="body">
    <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>用户统计</span>
        </div>
        <div class="text item">
            <sale-users></sale-users>
        </div>
    </el-card>
    <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
    <div>
        <a href="javascript:;" @click="show = true">点击</a>
        <t-dialog :show.sync="show"></t-dialog>
    </div>
</section>
</template>

<script>
import saleUsers from '@/components/echartView/saleUsers';
export default {
    components: {
        'sale-users': saleUsers
    },
    data() {
        return {

        }
    },
    methods: {

    },
};
</script>

<style scoped>
.text {
    font-size: 14px;
}

.box-card {
    width: calc((100% - 30px) / 2);
    display: inline-block;
    margin-right: 10px;
}

.body {
    margin: 10px;
}

.body .box-card:last-child {
    margin-right: 0px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
