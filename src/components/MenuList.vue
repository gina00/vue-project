<template>
<div>
    <ul class="menuList" >
        <li v-for="(root,index) in data" :key="root.name" @click="change(index)"
        :class="{active:selected==index}" >
            <a href="#">{{root.listName}}</a>   
        </li>
    </ul>
    <div class="childList">
        <template v-for="item in data" >
                <ul class="parent-ul" :key="item.name" :class="{show:selected==index}">
                    <li v-for="item2 in item.children" :key="item2.name" >
                        <div class="title">
                            <i class="fa fa-bars"></i>
                            <span class="titleText">{{item2.name}}</span>
                        </div>
                        <ul class="item-ul">
                            <li v-for="item3 in item2.children" :key="item3.name">
                                <a>{{item3.name}}</a></li>
                            <!-- <li class="disable"><a aria-disabled="true">测试/设备卡开户(新)</a></li> -->
                        </ul>
                    </li>
                </ul>
        </template>
    </div>
</div>

</template>

<script>
import data from '../data/menulist.json'
export default {
    data(){
        return{
            data,
            selected: 0, // 初始化第一个栏块高亮
            num: 1
        }
    },
    methods: {
       change(index) {
            this.selected = index;
        }
  },
}
</script>

<style scoped>
.el-popper[x-placement^="bottom"] {
    margin-top: 10px;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.menuList {
    height: 50px;
    padding-left: 10px;
    border-bottom: 1px solid #e30077;
}

.menuList li {
    float: left;
    box-sizing: border-box;
}

.menuList li a {
    padding: 14px;
    display: inline-block;
    text-decoration: none;
    font-size: 14px;
    color: #333;
}

.menuList li a:hover {
    color: #e30077;
}

.menuList li.active {
    color: #e30077;
    border-bottom: 3px solid #e30077;
}

.childList {
    margin-left: 15px;
    padding-bottom: 130px;
    float: left;
}

.parent-ul>li {
    float: left;
    margin: 0 10px;
}

.parent-ul li .title {
    padding: 10px 0px;
    border-bottom: 1px solid #e30077;
    margin-bottom: 10px;
    box-shadow: 0px 1px #e87ebb;
}

.titleText {
    font-size: 14px;
    padding: 10px 20px 10px 10px;
}

.item-ul li {
    font-size: 12px;
    margin: 8px 0px;
}

.item-ul li a:hover {
    color: #e30077;
    cursor: pointer;
}

.item-ul li a[aria-disabled="true"]:hover {
    color: #999;
    cursor: auto;
}

i[class^="fa"] {
    color: #e30077;
    font-size: 16px;
    display: inline-block;
}

.disable {
    color: #999999;
}

.parent-ul{
    display: none;
}
.parent-ul:first-child{
    display: block;
}
.show{
    display: block;
}
</style>
