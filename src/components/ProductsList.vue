<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from './../stores/products'

import Dialog      from 'primevue/dialog';
import Button      from 'primevue/button';

import ProductCard from './ProductCard.vue';
import ProductDialog from './ProductDialog.vue';
import CategoriesList from './CategoriesList.vue';

const store           = useProductStore()
const selectedProduct = ref(null)
const dialog          = ref(false)

onMounted(() => store.fetchProducts())
</script>

<template>
  <div id="products-list">
    <CategoriesList/>
    <div class="grid">
      <div
        v-for="product in store.searchResults"
        :key="product.id"
        class="col-12 md:col-3 sm:col-4">
        <ProductCard
          :product="product"
          @click="()=>{selectedProduct = product; dialog=true;}">
        </ProductCard>
      </div>
    </div>

    <Dialog
        modal
        v-model:visible="dialog"
        class="w-24rem"
        :pt="{mask: {style: 'backdrop-filter: blur(2px)'}}">
        <template #closeicon>
          <Button label="close" text></Button>
        </template>
        <template #container="{ closeCallback }">
          <ProductDialog
            :product="selectedProduct"
            @close="closeCallback"/>
        </template>
    </Dialog>
  </div>
</template>