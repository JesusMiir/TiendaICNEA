<template>
    <section id="content">
        <div class="container">
             <br><br>
            <div class="row">
               
                    <div class="col-md-6"><h3>Número de Productos: {{number_of_products}}</h3></div>
                    <div class="col-md-6"><h3>Precio Total: {{value_of_price}}</h3></div>
            
            </div>
             <br><br>
            <div class="row">
                <div class="col-md-12" v-for="product of products" :key="product.name">
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            <img src="../assets/img/Frutas.jpg" alt="Pera" />
                        </div>

                        <h2>{{product.name}}</h2>
                        <span class="date">
                            Precio: {{product.price}}
                        </span>
                        <span class="date">
                            Unidades Compradas: 
                            <input type="number" v-model="product.qtty" @keyup.enter="change_qtty_product(product.id)">
                            <button @click="product.qtty++; number_of_products++">+</button>
                            <button @click="product.qtty--; number_of_products--" v-if="product.qtty > 0">-</button>
                        </span>

                        <div class="clearfix"></div>
                    </article>
                </div>
            </div>
        </div>
        <br><br><br><br>
    </section>
    
</template>

<script>

    export default {
        name: 'LastProducts',
        data: function() {
            return{
            number_of_products: 0,
            products: [
                {id:0, name: 'Manzana', price: 2.75, qtty: 0},
                {id:1, name: 'Tomate', price: 0.36, qtty: 0},
                {id:2, name: 'Naranja', price: 0.60, qtty: 0},
                {id:3, name: 'Pera', price: 3.60, qtty: 0},
            ]};
        },
        methods:{
            change_qtty_product(id) {
                if (this.products[id].qtty < 0) 
                    this.products[id].qtty = 0;
            }
        },
        computed: {
            value_of_price() {
                let total_price = 0;
                for (let product of this.products)
                    total_price += (product.price * product.qtty);
                return total_price;
            }
        }
    }
    
</script>