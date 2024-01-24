<script setup>
    import { ref, reactive } from 'vue';
    import Item from './Item.vue';

    const items = ref([
        {id: 1, text: 'item 1', done: false},
        {id: 2, text: 'item 2',  done: false},
        {id: 3, text: 'xyz 3',  done: false},
        {id: 4, text: 'item 4',  done: false},
        {id: 5, text: 'item 5',  done: false},
    ])

    const addItemData = reactive({text: ''});
    const addItem = () => {
        let obj = {
            id: 7,
            text: addItemData.text,
            done: false
        }
        items.value.push(obj)
        addItemData.text = ''
    }

    const deleteItem = (id) => {
        items.value = items.value.filter(item => item.id !== id )
    }

    const completeItem = (id) => {
        items.value = items.value.map(item => {
            if(item.id == id){
                item.done = true
            }
            return item
        })
    }
</script>

<template>
    <div class="wrapper">
        <div class="todo">
            <div class="card">
                <div>
                    <input
                        v-model="addItemData.text"
                        placeholder="Enter your list info"
                        type="text"
                    />
                    <button @click="addItem">Add</button>
                </div>
                <ul>
                    <Item
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                        @complete="completeItem"
                        @delete="deleteItem"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .done {
        text-decoration: line-through;
    }

    input {
        padding: 0.5rem;
        border-radius: 2rem;
    }

    button {
        padding: 0.5rem 1rem 0.5rem 1rem;
        margin-left: 1rem;
        border-radius: 1rem;
    }

    .card {
        padding: 2rem;
        background: #e1e1e1;
        border-radius: 2rem;
    }

    ul {
        list-style: none;
    }
</style>