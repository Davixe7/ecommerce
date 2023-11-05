<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';

import { useCartStore } from '../stores/cart';

const store = useCartStore()
const props = defineProps(['product'])
</script>

<template>
  <Card class="product-card">
    <template #header>
      <img class="w-12rem h-12rem block mx-auto" alt="user header" :src="product.image" />
    </template>
    <template #title>
      <Rating v-model="product.rating.rate" readonly :cancel="false" class="mb-3"/>
      <div class="grid">
        <div class="col-8 py-0 p-card-title__content">
          {{ product.title }}
        </div>
        <div class="col-4">
          ${{ product.price }}
        </div>
      </div>
    </template>
    <template #subtitle></template>
    <template #content></template>

    <template #footer>
      <Button
        v-if="!store.inCart(product)"
        label="Add to cart"
        class="w-full flex"
        icon="pi pi-shopping-cart" outlined>
      </Button>
      <Button
        v-else
        label="View in cart"
        class="w-full flex"
        icon="pi pi-shopping-cart" outlined
        @click="$router.push('/cart')">
      </Button>
    </template>
  </Card>
</template>

<style>
img {
  object-fit: contain;
}
.p-card-title {
  font-size: 1rem !important;
}
.product-card .p-card-title__content {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.p-button {
  font-size: 1rem !important;
}
</style>

<style scoped>
.p-card-content, .p-card-subtitle {
  display: none;
}
.p-card {
  height: 386px;
}
</style>