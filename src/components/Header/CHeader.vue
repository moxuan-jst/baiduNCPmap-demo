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
    <div class="city">
    </div>
  </div>
</template>

<script>
import {pro_City, province} from "../../assets/city.js"

export default {
  data(){
    return{
      pro_City,
      province
    }
  },
  methods: {
    choosecity() {
      console.log(1)
    }
  },
  components:{
    
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