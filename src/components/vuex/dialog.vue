<template>
    <el-dialog :visible.sync="$store.state.show"></el-dialog>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped >
$color:#0af;
.scss{
    a{
        border:1px solid $color;
        color:tomato;
        &:hover{
            color:violet;
        }
    }
}
</style>

