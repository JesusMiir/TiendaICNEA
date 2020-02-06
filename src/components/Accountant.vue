<template>
    <div id="contadores">
        <div class="component">
            <div class="row" id="accountant">
                <div class="col-md-6"><h3>Número de Productos: 0</h3></div>
                <div class="col-md-6"><h3>Precio Total: 0</h3></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contadores',
    data() {
        return {
            subtitulo: 'Soy el subtitulo de mi compoente'
        }
    }
}
</script>