<template>
<div>
    <ul class='menuList'>
        <li v-for='(root,index) in data' :key='root.name' @click='change(index)' :class='{active:selected==index}'>
            <a href='#'>{{root.listName}}</a>
        </li>
        <el-input v-model='input' placeholder='请输入内容'></el-input>
    </ul>
    <div class='childList'>
        <!-- <a :key='item.name'>{{item.id}}</a> -->
        <ul class='parent-ul'>
            <li v-for='item in data[selected].children' :key='item.name'>
                <div class='title'>
                    <i class='fa fa-bars'></i>
                    <span class='titleText'>{{item.name}}</span>
                </div>
                <ul class='item-ul'>
                    <li v-for='item2 in item.children' :key='item2.name' :class='{disable:item2.disable}'>
                        <a>{{item2.name}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
// import data from '../data/menulist.json'
export default {
    data() {
        return {
            //所有数据
            data: [{
                listName: "",
                children: [{
                    children: []
                }]
            }],
            input: '',
            //当前标签页菜单数据
            menuData: [],
            selected: 0, // 初始化第一个栏块高亮
            num: 1
        }
    },
    mounted() {
        this.getMenuInfo()
    },
    methods: {
        change(index) {
            this.selected = index;
            //清空数组
            this.menuData.splice(0, this.menuData.length);
            this.menuData.push(...this.data[index].children);
            // console.log(this.data[index].children);
        },
        getMenuInfo() {
            this.$axios.get('/api/user/menulsit').then((response) => {
                this.data = response.data
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.el-popper[x-placement^='bottom'] {
    margin-top: 10px;
}

.menuList {
    height: 50px;
    padding-left: 10px;
    border-bottom: 1px solid #e30077;
    li {
        float: left;
        box-sizing: border-box;
        &.active {
            color: #e30077;
            border-bottom: 3px solid #e30077;
        }
        a {
            padding: 14px;
            display: inline-block;
            text-decoration: none;
            font-size: 14px;
            color: #333;
            &:hover {
                color: #e30077;
            }
        }
    }
}

.childList {
    margin-left: 15px;
    padding-bottom: 130px;
    float: left;
}

.parent-ul {
    &>li {
        float: left;
        margin: 0 10px;
    }
    li {
        .title {
            padding: 10px 0px;
            border-bottom: 1px solid #e30077;
            margin-bottom: 10px;
            box-shadow: 0px 1px #e87ebb;
        }
    }
}

.titleText {
    font-size: 14px;
    padding: 10px 20px 10px 10px;
}

.item-ul {
    li {
        font-size: 12px;
        margin: 8px 0px;
        a {
            &:hover {
                color: #e30077;
                cursor: pointer;
            }
        }
        &.disable {
            a {
                &:hover {
                    color: #999;
                    cursor: not-allowed;
                }
            }
        }
    }
}

.disable {
    color: #999999;
}

i[class^='fa'] {
    color: #e30077;
    font-size: 16px;
    display: inline-block;
}
</style>
