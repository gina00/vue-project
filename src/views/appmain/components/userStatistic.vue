<template>
<div>
    <div slot="header" class="clearfix">
        <span>用户统计</span>
    </div>
    <div class="text item">
        <sale-users></sale-users>
    </div>
</div>
</template>

<script>
import saleUsers from '@/components/echartView/saleUsers';
export default {
    components: {
        'sale-users': saleUsers
    }
};
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
