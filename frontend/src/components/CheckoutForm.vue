<template>
  <div v-if="cart.items.length" class="checkout">
    <input v-model="customerName" placeholder="Your name" class="input" />
    <Button variant="primary" @click="placeOrder">Place Order</Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
const customerName = ref("");
const router = useRouter();

async function placeOrder() {
  if (!customerName.value) {
    alert("Please enter your name before placing the order");
    return;
  }

  const order = {
    customer_name: customerName.value,
    items: cart.items.map((it) => ({
      product_id: it.id,
      qty: it.qty,
    })),
  };

  try {
    const res = await fetch("http://http://161.35.85.71/api/orders/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error("Failed to place order");
    const data = await res.json();

    cart.items = []; // clear cart
    cart.persist();

    // redirect to success page with order data
    router.push({
      name: "OrderSuccess",
      query: { id: data.order_id, total: data.total },
    });
  } catch (err) {
    console.error(err);
    alert("Something went wrong placing your order");
  }
}
</script>

<style scoped>
.checkout {
  margin-top: 1rem;
}
.input {
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
}
</style>
