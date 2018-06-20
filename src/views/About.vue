<template>
    <div class="msg">{{msg}}</div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to the About us page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
    font-size: 25px;
    color: blueviolet;
}
</style>
