<template>
<div class="main-bg">
    <section class="mainBox">
        <div class="logoBox">
            <span class="andLogo">
                <img src="/static/images/u12.png">
            </span>
            <span class="moveLogo">
                <img src="/static/images/u14.png">
            </span>
        </div>
        <div class="mainItem">
            <el-row>
                <el-col :span="14">
                    <div class="grid-content">
                        <div class="mainItem-l-top">
                            <p>中国移动客户关系管理系统</p>
                            <p>China Mobile Customer Relationship Management System</p>
                        </div>
                        <div class="mainItem-l-bottom">
                            <img src="/static/images/u899.png">
                        </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="login-ipt">
                        <el-input class="fa fa-user-o" placeholder="用户名" v-model="input" clearable></el-input>
                        <el-input class="fa fa-expeditedssl" placeholder="密码" v-model="input" clearable></el-input>
                        <el-input class="fa fa-envelope-o" placeholder="短信验证码" v-model="input" clearable></el-input>
                        <el-button type="primary">登录</el-button>
                        <div class="regitBox">
                            <p>
                                <span class="noaccount">没有账号</span>
                                <a class="common-text">注册</a>
                            </p>
                            <p>
                                <a class="common-text" @click="open">忘记密码</a>
                                <i class="fa fa-question-circle-o"></i>
                            </p>
                        </div>
                    </div>
                </el-col>

            </el-row>
        </div>
        <p class="footText">2018 Version1.0</p>
    </section>
</div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            input: '',
            message:'',
        }
    },
    methods: {
        open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>

<style scoped>
.main-bg {
    background: #019ae5;
    padding: 40px 200px;
    height: 430px;
    margin-bottom: 120px;
}

.mainBox {
    height: auto;
    margin: 0 auto;
    padding: 0px 150px;
}

.logoBox {
    padding: 10px 0;
}

.logoBox img {
    height: 32px;
}

.logoBox span {
    display: inline-block;
}

.logoBox span.andLogo {
    width: 62px;
    border-right: 1px solid #fff;
    margin-right: 10px;
}

.logoBox span.moveLogo {
    width: 103px;
}

.mainItem {
    margin-top: 30px;
}

.mainItem-l-top {
    color: #fff;
}

.mainItem-l-top p:first-child {
    font-size: 36px;
}

.mainItem-l-top p:last-child {
    font-size: 12px;
}

.mainItem-l-bottom {
    margin-top: 70px;
}

.mainItem-l-bottom img {
    width: 380px;
    height: 290px;
}

.login-ipt {
    margin-top: 10px;
    margin-left: 60px;
    padding: 20px;
    background: #ffffff;
    font-size: 14px;
}

*[class^='fa'] {
    color: #c1c1c1;
    margin-bottom: 20px;
}

.el-input.el-input--suffix {
    position: relative;
}

.el-input.el-input--suffix:before {
    position: absolute;
    top: 12px;
    left: 13px;
    font-size: 18px;
}

.common-text {
    color: #00aaff;
}

.noaccount {
    color: #999;
}

.regitBox {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
}
.footText{
    color: #00ccff;
    text-align: center;
    margin-top: 100px;
}
</style>
