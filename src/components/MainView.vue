<template>
<el-tabs
    v-model='editableTabsValue'
    type='card'
    editable
    @edit='handleTabsEdit'
>
    <el-tab-pane
        :key='item.name'
        v-for='(item) in editableTabs'
        :label='item.title'
        :name='item.name'
    >
    <home-page v-if='item.content=="homePage"' :height='item.name'></home-page>
    <total v-if='item.content=="total"'></total>
        </el-tab-pane>
        </el-tabs>
</template>

<script>
import homePage from '@/components/mainView/HomeView.vue'
import total from '@/components/mainView/TotalMenu.vue'
export default {
  name: 'content-page',
  components: {
    'home-page': homePage,
    'total': total
  },
  props: {
    activeTabIndex:0,
    hotBusiness:{
      title: '热门业务'
    }
  },
  data () {
    return {
      editableTabsValue: '首页',
      editableTabs: [
        {
          title: '首页',
          name: '首页',
          content: 'homePage'
        },
        {
          title: '综合信息',
          name: '综合信息',
          content: 'total'
        },
        {
          title: '综合信息2',
          name: '综合信息2',
          content: 'total2'
        },
        {
          title: '综合信息3',
          name: '综合信息3',
          content: 'total3'
        }
      ],
      tabIndex: 2
    }
  },
  watch:{
    activeTabIndex:function(newVal){
      this.editableTabsValue=this.editableTabs[this.activeTabIndex].name;
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
}
</script>

<style scoped>

</style>
