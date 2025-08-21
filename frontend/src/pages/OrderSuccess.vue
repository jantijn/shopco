<template>
  <div class="success">
    <h2>🎉 Order Successful!</h2>
    <p>Your order has been placed successfully.</p>
    <p><strong>Order ID:</strong> {{ orderId }}</p>
    <p><strong>Total:</strong> €{{ total }}</p>

    <RouterLink to="/products">
      <Button variant="primary">Continue Shopping</Button>
    </RouterLink>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";
import Button from "../components/Button.vue";

const route = useRoute();
const orderId = route.query.id;
const total = route.query.total;
</script>

<style scoped>
.success {
  text-align: center;
  padding: 2rem;
}
.success h2 {
  color: var(--accent);
}
</style>
