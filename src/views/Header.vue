<template>
    <div class="logoBox">
                <span class="andLogo">
                    <img src="images/u69.png">
                </span>
                <span class="moveLogo">
                    <img src="images/u71.png">
                </span>
                
            </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
@import "../assets/css/style.css";
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
