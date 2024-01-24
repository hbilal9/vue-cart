<script setup>
const {product} = defineProps({
    product: Object
})
const emit = defineEmits(['addToCart'])

const addToCart = () => {
    emit('addToCart', product)
}

</script>
<template>
    <div
        class="col mb-4"
    >
        <div class="card" style="width: 18rem;">
            <img :src="product.image" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <h5 class="card-title">{{product.price}}</h5>
                <p class="card-text">{{product.description}}</p>
                <button @click="addToCart" class="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    </div>
</template>