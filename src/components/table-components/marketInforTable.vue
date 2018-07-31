<template>
<el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="number" label="营销案编码" width="180">
    </el-table-column>
    <el-table-column prop="mkname" label="营销方案名称" width="180">
    </el-table-column>
    <el-table-column prop="effectiveTime" label="业务生效时间">
    </el-table-column>
    <el-table-column prop="failureTime" label="业务结束时间">
    </el-table-column>
    <el-table-column prop="preMoney" label="预存金额（元）">
    </el-table-column>
    <el-table-column prop="totalMoney" label="保底金额（元）">
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
                mkname: '营销方案001',
                effectiveTime: '2018-06-01',
                failureTime:'2019-06-01',
                preMoney:'300',
                totalMoney:'188',
                registTime: '2018-05-22'
            }, {
                number:'201804070001',
                mkname: '营销方案001',
                effectiveTime: '2018-06-01',
                failureTime:'2019-06-01',
                preMoney:'100',
                totalMoney:'无',
                registTime: '2018-05-22'
            }, {
                number:'201801100074',
                mkname: '营销方案001',
                effectiveTime: '2018-06-01',
                failureTime:'2019-06-01',
                preMoney:'300',
                totalMoney:'188',
                registTime: '2018-05-22'
            }, {
                number:'20180210098',
                mkname: '营销方案001',
                effectiveTime: '2018-06-01',
                failureTime:'2019-06-01',
                preMoney:'300',
                totalMoney:'188',
                registTime: '2018-05-22'
            }]
        }
    }
}
</script>

<style scoped>

</style>
