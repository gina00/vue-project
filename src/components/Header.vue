<template>
<el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
>
    <div class="logoBox">
        <span class="andLogo">
            <img src="../../static/images/u12.png">
        </span>
        <span class="moveLogo">
            <img src="../../static/images/u14.png">
        </span>
    </div>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img
                src="../../static/images/u19.png"
                class="menuIcon"
            >
            <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
            <menu-list></menu-list>
        </el-dropdown-menu>
    </el-dropdown>
    <div class="header-right">
        <div class="pay">
            <span class="fa fa-television" aria-hidden="true"></span>
            <span>￥50.0</span>
        </div>
        <div class="operation">
            <span>欢迎您，1000655</span>
            <span class="el-icon-setting" aria-hidden="true"></span>
            <span class="fa fa-sign-out" aria-hidden="true"></span>
        </div>
    </div>
    </el-menu>
</template>

<script>
import MenuList from './MenuList.vue'
export default {
  name: 'Headers',
  components: {
    MenuList
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.logoBox {
  display: inline-block;
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

.menuIcon {
  width: 24px;
  height: 24px;
  margin-bottom: 3px;
}

.menuIcon:hover {
  cursor: pointer;
}

.el-menu--horizontal > .el-submenu {
  float: none;
  display: inline-block;
}

.el-menu {
  background: transparent;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: auto;
  line-height: 20px;
}

.el-menu--horizontal {
  border-bottom: none;
}

.el-dropdown {
  color: #fff;
  margin-left: 25px;
}

.el-header {
  padding: 0 10px;
}

.el-icon--right {
  margin-left: 0;
}

.el-dropdown-menu {
  width: 100%;
  position: absolute;
  left: 0px !important;
  background: #edfbff;
  border: none;
  box-shadow: transparent;
  border-radius: 0px;
  padding: 0px !important;
}
.header-right {
  float: right;
  font-size: 16px;
  line-height: 56px;
}
span[class^="fa"] {
    color: #fff;
    font-size: 16px;
}
.pay,.operation{
  float: left;
}
.pay{
  font-size: 20px;
  color: #fff;
  margin-right: 100px;
}
.pay .fa-television{
  font-size: 28px;
}
.operation{
  font-size: 12px;
  color: #fff;
}
.operation span{
  margin-right: 10px;
}
.operation span:hover{
  color:#e03864;
  cursor: pointer;
}
.el-icon-setting{
  font-size: 16px;
}
</style>
