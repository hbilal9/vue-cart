<script setup>
// import { useRoute } from 'vue-router';
import { useFirstStore } from '../stores/firstStore';

const store = useFirstStore();

// const route = useRoute();
// const phone = route.query.phone

</script>

<template>
    <h1>Test</h1>
    {{ store.counter }} - 2x {{ store.doubleCounter }} <br> <br> 
    <button @click="store.increment">increment</button> <br> <br>
    <!-- {{ route.query.phone }} -->
</template>