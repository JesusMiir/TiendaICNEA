<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <Accountant></Accountant>
    <LastProducts></LastProducts>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import Accountant from './components/Accountant.vue';
import Slider from './components/Slider.vue';
import LastProducts from './components/LastProducts';
export default {
  name: 'app',
  components: {
    HeaderComponent,
    Slider,
    Accountant,
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
