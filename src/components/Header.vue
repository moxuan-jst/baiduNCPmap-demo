<template>
  <div class="header">
    <a class="left" href="https://www.moxuan.xyz" target="_blank">墨轩啊</a>
    <a class="right" href="https://www.moxuan.xyz" target="_blank">墨轩blog</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header{
  width: 100%;
  height: 50px;
  background-color: #eef7f2;
}
.header .left,
.header .right{
  position: relative;
  font-size:17px; 
  text-decoration:none;
  line-height: 50px;
  color: #000;
}
.header .left{
  left: 5%;
}

.header .right{
  left: 90%;
}
</style>