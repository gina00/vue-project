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
                    {{item.operate}}
                </li>
              </template>
            </ul>
        </section>
    </div>
    <div class="common-box">
        <header>
            <i class="left-icon"></i>
            <span class="title-text">{{hotBusiness}}</span>
        </header>
        <section>
            <ul class="list-item">
              <template v-for="hot in list" >
                <li class="img-list" v-for="item in hot.hot" :key="item.name">
                   <img :src="item.iconUrl">
                   <span>{{item.operateName}}</span>
                </li>
              </template>
            </ul>
        </section>
    </div>
</div>
</template>

<script>
import list from "../data/hotBusiness.json";
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
      commonUse: "常用功能",
      hotBusiness: "热门业务"
    };
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.common-box {
  font-size: 14px;
  padding: 10px;
  background: #fff;
  margin: 10px;
  float: left;
}

.left-icon {
  width: 3px;
  background: #019ae5;
  height: 18px;
  vertical-align: sub;
  display: inline-block;
}

.common-box header {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.title-text {
  padding-left: 5px;
}

.common-box section {
  padding: 10px;
  margin: 20px;
  float: left;
}
.list-item li {
  float: left;
  width: calc(100% / 5);
  margin: 10px 0;
}
.img-list:hover{
  color:#019ae5;
  border: 1px solid #0af;
}
.list-item li img{
  width: 48px;
  height: 48px;
}
</style>
