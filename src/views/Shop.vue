<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/products';
const store = useProductStore()
onMounted(()=>store.fetchProducts())
</script>

<template>
  <div id="shop">
    Shop
  </div>
</template>