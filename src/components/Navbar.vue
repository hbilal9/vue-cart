<script setup>

import { useProductStore } from '../stores/productStore';

const store = useProductStore()

</script>
<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">Shopify</router-link>
            <form class="d-flex" role="search">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            <router-link to="/cart" class="btn btn-default">Cart ({{ store.cart.length }})</router-link>
		</div>
	</nav>
</template>
