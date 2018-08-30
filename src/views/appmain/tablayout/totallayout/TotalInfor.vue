<template>
<div class="content">
    <el-row>
        <el-col :span="13" class="first-content">
            <el-card class="box-card">
                <el-row>
                    <el-col :span="12">
                        <div class="payBox">
                            <a class='fa fa-usd iconBox balance'></a>
                            <div class="showtext">
                                <p>{{balance}}</p>
                                <p class="color-blue">{{balanceVal}}</p>
                            </div>
                        </div>
                        <div class="payBox">
                            <a class='fa fa-bolt iconBox arrearage'></a>
                            <div class="showtext">
                                <p>{{overdue}}</p>
                                <p class="color-pink">{{overdueVal}}</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12" class="showPayInfo">
                        <p>
                            <span>{{balanceMonCom}}</span>
                            <span class="color-blue">{{balanceMonComVal}}</span>
                        </p>
                        <p>
                            <span>{{balanceMonCan}}</span>
                            <span class="color-pink">{{balanceMonCanVal}}</span>
                        </p>
                        <p>
                            <span>{{noreturnBalance}}</span>
                            <span class="color-pink">{{noreturnBalanceVal}}</span>
                        </p>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="10">
            <div class="common-box">
                <header>
                    <i class="left-icon"></i>
                    <span class="title-text">{{referralServices}}</span>
                </header>
                <section>
                    <ul class="list-item">
                        <template v-for="root in list">
                            <li v-for="item in root.operateList" :key="item.name">
                                <a class="operateItem">{{item.operate}}</a>
                            </li>
                        </template>
                    </ul>
                </section>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-tabs type="border-card">
                <el-tab-pane :label="productInfor">
                    <pdinfor-data></pdinfor-data>
                </el-tab-pane>
                <el-tab-pane :label="marketingInfor">
                    <mkinfor-data></mkinfor-data>
                </el-tab-pane>
            </el-tabs>

        </el-col>
    </el-row>
</div>
</template>

<script>
//import list from '../../data/hotBusiness.json'
import mkinforData from '@/components/table-components/marketInforTable.vue'
import pdinforData from '@/components/table-components/prodInforTable.vue'
export default {
    components: {
        name: 'totalinfor',
        'mkinfor-data': mkinforData,
        'pdinfor-data':pdinforData
    },
    props: ['total-infor'],
    data() {
        return {
            list:[],
            referralServices: '推荐业务',
            productInfor: '产品信息',
            marketingInfor: '营销信息',
            balance:"我的余额 ( 元 )",
            balanceVal:'70.32',
            overdue:'我的欠费( 元 )',
            overdueVal:'0.00',
            balanceMonCom:'本月通用余额：',
            balanceMonComVal:'70.32',
            balanceMonCan:'本月专款可用余额：',
            balanceMonCanVal:'0.00',
            noreturnBalance:'未返还余额：',
            noreturnBalanceVal:'0.00'
        }
    },
    mounted() {
        this.getReferralServices()
    },
    methods: {
        getReferralServices() {
            this.$axios.get('/api/user/hotMenu').then((response) => {
                this.list = response.data
            })
        }
    }
}
</script>

<style scoped>
.content {
    padding: 0;
}

.content>div {
    margin: 10px;
}

.first-content {
    margin-right: 10px;
}

.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
    border-radius: 0px;
    box-shadow: none;
    border: none;
}

.iconBox {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50px;
    font-size: 30px;
    color: #fff;
    margin-top: 8px;
}

.balance {
    background: #00c46d;
}

.arrearage {
    background: #e30077;
}

.payBox {
    padding-left: 20px;
    display: flex;
    flex-flow: row nowrap;
}

.showtext {
    padding: 10px;
    text-align: right;
    font-size: 14px;
}

.showtext p {
    margin-bottom: 10px;
}

.color-blue,
.color-pink {
    font-size: 28px;
}

.color-blue {
    color: #139ae5;
}

.color-pink {
    color: #e30077;
}

.showPayInfo {
    padding: 10px 0;
}

.showPayInfo p {
    margin-bottom: 50px;
}

.showPayInfo p:last-child {
    margin-bottom: 0;
}

.showPayInfo p span {
    font-size: 14px;
}

.showPayInfo p span:first-child {
    display: inline-block;
    width: 160px;
    text-align: right;
}

.el-col-10 {
    width: 44.66667%;
}

/*=========================首页共有样式引用==========================*/

.common-box,
.common-box-hot {
    font-size: 14px;
    padding: 10px;
    background: #fff;
    margin-bottom: 0;
    min-height: 212px;
}

.left-icon {
    width: 3px;
    background: #019ae5;
    height: 18px;
    vertical-align: sub;
    display: inline-block;
}

.common-box header {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}

.title-text {
    padding-left: 5px;
}

.common-box section,
.common-box-hot section {
    padding: 10px;
    overflow: auto;
}

.list-item li {
    float: left;
    width: calc(100% / 4);
    margin: 10px 0;
}

.list-item li img {
    width: 48px;
    height: 48px;
}

.operateItem:hover {
    color: #019ae5;
    cursor: pointer;
}

/*=========================首页共有样式引用==========================*/

.el-tabs--border-card {
    box-shadow: none;
    border: none;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    border-top-color: #dcdfe6;
}
</style>
