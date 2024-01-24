<script setup>
import { computed } from 'vue';
import { useProductStore } from '../stores/productStore';
import { toast } from 'vue3-toastify';
const store = useProductStore()

const total = computed(() => {
    let initTotal = 0;
    store.cart.forEach(product => {
        initTotal += (product.price * product.qty)
    })
    return initTotal.toFixed(2) + ' $';
})

const handleCheckout = () => {
	toast.success("Order Placed successfully", {
        autoClose: 3000,
      });

	store.cart = [];
}

</script>
<template>
	<div class="container">
		<table class="table mt-5" v-if="store.cart.length !== 0">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Qty</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr
				    v-for="(product, i) in store.cart"
				    :key="product.id"
				>
					<th scope="row">{{ i+1 }}</th>
					<td>{{product.name}}</td>
					<td>{{product.qty}}</td>
					<td>{{product.price}}</td>
				</tr>
				<tr>
					<th colspan="2" class="text-center">Total</th>
					<th colspan="2" class="text-center">{{ total }}</th>
				</tr>
				<tr>
					<th colspan="4" class="text-center">
						<button @click="handleCheckout" class="btn btn-success">Checkout</button>
					</th>
				</tr>
			</tbody>
		</table>
		<h3 v-else class="text-center mt-5">No items in the cart</h3>
	</div>
</template>
