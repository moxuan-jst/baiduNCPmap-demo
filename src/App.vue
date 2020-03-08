<template>
  <div id="app">
    <Header />
    <top-nav v-show="show" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-2">
          <HelloWorld />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import TopNav from "./components/TopNav.vue";

import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "App",
  data() {
    return {
      show: false,
      curHeight: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      var curHeight = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      if (curHeight >= 300){
        this.show = true
      }else{
        this.show = false
      }
    }
  },
  components: {
    HelloWorld,
    Header,
    Footer,
    TopNav
  }
};
</script>

<style>
#app {
  background-color: #10aeb5;
}
</style>
