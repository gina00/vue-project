<template>
<div class='aside-menu' :style="{width:Width}">
    <ul class='aside-menu-ul'>
        <li>
            <a class='fa fa-user-circle-o' :class="classObject" aria-hidden='true' @click='toggle()'></a>
        </li>
        <li v-for="(item,index) in classList" :key="item.name" :class='{active:selected==index}' @click='change(index)'>
            <a class="fa" :class='[classList[index]]'></a>
        </li>
    </ul>
    <div class='userinfo' v-show='isshow'>
        <div class='title'>
            <span>用户信息</span>
            <i class='fa fa-arrow-circle-left' aria-hidden='true' @click='toggle()'></i>
        </div>
        <el-input v-model='input' placeholder='请输入内容'></el-input>
        <div class='info-style' v-for='item in userData' :key="item.name">
            <p :class="{'info-title':titleClass}">{{item.baseInfor}}</p>
            <p v-for="item2 in item.Infor" :key="item2.name">
                <span :class="{disable:item2.disable}">{{item2.title}}</span>
                <span :class='{number:item2.hasClass}'>{{item2.value}}</span>
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
            error: null,
            selected: 0,
            classList: [
                'fa-home',
                'fa-newspaper-o',
                'fa-id-card-o',
                'fa-volume-up'
            ],
            Width: 231 + 'px',
            activeWidth: 'auto',
            userData: [],
            titleClass: true
        }
    },
    props: {
        activeSubIndex: 0
    },
    watch: {
        activeSubIndex: function () {
            console.log("右侧被点击了，此时对应左侧下标selected：" + this.selected)
            this.selected = this.activeSubIndex
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
            if (!this.isshow) {
                this.Width = this.activeWidth
            } else {
                this.Width = 231 + 'px'
            }
        },
        change(index) {
            debugger
            this.selected = index;
            console.log("左侧被点击了,触发input时间，当前下标值selected：" + this.selected)
            this.$emit('input', index)
        },
        getInfor() {
            this.$axios.get('/api/user/infors').then((response) => {
                this.userData = response.data
                console.log(this.userData)
            })
        }
    },
    mounted() {
        this.getInfor()
    },
    computed: {
        classObject: function () {
            return {
                'toggle-o': this.isshow && !this.error,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.el-aside {
    width: auto;
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
    ul {
        li {
            padding: 12px 0;
            margin-bottom: 5px;
            &.active {
                color: #00ccff;
                background: #00456b;
                border-left: 3px solid #00ccff;
                a{
                    color: #00ccff;
                }
            }
            a {
                color: #fff;
                font-size: 20px;
                &.toggle-o {
                    color: #00ccff;
                }
                &:hover {
                    color: #00ccff;
                    cursor: pointer;
                }
            }
        }
    }
}

.aside-menu-ul {
    width: 44px;
    height: 100%;
    background: #00253e;
    float: left;
}

.userinfo {
    width: 165px;
    padding: 10px;
    background: #fff;
    border: 1px solid #00ccff;
    float: left;
    padding-bottom: 49px;
}

.title {
    border-bottom: 1px solid #00ccff;
    text-align: left;
    margin-bottom: 10px;
    padding-bottom: 5px;
    color: #019ae5;
    position: relative;
    i{
         position: absolute;
    right: 0px;
    }
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
