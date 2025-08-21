<template>
  <div>
    <h2>Your Basket</h2>
    <BasketTable />
    <CheckoutForm />
  </div>
</template>

<script setup>
import BasketTable from "../components/BasketTable.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
</script>
