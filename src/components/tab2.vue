<template>
<div class="common-box">
    <header>
        <i class="left-icon"></i>
        <span class="title-text">常用功能2</span>
    </header>
    <section>
        <ul>
            <li>产品受理{{height}}</li>
        </ul>
    </section>
</div>
</template>

<script>
export default {
    // props: {
    //     // 检测类型
    //     height: String,
    //     // 检测类型 + 其他验证
    //     age: {
    //         type: Number,
    //         default: 0,
    //         required: true,
    //         validator: function (value) {
    //             return value >= 0
    //         }
    //     }
    // },
      
    data() {
        
    }
};
</script>

<style scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
.common-box {
    font-size: 14px;
    padding: 10px;
    background: #fff;
    margin: 10px;
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
.common-box section{
    padding: 10px;
}
</style>
