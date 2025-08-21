<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="!product">Product not found.</div>
  <div v-else class="product-detail">
    <h2>{{ product.name }}</h2>
    <img :src="product.img" :alt="product.name" />
    <p>{{ product.description }}</p>
    <p class="price">€{{ product.price }}</p>
    <Button variant="primary" @click="addToBasket">Add to Basket</Button>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart";
import { useProductStore } from "../stores/products";

const route = useRoute();
const cart = useCartStore();
const productStore = useProductStore();

const product = ref(null);
const loading = ref(true);

onMounted(async () => {
  product.value = await productStore.fetchProduct(route.params.id);
  loading.value = false;
});

function addToBasket() {
  if (product.value) {
    cart.add({ ...product.value, qty: 1 });
  }
}
</script>
