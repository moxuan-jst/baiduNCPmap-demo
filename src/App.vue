<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-2">
          <HelloWorld/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/Header.vue'
import Footer from "./components/footer/Footer.vue"

import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>
#app{
  background-color: #10aeb5;
}
</style>
