<template>
<el-tabs v-model='editableTabsValue' type='card' editable @edit='handleTabsEdit' @tab-click='change'>
    <el-tab-pane :key='item.name' v-for='item in editableTabs' :label='item.title' :name='item.name'>
        <home-page v-if='item.content=="homePage"' :height='item.name'></home-page>
        <total v-if='item.content=="total"'></total>
        <sale-panel v-if='item.content=="salePanel"'></sale-panel>
    </el-tab-pane>
</el-tabs>
</template>

<script>
import homePage from "@/views/mainviews/HomeView.vue";
import total from "@/views/mainviews/TotalMenu.vue";
import salePanel from "@/views/mainviews/saleDashboard.vue";
export default {
  name: "content-page",
  components: {
    "home-page": homePage,
    total: total,
    "sale-panel": salePanel
  },
  props: {
    activeTabIndex: 0,
    hotBusiness: {
      title: "热门业务"
    }
  },
  data() {
    return {
      editIndex: 0,
      editableTabsValue: "首页",
      editableTabs: [
        {
          title: "首页",
          name: "首页",
          content: "homePage"
        },
        {
          title: "综合信息",
          name: "综合信息",
          content: "total"
        },
        {
          title: "销售管理",
          name: "销售管理",
          content: "salePanel"
        },
        {
          title: "通知公告",
          name: "通知公告",
          content: "total3"
        }
      ],
      tabIndex: 2
    };
  },
  watch: {
    // 监听器，如果activeTabIndex值变动就会执行该函数
    activeTabIndex: function(newVal) {
      console.log(
        "左侧被点击了,右侧标签名tabname：" +
          this.editableTabs[this.activeTabIndex].name
      );
      // activeTabIndex变了 你又给activeTabIndex赋值，将会死循环。
      // activeTabIndex 是外面传进了的，你这个组件使用的是editableTabsValue
      // 为什么editableTabsValue的初始值是 字符 "0",赋值成数字0 它不认
      this.editableTabsValue = this.editableTabs[this.activeTabIndex].name; //当前首页标签下标值给submenu下标
    }
  },
  methods: {
    change() {
      for (var i = 0; i <= this.editableTabs.length; i++) {
        if (this.editableTabsValue == this.editableTabs[i].name) {
          this.editIndex = i;
          this.$emit("input", this.editIndex);
          console.log(
            "右侧被点击了,触发input时间，右侧标签名tabname：" +
              this.editableTabsValue +
              "，对应下标是：" +
              this.editIndex
          );
        }
      }
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>

<style scoped>
</style>
