<template>
    <el-container>
        <el-header>
            <app-header></app-header>
        </el-header>
        <el-container>
            <el-aside width="auto">
                <sub-menu @aaaa="s" v-model="indexSelected"></sub-menu>
            </el-aside>
            <el-main>
                <main-view :activeTabIndex="indexSelected"></main-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppHeader from '@/components/commonView/Header.vue'
import SubMenu from '@/components/commonView/SubMenu.vue'
import MainView from '@/components/MainView.vue'
export default {
    data() {
        return {
            indexSelected:null,
            mainValue:null
        }
    },
    methods:{
        s(input){
        console.log(input);
        }
    },
    name: 'Home',
    components: {
        AppHeader,
        SubMenu,
        MainView
    }
}
</script>

<style>
body {
    margin: 0px;
}

.el-header {
    height: auto !important;
}

.el-header,
.el-footer {
    background-color: #019ae5;
    color: #333;
}

.el-aside {
    /* width: calc(100%); */
    background-color: #d3dce6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #f2f2f2;
    color: #333;
    text-align: left;
    padding: 0px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
