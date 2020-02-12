<template>
  <header id="header">
    <div class="center">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <!-- LOGO -->
          <div id="logo">
            <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
          </div>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

           <!-- MENU -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Comprar</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <!--LIMPIAR FLOTADOS-->
        <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  data() {
    return {
      text: "¡La mejor tienda de productos online!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
