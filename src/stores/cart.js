import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from './../wrappers/axios.js'

export const useCartStore = defineStore('cart', () => {
  const cart             = ref([])

  function addProduct(product, quantity){
    this.cart.push({...product, productId: product.id, quantity})
  }

  function removeProduct(product){
    if( !window.confirm('Are you sure you want to remove this product from your cart?') ) return
    if( typeof product == 'object' ){
      let index = this.cart.indexOf(product)
      if( index != -1 ){
        this.cart.splice(index, 1)
      }
      return
    }
    this.cart = this.cart.filter(item => item.productId != product)
  }

  function inCart(product){
    return this.cart.some(item => item.productId == product.id)
  }

  const itemsCount = computed(()=>cart.value.length)

  const total = computed(()=>{
    return cart.value.reduce((carry, item)  => carry + (item.price * item.quantity), 0).toFixed(2)
  })

  return { cart, itemsCount, addProduct, removeProduct, inCart, total }
})
