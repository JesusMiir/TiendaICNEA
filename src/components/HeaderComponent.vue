<template>
  <header id="header">
    <div class="center">
        <!-- LOGO -->
        <div id="logo">
            <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
          
        </div>
        
        <!-- MENU -->
        <nav id="menu">
            <ul>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="blog.html">Mis Productos</a>
                </li>
                <li>
                    <a href="formulario.html">Comprar</a>
                </li>                          
            </ul>
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
