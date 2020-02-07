<template>
    <section id="content">
        <div class="container">
             <br><br>
            <div class="row">
               
                    <div class="col-md-6"><h3>Número de Productos: {{number_of_products}}</h3></div>
                    <div class="col-md-6"><h3>Precio Total: {{price}}</h3></div>
            
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
                            Unidades Compradas: {{product.qtty}}
                        </span>
                        <br>
                        <div class="row">
                            <div class="col-md-1">
                                <button v-on:click="addProduct(product.id)">+</button>
                            </div>    
                            <div class="col-md-1">
                                <button v-on:click="removeProduct(product.id)">-</button>
                            </div> 
                        </div>

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
            price: 0,
            products: [
                {id:0, name: 'Manzana', price: 2.75, qtty: 0},
                {id:1, name: 'Tomate', price: 0.36, qtty: 0},
                {id:2, name: 'Naranja', price: 0.60, qtty: 0},
                {id:3, name: 'Pera', price: 3.60, qtty: 0},
            ]};
        },
        methods:{
            addProduct(i) {
                this.number_of_products++;
                this.price += this.products[i].price;
                this.products[i].qtty++;
            },
            removeProduct(i) {
                if (this.products[i].qtty > 0) {
                    this.number_of_products--;
                    this.price -= this.products[i].price;
                    this.products[i].qtty--;
                }
            }
        }
    }
    
</script>