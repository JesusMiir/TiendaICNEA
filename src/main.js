import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LastProducts from './components/LastProducts.vue';
import AboutUs from './components/AboutUs.vue';
import Buy from './components/Buy.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', componenet: LastProducts},
  {path: '/productos-comprados', componenet: AboutUs},
  {path: '/comprar', componenet: Buy},
  {path: '/', componenet: LastProducts}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
