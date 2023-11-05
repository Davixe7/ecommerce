<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'

import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';
import { useProductStore } from '../stores/products';

const router = useRouter()
const cart   = useCartStore()
const store  = useProductStore()
</script>

<template>
  <Toolbar>
    <template #start>
      <router-link to="/">Ecommerce</router-link>
    </template>
    <template #center>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText placeholder="Search" v-model="store.search" type="search" />
      </span>
    </template>
    <template #end>
      <Button
        round
        text
        @click="router.push('/cart')">
        <i v-badge.warning="cart.itemsCount" class="pi pi-shopping-cart p-overlay-badge" style="font-size: 1.5rem"></i>
      </Button>
    </template>
  </Toolbar>
</template>

<style>
  @media(max-width: 574px){
    .p-toolbar-group-right {
      order: 1;
    }
    .p-toolbar-group-center {
      order: 2;
    }
  }
</style>