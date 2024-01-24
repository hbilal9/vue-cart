import {defineStore} from 'pinia';
import productList from '../assets/data/products.json'

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            products: [],
            cart: []
        }
    },
    actions: {
        getProducts(){
            this.products = productList;
        },
        addToCart(product){
            const index = this.cart.findIndex(obj => obj.id === product.id)
            if (index === -1){
                this.cart.push({...product, qty: 1})
            }else {
                this.cart[index].qty += 1;
            }
        }
    },
});