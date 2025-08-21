<template>
  <header class="site-header">
    <h1>ShopCo</h1>
    <nav>
      <RouterLink to="/products">Products</RouterLink> |
      <RouterLink to="/basket">Basket ({{ cart.count }})</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
</script>
