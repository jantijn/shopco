<template>
  <article class="card">
    <img :src="product.img" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p class="price">€{{ product.price }}</p>
    <Button as="RouterLink" :to="`/product/${product.id}`">View details</Button>
  </article>
</template>

<script setup>
import Button from "./Button.vue";

defineProps({
  product: Object,
});
</script>
