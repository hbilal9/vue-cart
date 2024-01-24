<script setup>
import Button from './Button.vue'

const props = defineProps({
    item: Object
})

const emit = defineEmits(['delete', 'complete'])

const deleteItem = () => {
    emit('delete', props.item.id)
}

const completeItem = () => {
    emit('complete', props.item.id)
}

</script>

<template>
    <li :class="{ done: item.done }">
        <span>{{ props.item.text }}</span>
        <Button @click="deleteItem">Del</Button>
        <Button @click="completeItem">complete</Button>
    </li>
</template>