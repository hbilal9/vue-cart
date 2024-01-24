<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useFirstStore } from '../stores/firstStore';

const store = useFirstStore();

const route = useRoute();
const router = useRouter();
const phone = route.query.phone

const visitTotest = () => {
    router.push(`/test/${12}`)
}

</script>

<template>
    <h1>Contact</h1>
    {{ route.query.phone }}
    {{ store.counter }} - 2x {{ store.doubleCounter }} <br> <br> 
    <button @click="store.increment">increment</button> <br> <br>

    <button @click="visitTotest">Visit To Test</button>
</template>