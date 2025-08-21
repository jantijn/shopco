<template>
  <div>
    <h2>Products</h2>
    <div v-if="store.loading">Loading...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <section v-else class="grid">
      <ProductCard v-for="p in store.items" :key="p.id" :product="p" />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../stores/products";
import ProductCard from "../components/ProductCard.vue";

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});
</script>
