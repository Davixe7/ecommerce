<script setup>
  import { onMounted, ref } from 'vue';
  import { useProductStore } from '../stores/products';
  import Button from 'primevue/button'
  const store = useProductStore()
  onMounted(() => store.fetchCategories())
</script>

<template>
  <div id="categories-list" class="flex justify-content-center pt-3 pb-4">
    <Button
      @click="() => store.setCategory('')"
      class="mr-2"
      label="All"
      :text="store.selectedCategory != ''"
      :loading="store.fetching && store.selectedCategory == ''">
    </Button>
    <Button
      v-for="category in store.categories"
      :key="category"
      :label="category"
      class="mr-2"
      @click="() => store.setCategory(category)"
      :text="store.selectedCategory != category"
      :loading="store.fetching && store.selectedCategory == category">
    </Button>
  </div>
</template>