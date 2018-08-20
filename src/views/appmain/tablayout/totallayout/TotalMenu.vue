<template>
<el-tabs v-model="activeName" @tab-click="handleClick" class="totalmenu">
    <el-tab-pane :label="totalInfor" name="first">
        <total-infor :total-infor="totalInfor"></total-infor>
    </el-tab-pane>
    <el-tab-pane :label="marketingBusiness" name="second" >
      <market-business></market-business>
    </el-tab-pane>
    <el-tab-pane :label="myOccur" name="third">
       
    </el-tab-pane>
    <el-tab-pane :label="productInfor" name="fourth">{{productInfor}}</el-tab-pane>
    <el-tab-pane :label="customerInfor" name="five">{{customerInfor}}</el-tab-pane>
    <el-tab-pane :label="familyInfor" name="six">{{familyInfor}}</el-tab-pane>
    <el-tab-pane :label="packageInfor" name="seven">{{packageInfor}}</el-tab-pane>
    <el-tab-pane :label="moreInfor" name="eight">{{moreInfor}}</el-tab-pane>
</el-tabs>
</template>

<script>
import totalData from './TotalInfor.vue'
import marketBusiness from '../marketBusiness.vue'
export default {
    components: {
        'total-infor': totalData,
        'market-business':marketBusiness
    },
    data() {
        return {
            totalData,
            activeName: 'first',
            totalInfor: '综合信息',
            marketingBusiness: '营销业务',
            myOccur: '我的账户',
            productInfor: '产品信息',
            customerInfor: '个人资料',
            familyInfor: '家庭信息',
            packageInfor: '套餐情况',
            moreInfor: '更多'
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.el-tabs.el-tabs--top{
    padding: 0px;
}
</style>
