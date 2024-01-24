<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <h1>About</h1>
    id: {{route.params.id}}
</template>