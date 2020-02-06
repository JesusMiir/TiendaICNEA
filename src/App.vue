<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <!--<router-view></router-view>-->
    <LastProducts></LastProducts>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import Slider from './components/Slider.vue';
import LastProducts from './components/LastProducts.vue';


export default {
  name: 'app',
  components: {
    HeaderComponent,
    Slider,
    LastProducts
  }
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
*/
@import './assets/css/styles.css';
</style>
