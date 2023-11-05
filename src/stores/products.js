import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from './../wrappers/axios.js'

export const useProductStore = defineStore('products', () => {
  const products         = ref([])
  const categories       = ref([])
  const selectedCategory = ref('')
  const errors           = ref([])
  const fetching         = ref(false)

  function setCategory(category){
    this.selectedCategory = category;
    this.fetchProducts()
  }

  async function fetchProducts(){
    this.fetching = true
    try {
      let url = this.selectedCategory ? `products/category/${this.selectedCategory}` : 'products'
      this.products = (await api.get(url)).data.map(product=>({...product, ratingValue: product.rating.rate}));
    } catch (error) {
      console.log( error )
    }
    this.fetching = false
  }

  async function fetchCategories(){
    try {
      this.categories = (await api.get('products/categories')).data;
    } catch (error) {
      console.log( error )
    }
  }

  return {
    fetching,
    products,
    fetchProducts,
    categories,
    selectedCategory,
    setCategory,
    fetchCategories,
    errors,
  }
})
