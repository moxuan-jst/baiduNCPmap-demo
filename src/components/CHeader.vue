<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <p class="logo text-left">墨轩blog</p>
      </div>
      <div class="col-md-2 col-md-offset-5">
        <button class="btn btn-sm" type="button" @click="choosecity()">
          全国
          <span class="caret"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choosecity() {}
  }
};
</script>

<style scoped>
.container {
  height: 40px;
  /* background-color: red; */
  line-height: 40px;
}
.logo {
  position: absolute;
  left: 0;
  font-size: 20px;
  color: #fff;
}
</style>