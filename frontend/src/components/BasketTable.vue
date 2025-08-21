<template>
  <table class="table" v-if="cart.items.length">
    <thead>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Subtotal</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart.items" :key="item.id">
        <td>
          <div style="display: flex; gap: 0.6rem; align-items: center">
            <img
              :src="item.img"
              alt=""
              width="48"
              height="48"
              style="border-radius: 6px; object-fit: cover"
            />
            <div>{{ item.name }}</div>
          </div>
        </td>
        <td>{{ item.qty }}</td>
        <td>€{{ item.price }}</td>
        <td>€{{ item.price * item.qty }}</td>
        <td>
          <Button variant="secondary" @click="cart.remove(item.id)"
            >Remove</Button
          >
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3" style="text-align: right">Total:</th>
        <th>€{{ cart.items.reduce((s, it) => s + it.price * it.qty, 0) }}</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
  <p v-else>Your basket is empty.</p>
</template>

<script setup>
import Button from "./Button.vue";

import { useCartStore } from "../stores/cart";
const cart = useCartStore();
</script>
