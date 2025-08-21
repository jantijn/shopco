<template>
  <div>
    <Header />
    <main class="container">
      <router-view />
    </main>
    <footer class="site-footer">
      <p>© ShopCo</p>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
