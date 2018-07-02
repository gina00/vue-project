<template>
<section>
    <ul class="list-item">
        <template>
            <li>
                <a class="hotItem" @mouseenter="showActive(1)" @mouseleave="showActive(0)">
                      <img class="img1"  src="../../../static/images/u134.png">
                      <img v-show="active === 1" class="hide_tab" src="../../../static/images/u134_mouseOver.png">
                      <p>档案补正</p>
                </a>
            </li>
            <li>
                <a class="hotItem" @mouseenter="showActive(2)" @mouseleave="showActive(0)">
                      <img class="img1"  src="../../../static/images/u154.png">
                      <img v-show="active === 2" class="hide_tab" src="../../../static/images/u154_mouseOver.png">
                      <p>档案补正</p>
                </a>
            </li>
        </template>
    </ul>
</section>
</template>

<script>
export default {
    name: 'Hover',
    data() {
        return{
            active: 0
        }
        
    },
    // computed: {
    //     styleObject: function () {
    //         return {
    //             background: "url('../../../static/images/u134.png')",
    //             backgroundSize: 'cover',
    //         }
    //     }
    // },
    methods: {
        showActive(index) {
            this.active = index;
        }
    }

}
</script>

<style scoped>
.list-item li {
    float: left;
    width: calc(100% / 5);
    margin: 10px 0;
}

.list-item li img {
    width: 48px;
    height: 48px;
}

.operateItem:hover {
    color: #019ae5;
    cursor: pointer;
}

.list-item li {
    float: left;
    width: calc(100% / 4);
    margin: 10px 0;
}

.hotItem {
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    border: 1px solid transparent;
    text-align: center;
    position: relative;
}

.hotItem:hover {
    color: #019ae5;
    border: 1px solid #0af;
    display: inline-block;
    padding: 5px 20px;
    height: 100px;
    cursor: pointer;
}

.hide_tab {
    position: absolute;
    bottom: 57px;
    left: 28px;
}
</style>
