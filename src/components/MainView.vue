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
    <tab v-if='item.content=="tab"'></tab>
        </el-tab-pane>
        </el-tabs>
</template>

<script>
import homePage from './HomeView.vue'
import tab from './tab2.vue'
export default {
  name: 'content-page',
  components: {
    'home-page': homePage,
    'tab': tab
  },
  props: {
    hotBusiness:{
      title: '热门业务'
    }
  },
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'homePage'
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'tab'
        }
      ],
      tabIndex: 2
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
