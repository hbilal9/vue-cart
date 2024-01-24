import {defineStore} from 'pinia';

export const useFirstStore = defineStore('fisrtSTore', {
    state: () => {
        return {
            counter: 0,
        }
    },
    actions: {
        increment() {
            this.counter ++
        }
    },
    
    getters: {
        doubleCounter(state){
            return state.counter * 2
        }
    }
});