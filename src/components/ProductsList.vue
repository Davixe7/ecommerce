<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from './../stores/products'

import ProductCard from './ProductCard.vue';

const store           = useProductStore()
const selectedProduct = ref(null)

onMounted(() => store.fetchProducts())
</script>

<template>
  <div id="products-list">
    <div class="grid">
      <div
        v-for="product in store.products"
        :key="product.id"
        class="col-12 md:col-3 sm:col-4">
        <ProductCard
          :product="product"
          @click="()=>{selectedProduct = product; dialog=true;}">
        </ProductCard>
      </div>
    </div>
  </div>
</template>