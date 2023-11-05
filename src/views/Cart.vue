<script setup>
import { useCartStore } from './../stores/cart';

import Button from 'primevue/button'
const store = useCartStore()
</script>

<template>
  <div>
    <div
      v-if="!store.cart.length"
      class="flex flex-column justify-content-center align-items-center">
      <img src="./../assets/empty_cart.webp" style="max-width: 280px;"/>
      <div class="font-semibold">Your cart is empty!</div>
      <p>There's no products in your cart to see yet</p>
      <Button
        icon="pi pi-arrow-left"
        label="Go back to shop"
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>