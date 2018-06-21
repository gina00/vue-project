<template>
<div>
    <div class="common-box">
        <header >
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
                <template v-for="hot in list" >
                  <li v-for="item in hot.hot" :key="item.name">
                    <a class="hotItem">
                      <img :src="item.icon">
                      <p>{{item.operateName}}</p>
                    </a>
                  </li>
                </template>
              </ul>
          </section>
      </div>
      <div class="common-box quickmenu">
        <header >
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
    </section>
</div>
</template>

<script>
import list from '../data/hotBusiness.json';
export default {
  props: {
    hot: {
      type: Array,
      default() {
        return [
          { oprate: "sda" },
          { oprate: "sda" },
          { oprate: "sda" },
          { oprate: "sda" }
        ];
      }
    }
  },
  propsData: {
    msg: "hello"
  },
  data() {
    return {
      list,
      commonUse: '常用功能',
      hotBusiness: '热门业务',
      isnomal: true,
      nomal: 0
    }
  },
  methods:{
    
  }

}
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.common-box,.common-box-hot {
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

.common-box header{
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.title-text {
  padding-left: 5px;
}

.common-box section,.common-box-hot section {
  padding: 10px;
  margin: 20px;
  overflow: auto;
}
.list-item li {
  float: left;
  width: calc(100% / 5);
  margin: 10px 0;
}
.list-item li img{
  width: 48px;
  height: 48px;
}
.operateItem:hover{
  color: #019ae5;
  cursor: pointer;
}
section.hotBox {
  width: 100%;
}
.common-box-hot{
  width: 66.66%;
  float: left;
}
.common-box-hot .list-item li {
  float: left;
  width: calc(100% / 4);
  margin: 10px 0;
}
.hotItem{
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    border:1px solid transparent;
    text-align: center;
}
.hotItem:hover{
    color: #019ae5;
    border: 1px solid #0af;
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    cursor: pointer;
}
.quickmenu{
    width: 28%;
    float: left;
    /* display: inline-block; */
    margin-right: 0;
    margin-left: 0;
}
</style>
