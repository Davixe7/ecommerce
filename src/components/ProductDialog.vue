<script setup>
  import Card   from 'primevue/card'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import { ref } from 'vue';
  import {useCartStore} from './../stores/cart'
  import { useRouter } from 'vue-router';

  const router   = useRouter()
  const store    = useCartStore();
  const props    = defineProps(['product'])
  const quantity = ref(0)
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
      <template v-if="!store.inCart(product)">
        <div class="grid flex-nowrap">
          <div class="col-fixed w-min"><Button icon="pi pi-minus" :disabled="!quantity" @click="quantity--"></Button></div>
          <div class="col"><InputText class="text-center w-full" v-model="quantity"></InputText></div>
          <div class="col-fixed w-min"><Button icon="pi pi-plus" @click="quantity++"></Button></div>
        </div>
        <Button
          :disabled="!quantity"
          @click="store.addProduct(product, quantity)"
          label="Add to cart"
          class="w-full"
          icon="pi pi-shopping-cart">
        </Button>
      </template>
      <template v-else>
        <div class="flex justify-content-between">
          <Button
            @click="router.push('/cart')"
            label="Go to cart"
            icon="pi pi-shopping-cart"
            outlined>
          </Button>
          <Button
            @click="$emit('close')"
            label="Keep shopping">
          </Button>
        </div>
      </template>
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