<script setup>
import Todo from './components/Todo.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  	<!-- <Todo /> -->
	  <!-- <ul class="flex gap-4 p-5 mx-12">
        <li>
            <router-link to="/">Home</router-link>
            
        </li>
        <li><router-link to="/about/12">About</router-link></li>
        <li><router-link to="/contact?phone=1234567">Contact</router-link></li>
    </ul> -->
    <Navbar />
	<router-view />
</template>