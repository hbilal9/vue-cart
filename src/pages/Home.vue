<script setup>
import { ref, onMounted } from 'vue';
import {useProductStore} from '../stores/productStore'
import Product from '../components/Product.vue';

const store = useProductStore();

onMounted(()=> {
    store.getProducts()
})

const addTocart = (product) => {
    store.addToCart(product)
}

</script>

<template>
    <div class="container">
        <h1 class="text-2xl my-4">Product List</h1>
        <div class="row">
            <Product
                v-for="product in store.products"
                :key="product.id"
                :product="product"
                @addToCart="addTocart"
            />
        </div>
    </div>
</template>