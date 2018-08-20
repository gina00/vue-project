<template>
<section class="body">
    <el-card class="box-card" shadow="hover">
        <user-statistic></user-statistic>
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
    <div class="scss">
        <a href="javascript:;" @click="$store.state.show = true">点击</a>
        <t-dialog :show.sync="show"></t-dialog>
    </div>
</section>
</template>

<script>
import userStatistic from '../components/userStatistic.vue';
import dialog from '@/components/vuex/dialog.vue';
export default {
    components: {
        'user-statistic': userStatistic,
        't-dialog': dialog
    },
    data() {
        return {
           
        }
    }
};
</script>

<style scoped>
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
</style>
