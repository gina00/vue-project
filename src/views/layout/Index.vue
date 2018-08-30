<template>
<transition name="fade-transform" mode="out-in" appear='true'>
    <el-container>
        <el-header>
            <app-header></app-header>
        </el-header>
        <el-container>
            <el-aside width="auto">
                <sub-menu v-model="indexSelected" :activeSubIndex='mainValue'></sub-menu>
            </el-aside>
            <el-main>
                <main-view :activeTabIndex="indexSelected" v-model="mainValue"></main-view>
            </el-main>
        </el-container>
    </el-container>
</transition>
</template>

<script>
import AppHeader from "./components/Header.vue";
import SubMenu from "./components/SubMenu.vue";
import MainView from "./components/MainView.vue";
export default {
    data() {
        return {
            indexSelected: null,
            mainValue: null
        };
    },
    methods: {
        s(input) {
            console.log(input);
        }
    },
    name: "Home",
    components: {
        AppHeader,
        SubMenu,
        MainView
    }
}
</script>
