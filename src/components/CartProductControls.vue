<template>
  <div class="grid flex-nowrap">
    <Button
      v-if="product.quantity == 1"
      @click="store.removeProduct(product.id)"
      outlined
      severity="danger"
      size="small"
      icon="pi pi-trash"/>

    <Button v-else size="small" icon="pi pi-minus" @click="product.quantity--"/>
    <InputText size="small" class="w-3rem mx-2" :model-value="product.quantity" readonly/>
    <Button size="small" icon="pi pi-plus" @click="product.quantity++" />
  </div>
</template>

<script setup>
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import { useCartStore } from '../stores/cart';

  const props = defineProps(['product'])
  const store = useCartStore()
</script>