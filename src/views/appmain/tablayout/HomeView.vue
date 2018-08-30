<template>
<div>
    <div class="common-box">
        <header>
            <i class="left-icon"></i>
            <span class="title-text">{{commonUse}}</span>
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
    <section class="hotBox">
        <div class="common-box common-box-hot">
            <header>
                <i class="left-icon"></i>
                <span class="title-text">{{hotBusiness}}</span>
            </header>
            <section>
                <ul class="list-item">
                    <template v-for="hot in list">
                        <li v-for="(item,index) in hot.hot" :key="item.name">
                            <a class="hotItem" @mouseenter="showActive(index+1)" @mouseleave="showActive(0)">
                                <img class="img1" :src="item.icon">
                                <img v-show="active === (index+1)" class="hide_tab" :src="item.icon_hover">
                                <p>{{item.operateName}}</p>
                            </a>
                        </li>
                    </template>
                </ul>
            </section>
        </div>
        <div class="common-box quickmenu">
            <header>
                <i class="left-icon"></i>
                <span class="title-text">{{quickMenu.title}}</span>
            </header>
            <section>
                <div class="demo-input-suffix">
                    <span class="input-text">{{quickMenu.phoneNumber}}</span>
                    <el-input placeholder="请输入号码" v-model="input10" clearable></el-input>
                </div>
                <div class="demo-input-suffix">
                    <el-row>
                        <el-col :span="5"><span class="input-text">{{quickMenu.money}}</span></el-col>
                        <el-col :span="17">
                            <el-row>
                                <el-col :span="12" v-for='item in quickMenu.moneys' :key="item.name">
                                    <el-button>{{item}}</el-button>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-radio v-model="radio" label="1">{{quickMenu.receipt}}</el-radio>
                                </el-col>
                                <el-col :span="12">
                                    <el-radio v-model="radio" label="2">{{quickMenu.invoice}}</el-radio>
                                </el-col>
                            </el-row>
                            <el-row class="choiceBox">
                                <el-button type="primary" class="btn">{{quickMenu.immediateRecharge}}</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </section>
        </div>
    </section>
</div>
</template>

<script>
//import list from '../../data/hotBusiness.json'
export default {
    data() {
        return {
            list:[],
            commonUse: "常用功能",
            hotBusiness: "热门业务",
            quickMenu:{
                title:"快捷缴费",
                phoneNumber:"手机号码：",
                money:"金额：",
                moneys: ['30', '50', '100', '200', '300', '500', '800', '其他'],
                receipt:"收据",
                invoice:"发票",
                immediateRecharge:"立即充值"
            },
            isnomal: true,
            nomal: 0,
            input10: "",
            radio: '1',
            src: '',
            active: 0,
            
        }
    },
    methods: {
        showActive(index) {
            this.active = index
        },
        getMenuInfo() {
            this.$axios.get('/api/user/hotMenu').then((response) => {
                this.list = response.data
            })
        }
    },
    mounted() {
        this.getMenuInfo()
    }
}
</script>

<style scoped>
.common-box,
.common-box-hot {
    font-size: 14px;
    padding: 10px;
    background: #fff;
    margin: 10px;
    margin-bottom: 0;
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
    padding: 20px;
    overflow: auto;
}

.list-item {
    margin: 10px 0;
    float: left;
    width: 100%;
}

.list-item li {
    float: left;
    width: calc(100% / 5);
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

section.hotBox {
    width: 100%;
}

.common-box-hot {
    width: 66.66%;
    float: left;
}

.common-box-hot .list-item li {
    float: left;
    width: calc(100% / 4);
    margin: 10px 0;
    text-align: center;
}

.hotItem {
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    border: 1px solid transparent;
    text-align: center;
    position: relative;
}

.hotItem:hover {
    color: #019ae5;
    border: 1px solid #0af;
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    cursor: pointer;
}

.quickmenu {
    width: 28%;
    float: left;
    /* display: inline-block; */
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
}

.quickmenu section {
    margin-left: 0px;
    font-size: 12px;
    padding-bottom: 0;
}

.quickmenu section>div {
    margin-bottom: 10px;
}

.quickmenu el-input {
    width: auto !important;
}

.input-text {
    width: 64px;
    display: inline-block;
}

.quickmenu .el-button {
    margin-bottom: 10px;
    padding: 10px 30px;
}

.el-row button {
    width: 94%;
    margin-bottom: 10px;
}

.el-row el-radio {
    margin-bottom: 10px;
}

.el-row button.btn {
    width: 100%;
}

.hide_tab {
    position: absolute;
    bottom: 57px;
    left: 24px;
}

.activeClass {
    display: none;
}
</style>
