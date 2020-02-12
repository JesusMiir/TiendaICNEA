import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LastProducts from './components/LastProducts.vue';
import AboutUs from './components/AboutUs.vue';
import Buy from './components/Buy.vue';

Vue.config.productionTip = false

//Service Worker

// ERROR: console.log no me funciona y he indicado alert.
if('serviceWorker' in navigator) {
  alert('Puedes usar serviceWorker');
  navigator.serviceWorker.register('./sw.js')
                         .then(res => alert('serviceWorker cargado correctamente', res))
                         .catch(err => alert('serviceWorker no cargado correctamente', err));
}
else {
  alert('No puedes usar serviceWorker');
}


//Router

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
