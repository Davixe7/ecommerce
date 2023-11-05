<template>
  <div class="product-list-toolbar mb-4 flex align-items-center px-2">
    <div>
      Showing {{ store.searchResults.length }} products
    </div>
    <div class="ml-auto flex align-items-center">
      <span class="mr-2">
        Sort by
      </span>
      <Dropdown
        v-model="store.orderBy"
        :options="orderOptions"
        optionLabel="name"
        placeholder="select one.."
        class="md:w-10rem"
        size="small"
      />
      <span class="pi ml-2" :class="store.orderBy.icon"></span>
    </div>
  </div>
</template>

<script setup>
  import { useProductStore } from '../stores/products';
  import Dropdown from 'primevue/dropdown'  

  const store   = useProductStore()
  const orderOptions = [
    {name: 'Price high',  code: 'price',  icon: 'pi-sort-numeric-down-alt', sort: -1},
    {name: 'Price low',   code: 'price',  icon: 'pi-sort-numeric-down',     sort: 1},
    {name: 'Rating high', code: 'ratingValue', icon: 'pi-sort-amount-down',      sort: -1},
    {name: 'Rating low',  code: 'ratingValue', icon: 'pi-sort-amount-down-alt',  sort: 1},
  ]
</script>
