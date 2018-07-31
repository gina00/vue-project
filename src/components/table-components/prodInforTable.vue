<template>
<el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="number" label="产品编码" width="180">
    </el-table-column>
    <el-table-column prop="date" label="入网时间" width="180">
    </el-table-column>
    <el-table-column prop="name" label="客户姓名" width="180">
    </el-table-column>
    <el-table-column prop="preMoney" label="预存金额（元）" width="180">
    </el-table-column>
    <el-table-column prop="totalMoney" label="保底金额（元）" width="180">
    </el-table-column>
    <el-table-column prop="effectiveTime" label="次日生效" width="180">
    </el-table-column>
    <el-table-column prop="registTime" label="登记时间">
    </el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                number:'201805220089',
                date: '2018-05-02',
                name: '王小虎',
                preMoney:'300',
                totalMoney:'200',
                effectiveTime:'次日生效',
                registTime: '2018-05-02'
            }, {
                number:'201805220090',
                date: '2018-05-05',
                name: '林悦',
                preMoney:'200',
                totalMoney:'100',
                effectiveTime:'次日生效',
                registTime: '2018-05-05'
            }, {
                number:'201805220091',
                date: '2018-05-10',
                name: '雷德华',
                preMoney:'300',
                totalMoney:'200',
                effectiveTime:'次日生效',
                registTime: '2018-05-10'
            }, {
                number:'201805220092',
                date: '2018-05-12',
                name: '陈星',
                preMoney:'300',
                totalMoney:'200',
                effectiveTime:'次日生效',
                registTime: '2018-05-12'
            },
            {
                number:'201805220093',
                date: '2018-05-17',
                name: '周星宇',
                preMoney:'100',
                totalMoney:'无',
                effectiveTime:'次日生效',
                registTime: '2018-05-17'
            }]
        }
    }
}
</script>

<style scoped>

</style>
