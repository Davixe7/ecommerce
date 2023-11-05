<script setup>
import { useCartStore } from './../stores/cart';

import Button              from 'primevue/button'
import Column              from 'primevue/column'
import ColumnGroup         from 'primevue/columngroup'
import Row                 from 'primevue/row'
import DataTable           from 'primevue/datatable'
import CartProductControls from '../components/CartProductControls.vue'

const store          = useCartStore()
const formatCurrency = value => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
    <DataTable
      v-else
      :value="store.cart"
      tableStyle="min-width: 50rem">
      <template #header>
        <span class="text-xl text-600 font-bold">Cart</span>
      </template>
      <Column header="">
        <template #body="slotProps">
          <img
            :src="slotProps.data.image"
            :alt="slotProps.data.name"
            class="h-3rem border-round" />
        </template>
      </Column>
      <Column field="title" header="Product"/>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>

      <Column field="quantity" header="QTY">
        <template #body="slotProps">
          <CartProductControls :product="slotProps.data"/>
        </template>
      </Column>

      <Column header="Subtotal">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price * slotProps.data.quantity) }}
        </template>
      </Column>

      <ColumnGroup type="footer">
        <Row>
          <Column colspan="4" footer="Total"/>
          <Column colspan="1" :footer="'$' + formatCurrency(store.total)"/>
        </Row>
      </ColumnGroup>

      <template #footer>
        In total there are {{ store.cart ? store.cart.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>