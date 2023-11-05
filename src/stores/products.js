import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from './../wrappers/axios.js'

export const useProductStore = defineStore('products', () => {
  const products         = ref([])
  const errors           = ref([])
  const fetching         = ref(false)

  async function fetchProducts(){
    this.fetching = true
    try {
      this.products = (await api.get('products')).data
    } catch (error) {
      console.log( error )
    }
    this.fetching = false
  }

  return {
    fetching,
    products,
    fetchProducts,
    errors,
  }
})
