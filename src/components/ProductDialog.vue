<script setup>
  import Card   from 'primevue/card'
  import Button from 'primevue/button'

  const props    = defineProps(['product'])
</script>
<template>
  <Card class="product-card">
    <template #header>
      <div class="flex">
        <Button text class="ml-auto" icon="pi pi-times" @click="$emit('close')"/>
      </div>
      <img class="w-14rem h-14rem block mx-auto" alt="user header" :src="product.image" />
    </template>

    <template #title>
      <div class="grid">
        <div class="col-8 py-0 p-card-title__content">
          {{ product.title }}
        </div>
        <div class="col-4">
          ${{ product.price }}
        </div>
      </div>
    </template>

    <template #subtitle>
    </template>
    
    <template #content>
      <div style="font-size: .9rem;">
        {{ String(product.description).substring(0,200) }}
      </div>
    </template>

    <template #footer>
    </template>
  </Card>
</template>

<style>
.p-card-subtitle {
  display: none;
}
.p-card-content {
  padding: 0;
  color: rgba(0,0,0,.7);
  line-height: 1.15em;
}
.p-button-label {
  font-weight: 400 !important;
}
</style>