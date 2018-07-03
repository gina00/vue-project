<template>
<div class='aside-menu'>
    <ul class='aside-menu-ul'>
        <li>
            <a class='fa fa-user-circle-o' aria-hidden='true' @click='toggle()'></a>
        </li>
        <li v-for="(item,index) in classList" :key="item.name" :class='{active:selected==index}' @click='change(index)'>
            <router-link to="/total">
                <a class="fa" :class='[classList[index]]'></a>
            </router-link>
        </li>
    </ul>
    <div class='userinfo' v-show='isshow'>
        <div class='title'>
            <span>用户信息</span>
            <i class='fa fa-arrow-circle-left' aria-hidden='true' @click='toggle()'></i>
        </div>
        <el-input v-model='input' placeholder='请输入内容'></el-input>
        <div class='info-style'>
            <p class='info-title'>基本信息</p>
            <p>
                <span>手机号码：</span>
                <span class='number'>13500008888</span>
            </p>
            <p>
                <span>客户姓名：</span>
                <span>王小明</span>
            </p>
            <p>
                <span class='disable'>客户类型：</span>
                <span></span>
            </p>
        </div>
        <div class='info-style'>
            <p class='info-title'>业务信息</p>
            <p>
                <span>品牌名称：</span>
                <span>全球通</span>
            </p>
            <p>
                <span>归属区域：</span>
                <span>福建福州</span>
            </p>
            <p>
                <span class='disable'>用户状态：</span>
                <span></span>
            </p>
            <p>
                <span>开打时间：</span>
                <span>2012-10-09</span>
            </p>
            <p>
                <span class='disable'>基本产品：</span>
                <span></span>
            </p>
            <p>
                <span>当前积分：</span>
                <span>5000</span>
            </p>
            <p>
                <span class='disable'>可用余额：</span>
                <span>70.32</span>
            </p>
            <p>
                <span>欠费金额：</span>
                <span>0.00</span>
            </p>
        </div>
        <div class='info-style'>
            <p class='info-title'>其他信息</p>
            <p>
                <span class='disable'>新档标志：</span>
                <span></span>
            </p>
            <p>
                <span>是否实名：</span>
                <span>是</span>
            </p>
            <p>
                <span class='disable'>核实标识：</span>
                <span></span>
            </p>
            <p>
                <span class='disable'>携号信息：</span>
                <span></span>
            </p>
            <p>
                <span class='disable'>信用等级：</span>
                <span></span>
            </p>
            <p>
                <span class='disable'>用户星级：</span>
                <span></span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            isshow: true,
            selected: 0,
            classList: [
                'fa-home',
                'fa-newspaper-o',
                'fa-id-card-o',
                'fa-volume-up'
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        toggle() {
            this.isshow = !this.isshow
        },
        change(index) {
            this.selected = index;
        }
    }
}
</script>

<style scoped>
ul,
li,
p {
    list-style: none;
    margin: 0;
    padding: 0;
}

.aside-menu ul li a.fa-user-circle-o {
    color: #00ccff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

.el-container {
    min-height: 800px;
}

.aside-menu {
    height: 100%;
    position: relative;
}

.aside-menu-ul {
    width: 44px;
    height: 100%;
    background: #00253e;
}

.aside-menu ul li {
    padding: 12px 0;
    margin-bottom: 5px;
}

.aside-menu ul li a {
    color: #fff;
    font-size: 20px;
}

.aside-menu ul li a:hover {
    color: #00ccff;
    cursor: pointer;
}

.aside-menu ul li.active {
    color: #00ccff;
    background: #00456b;
    border-left: 3px solid #00ccff;
}

.aside-menu ul li.active a {
    color: #00ccff;
}

.userinfo {
    width: 165px;
    padding: 10px;
    background: #fff;
    border: 1px solid #00ccff;
    position: absolute;
    top: 0px;
    left: 44px;
}

.title {
    border-bottom: 1px solid #00ccff;
    text-align: left;
    margin-bottom: 10px;
    padding-bottom: 5px;
    color: #019ae5;
    position: relative;
}

.title i {
    position: absolute;
    right: 0px;
}

.el-input {
    margin-bottom: 10px;
}

.info-style {
    line-height: 22px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 12px;
    color: #333;
}

.info-title {
    color: #0af;
}

.number {
    font-size: 16px;
    color: #57d785;
}

.disable {
    color: #999;
}
</style>
