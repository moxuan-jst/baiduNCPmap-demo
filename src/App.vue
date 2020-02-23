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
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app{
  background-color: #10aeb5;
}
</style>
